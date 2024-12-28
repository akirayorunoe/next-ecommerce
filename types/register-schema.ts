import * as z from "zod";

export const RegisterSchema = z.object({
  email: z.string().email({
    message: "Invalid Email Address",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters",
  }),
  name: z.string().min(1, {
    message: "Please add at least one character",
  }),
});
