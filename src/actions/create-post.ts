"use server";
import type { Post } from "@prisma/client";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { z } from "zod";
import { db } from "@/db";
import paths from "@/paths";
import { revalidatePath } from "next/cache";

const createPostSchema = z.object({
  title: z.string().min(3).max(100),
  content: z.string().min(10).max(100),
});

interface CreatePostFormState {
  errors: {
    title?: string[];
    content?: string[];
    _form?: string[];
  };
}

export async function createPost(
  formState: CreatePostFormState,
  formData: FormData
): Promise<CreatePostFormState> {
  const result = createPostSchema.safeParse({
    title: formData.get("title"),
    content: formData.get("content"),
  });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  const session = await auth();
  if (!session || !session.user) {
    return {
      errors: {
        _form: ["You need to be logged in to create a post"],
      },
    };
  }

  return {
    errors: {},
  };

  // TODO: revalidate the topic show page
}
