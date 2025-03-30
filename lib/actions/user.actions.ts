"use server";

import { signInFormSchema } from "@/lib/validators";
import { signIn, signOut } from "@/auth";
import { isRedirectError } from "next/dist/client/components/redirect-error";

export async function signInWithCredentials(
  prevState: unknown,
  formData: FormData,
) {
  try {
    const user = signInFormSchema.parse({
      email: formData.get("email"),
      password: formData.get("password"),
    });

    await signIn("credentials", user);

    return { success: true, message: "Successfully logged in" };
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }

    return { success: false, message: "Invalid email or password" };
  }
}

// Sign out the user
export async function signOutUser() {
  try {
    await signOut();
    return { success: true, message: "Successfully signed out" };
  } catch {
    return { success: false, message: "An error occurred" };
  }
}
