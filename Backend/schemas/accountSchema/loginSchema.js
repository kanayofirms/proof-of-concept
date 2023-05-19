import { z } from "zod";

const loginSchema = z.object({
    email: z.string()
    .email({ message: "Invalid Email Address" })
    .min(1, { message: "Email I s Required"}),
    password: z
    .string()
    .min(1, { 
        message: "Password Field Is Required"
    })
    .max(255, {
        message: "Password Field Is Long",
    }),
});

export default loginSchema;