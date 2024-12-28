"use server";

import { RegisterSchema } from "@/types/register-schema";
import { createSafeActionClient } from "next-safe-action";
import bcrypt from "bcrypt";
import { eq } from "drizzle-orm";
import { users } from "../schema";
import { db } from "@/server";
import { generateEmailVerificationToken } from "./tokens";
import { sendVerificationEmail } from "./email";

const action = createSafeActionClient();

export const emailRegister = action
  .schema(RegisterSchema)
  .action(async ({ parsedInput: { email, password, name } }) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    // Check if user already exists
    const existingUser = await db.query.users.findFirst({
      where: eq(users.email, email),
    });

    if (existingUser) {
      if (!existingUser.emailVerified) {
        const verificationToken = await generateEmailVerificationToken(email);
        await sendVerificationEmail(email, verificationToken[0].token);

        return { success: "Email Confirmation Sent" };
      }
      return { error: "User already exists" };
    }

    // Logic for when user is not registered
    await db.insert(users).values({
      email,
      password: hashedPassword,
      name,
    });

    const verificationToken = await generateEmailVerificationToken(email);
    await sendVerificationEmail(email, verificationToken[0].token);

    return { success: "Confirmation Email Sent" };
  });
