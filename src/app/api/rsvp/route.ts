import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";

const optionalText = z
  .string()
  .trim()
  .optional()
  .transform((value) => (value ? value : undefined));

const rsvpSchema = z.object({
  fullName: z.string().trim().min(2, "Full name is required."),
  email: optionalText.pipe(z.email("Email must be valid.").optional()),
  phone: optionalText,
  attending: z.boolean("Attending must be true or false."),
  guestsCount: z
    .number("Guests count must be a number.")
    .int("Guests count must be a whole number.")
    .min(0, "Guests count cannot be negative.")
    .max(20, "Guests count is too high."),
  message: optionalText,
  language: z.enum(["es", "en"]).default("es"),
});

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON body." },
      { status: 400 },
    );
  }

  const result = rsvpSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json(
      {
        error: "Invalid RSVP data.",
        issues: z.flattenError(result.error).fieldErrors,
      },
      { status: 400 },
    );
  }

  try {
    const rsvp = await prisma.rsvp.create({
      data: result.data,
      select: {
        id: true,
      },
    });

    return NextResponse.json(
      {
        success: true,
        id: rsvp.id,
      },
      { status: 201 },
    );
  } catch {
    return NextResponse.json(
      { error: "Unable to save RSVP confirmation." },
      { status: 500 },
    );
  }
}

export async function GET(request: Request) {
  const adminSecret = process.env.ADMIN_SECRET;
  const { searchParams } = new URL(request.url);

  if (!adminSecret || searchParams.get("secret") !== adminSecret) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  const rsvps = await prisma.rsvp.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return NextResponse.json({ rsvps });
}
