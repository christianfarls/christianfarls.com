// app/api/contact/route.tsx
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import prisma from "@/lib/prisma";

export async function POST(request: Request) {
    try {
        // 1) Parse the request body
        const { name, email, message } = await request.json();

        // Basic validation
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        // 2) [Optional] Send an email via Nodemailer
        //    (If you still want to receive notifications by email)
        const transporter = nodemailer.createTransport({
            service: "Gmail",
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS,
            },
        });

        const mailOptions = {
            from: email,
            to: process.env.GMAIL_USER, // or another address
            subject: `New message from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        };

        await transporter.sendMail(mailOptions);

        // 3) Insert into Neon DB using Prisma
        await prisma.contactMessage.create({
            data: { name, email, message },
        });

        // 4) Return a success response
        return NextResponse.json({ success: true }, { status: 200 });
    } catch (error) {
        console.error("Error in contact route:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
