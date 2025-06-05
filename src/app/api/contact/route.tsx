// app/api/contact/route.ts

import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const rawFormData = await req.formData();

    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      console.error("Missing Web3Forms access key.");
      return new Response(
        JSON.stringify({ success: false, message: "Missing Web3Forms access key" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    const formData = new FormData();
    formData.append("access_key", accessKey);

    rawFormData.forEach((value, key) => {
      formData.append(key, value);
    });

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    if (!result.success) {
      console.error("Web3Forms error:", result);
    }

    return new Response(JSON.stringify(result), {
      status: response.status,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Server error:", err);
    return new Response(
      JSON.stringify({ success: false, message: "Server error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
