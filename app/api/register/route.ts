import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, organisation, category } = body;

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

    // --- Stage 2: Supabase integration will be added here ---
    // const supabase = createClient(
    //   process.env.NEXT_PUBLIC_SUPABASE_URL!,
    //   process.env.SUPABASE_SERVICE_ROLE_KEY!
    // );
    // await supabase.from("registrations").insert({ ... });

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
