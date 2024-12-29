"use server";

import { ResetSchema } from "@/types/reset-schema";
import { eq } from "drizzle-orm";
import { createSafeActionClient } from "next-safe-action";
import { users } from "../schema";
import { db } from "..";
import { generatePasswordResetToken } from "./tokens";
import { sendPasswordResetEmail } from "./email";

const action = createSafeActionClient();
export const reset = action
  .schema(ResetSchema)
  .action(async ({ parsedInput: { email } }) => {
    const existingUser = await db.query.users.findFirst({
      where: eq(users.email, email),
    });
    if (!existingUser) {
      return { error: "User not found" };
    }

    const passwordResetToken = await generatePasswordResetToken(email);
    if (!passwordResetToken) {
      return { error: "Token not generated" };
    }
    await sendPasswordResetEmail(email, passwordResetToken[0].token);
    return { success: "Password Reset Email Sent" };
  });
