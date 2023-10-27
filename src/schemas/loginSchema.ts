import { z } from "zod";

const formSchema = z.object({
  name: z
    .string({
      required_error: "error.nameRequired",
      invalid_type_error: "error.nameType",
    })
    .trim()
    .min(3, { message: "error.nameMinLength" })
    .max(16, { message: "error.nameMaxLength" }),
  email: z
    .string({
      required_error: "error.emailRequired",
    })
    .trim()
    .email({ message: "error.email" }),
  subject: z
    .string({
      required_error: "error.subjectRequired",
    })
    .trim()
    .min(3, { message: "error.subjectMinLength" })
    .max(500, { message: "error.subjectMaxLength" }),
});

type formSchemaType = z.infer<typeof formSchema>;

type flattenedError = z.inferFlattenedErrors<typeof formSchema>;

export { formSchema, type formSchemaType, type flattenedError };
