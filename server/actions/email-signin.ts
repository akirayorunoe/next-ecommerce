"use server";

import { LoginSchema } from "@/types/login-schema";
import { createSafeActionClient } from "next-safe-action";
import { db } from "@/server";
import { eq } from "drizzle-orm";
import { users } from "../schema";

const action = createSafeActionClient();

export const emailSignin = action
  .schema(LoginSchema)
  .action(async ({ parsedInput: { email, password, code } }) => {
    const existingUser = await db.query.users.findFirst({
      where: eq(users.email, email),
    });

    if (existingUser?.email !== email) {
      return { error: "User not found" };
    }

    if (!existingUser.emailVerified) {
    }

    console.log("email", email, "password", password, "code", code);
    return { success: email };
  });
