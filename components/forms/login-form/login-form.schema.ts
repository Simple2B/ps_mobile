import { z } from "zod";

export const formSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export type FormSchema = z.infer<typeof formSchema>;
