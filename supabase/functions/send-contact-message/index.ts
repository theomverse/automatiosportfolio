import { createClient } from "https://esm.sh/@supabase/supabase-js@2.57.4";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const RECIPIENT = "omverse69@gmail.com";
const GATEWAY_URL = "https://connector-gateway.lovable.dev/google_mail/gmail/v1";

function encodeHeader(value: string) {
  // RFC 2047 encoding so non-ASCII names/subjects survive
  return /^[\x20-\x7E]*$/.test(value)
    ? value
    : `=?UTF-8?B?${btoa(String.fromCharCode(...new TextEncoder().encode(value)))}?=`;
}

function toBase64Url(input: string) {
  const bytes = new TextEncoder().encode(input);
  let binary = "";
  bytes.forEach((b) => (binary += String.fromCharCode(b)));
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, message } = await req.json();

    if (
      typeof name !== "string" || typeof email !== "string" || typeof message !== "string" ||
      !name.trim() || !message.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.trim()) ||
      name.length > 200 || email.length > 320 || message.length > 5000
    ) {
      return new Response(JSON.stringify({ error: "Invalid input" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );

    const { error: dbError } = await supabase.from("contact_submissions").insert({
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
    });
    if (dbError) console.error("Failed to store submission:", dbError.message);

    const lovableKey = Deno.env.get("LOVABLE_API_KEY");
    const gmailKey = Deno.env.get("GOOGLE_MAIL_API_KEY");
    if (!lovableKey || !gmailKey) {
      console.error("Gmail connector not configured");
      return new Response(JSON.stringify({ error: "Email is not configured" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const raw = [
      `To: ${RECIPIENT}`,
      `Subject: ${encodeHeader(`New portfolio enquiry from ${name.trim()}`)}`,
      `Reply-To: ${email.trim()}`,
      'Content-Type: text/plain; charset="UTF-8"',
      "",
      `Name: ${name.trim()}`,
      `Email: ${email.trim()}`,
      "",
      "Message:",
      message.trim(),
    ].join("\r\n");

    const response = await fetch(`${GATEWAY_URL}/users/me/messages/send`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${lovableKey}`,
        "X-Connection-Api-Key": gmailKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ raw: toBase64Url(raw) }),
    });

    if (!response.ok) {
      const details = await response.text();
      console.error(`Gmail send failed [${response.status}]: ${details}`);
      return new Response(
        JSON.stringify({ error: "Failed to send email", status: response.status, details }),
        { status: response.status, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("send-contact-message error:", e);
    return new Response(JSON.stringify({ error: (e as Error).message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
