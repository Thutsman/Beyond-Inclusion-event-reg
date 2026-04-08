import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const CATEGORIES = new Set([
  "Policy Maker",
  "Finance & Economics Professional",
  "Academic / Researcher",
  "Student",
  "Business Executive",
  "Media",
  "General Public",
]);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const firstName = String(body.firstName ?? "").trim();
    const lastName = String(body.lastName ?? "").trim();
    const email = String(body.email ?? "").trim().toLowerCase();
    const phone = String(body.phone ?? "").trim();
    const organisation = String(body.organisation ?? "").trim();
    const category = String(body.category ?? "").trim();

    // Validate required fields
    if (!firstName || !lastName || !email || !category) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (!CATEGORIES.has(category)) {
      return NextResponse.json(
        { error: "Please select a valid attendee category." },
        { status: 400 }
      );
    }

    const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !supabaseServiceRoleKey) {
      console.error("Missing SUPABASE_URL/NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY.");
      return NextResponse.json(
        { error: "Service is temporarily unavailable. Please try again shortly." },
        { status: 503 }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseServiceRoleKey, {
      auth: { persistSession: false },
    });

    const { error } = await supabase.from("registrations").insert({
      first_name: firstName,
      last_name: lastName,
      email,
      phone: phone || null,
      organisation: organisation || null,
      category,
      source: "web",
      ip_address: req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || null,
      user_agent: req.headers.get("user-agent"),
    });

    if (error) {
      // Postgres unique violation (email already registered)
      if (error.code === "23505") {
        return NextResponse.json(
          { error: "This email is already registered for the event." },
          { status: 409 }
        );
      }
      console.error("Supabase insert error:", error);
      return NextResponse.json(
        { error: "Unable to complete registration at the moment. Please try again." },
        { status: 500 }
      );
    }

    // --- Stage 2: Resend email integration will be added here ---
    // Send confirmation email to registrant
    // Send notification to jamila@nexcelia.com

    console.log("New registration:", { firstName, lastName, email, phone, organisation, category });

    return NextResponse.json(
      { message: "Registration successful." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
