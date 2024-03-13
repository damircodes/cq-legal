import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Define the POST method handler directly
export async function POST(request) {
  // Parsing the JSON body from the request
  const formData = await request.json(); // Correctly parse the JSON body once

  // Destructure formData to extract the necessary information
  // Assuming formData has firstName, lastName, email, subject, company, about based on the front end structure
  const {
    firstName,
    lastName,
    email,
    subject,
    company,
    about,
    enquiryTypes,
    contactPreference,
  } = formData;

  // Define your nodemailer transporter
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: 587,
    secure: false, // true for port 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"${firstName} ${lastName}" <${email}>`, // Use destructured firstName and lastName
    to: process.env.EMAIL_TO,
    subject: subject,
    text: `
      Name: ${firstName} ${lastName}
      Email: ${email}
      Company: ${company}
      Message: ${about}
      Enquiry Types: ${enquiryTypes.join(
        ", "
      )} // Assuming enquiryTypes is an array
      Contact Preference: ${contactPreference}
    `,
    html: `
      <b>Name:</b> ${firstName} ${lastName} <br>
      <b>Email:</b> ${email} <br>
      <b>Company:</b> ${company} <br>
      <b>Message:</b> ${about} <br>
      <b>Enquiry Types:</b> ${enquiryTypes.join(", ")} <br> 
      <b>Contact Preference:</b> ${contactPreference}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully" }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    // Return a detailed error message, including the error's message property
    return new Response(
      JSON.stringify({
        success: false,
        error: "Failed to send email",
        details: error.message,
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
