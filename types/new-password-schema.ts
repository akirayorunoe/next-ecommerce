import { z } from "zod";

export const NewPasswordSchema = z.object({
  password: z.string().min(8, {
    message: "Password required",
  }),
  token: z.string().nullable().optional(),
});
