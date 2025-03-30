"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { signInWithCredentials } from "@/lib/actions/user.actions";
import { useSearchParams } from "next/navigation";

const DEFAULT_CREDENTIALS = {
  email: "",
  password: "",
};

const SignInButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button className="w-full" variant="default" disabled={pending}>
      {pending ? "Signing in..." : "Sign In"}
    </Button>
  );
};

const CredentialsSignInForm = () => {
  const [data, action] = useActionState(signInWithCredentials, {
    success: false,
    message: "",
  });
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") ?? "/";

  return (
    <form action={action} className="space-y-6">
      <input type="hidden" name="callbackUrl" value={callbackUrl} />
      <div>
        <Label htmlFor="email" title="Email" />
        <Input
          type="email"
          id="email"
          name="email"
          required
          placeholder="Email"
          autoComplete="email"
          defaultValue={DEFAULT_CREDENTIALS.email}
        />
      </div>
      <div>
        <Label htmlFor="password" title="Password" />
        <Input
          type="password"
          id="password"
          name="password"
          required
          placeholder="Password"
          autoComplete="password"
          defaultValue={DEFAULT_CREDENTIALS.password}
        />
      </div>
      <SignInButton />
      {data && !data.success && (
        <div className="text-center text-destructive">{data.message}</div>
      )}
      <div className="text-sm text-center text-muted-foreground">
        You don&apos;t have an account?{" "}
        <Link href="/sign-up" target="_self" className="link">
          Sign Up
        </Link>
      </div>
    </form>
  );
};

export default CredentialsSignInForm;
