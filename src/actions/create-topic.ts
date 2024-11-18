"use server";

import { z } from "zod";

const createTopicSchema = z.object({
  name: z
    .string()
    .min(3)
    .regex(/^[a-z-]+$/, {
      message: "Only lowercase letters and hyphens are allowed",
    }),
  description: z.string().min(10).max(1000),
});

export async function createTopic(formState: number, formData: FormData) {
  const result = createTopicSchema.safeParse({
    name: formData.get("name"),
    description: formData.get("description"),
  });

  if (!result.success) {
    console.log(result.error.flatten().fieldErrors);
  }
  return 10;
  // TODO: revalidate the homepage
}
