import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "re_dummykey");

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, issueType, zipCode, description } = body;

    // Basic validation
    if (!name || !phone) {
      return NextResponse.json(
        { error: "Name and phone are required." },
        { status: 400 }
      );
    }

    const issueLabels: Record<string, string> = {
      install: "New Installation",
      repair: "Repair Needed",
      maintenance: "Maintenance",
      emergency: "🚨 EMERGENCY",
    };

    const { data, error } = await resend.emails.send({
      from: "Legacy Garage Doors <hello@legacydoorsales.com>",
      to: ["seth@legacydoorsales.com"],
      replyTo: email || undefined,
      subject: `New Service Request — ${issueLabels[issueType] ?? issueType} (${zipCode})`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; color: #f5f5f5; border-radius: 8px; overflow: hidden;">
          <div style="background: #e87217; padding: 24px 32px;">
            <h1 style="margin: 0; font-size: 22px; color: #fff; font-weight: 700;">New Service Request</h1>
            <p style="margin: 4px 0 0; color: rgba(255,255,255,0.8); font-size: 14px;">Legacy Garage Doors</p>
          </div>

          <div style="padding: 32px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #222; color: #999; font-size: 13px; width: 140px;">Service Type</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #222; font-weight: 600; color: #e87217;">${issueLabels[issueType] ?? issueType}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #222; color: #999; font-size: 13px;">Name</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #222; font-weight: 600;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #222; color: #999; font-size: 13px;">Phone</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #222;">
                  <a href="tel:${phone}" style="color: #e87217; text-decoration: none; font-weight: 600;">${phone}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #222; color: #999; font-size: 13px;">Email</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #222;">${email || "Not provided"}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #222; color: #999; font-size: 13px;">Zip Code</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #222;">${zipCode}</td>
              </tr>
              <tr>
                <td style="padding: 14px 0 0; color: #999; font-size: 13px; vertical-align: top;">Description</td>
                <td style="padding: 14px 0 0; color: #ccc; line-height: 1.6;">${description || "No description provided."}</td>
              </tr>
            </table>
          </div>

          <div style="padding: 16px 32px; background: #111; font-size: 12px; color: #555; text-align: center;">
            Submitted via legacygaragedoors.com • ${new Date().toLocaleString("en-US", { timeZone: "America/Chicago" })} CT
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    console.error("Unexpected error:", err);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
