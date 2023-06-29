import { z } from "zod";

export interface schema {
  phoneNumber: z.ZodString;
  password1: z.ZodString;
  password2: z.ZodString;
}

export const schema = z
  .object({
    phoneNumber: z
      .string()
      .refine((value) => /^(01|601)[0-9]{8,9}/.test(value), {
        message: "Invalid phone",
      }),
    userName: z
      .string()
      .min(3, { message: "User name must be at least 3 characters long" })
      .max(20, { message: "User name must be at most 20 characters long" }),
    password1: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" }),
    password2: z.string(),
  })
  .refine((data) => data.password1 === data.password2, {
    message: "Passwords don't match",
    path: ["password2"],
  });
