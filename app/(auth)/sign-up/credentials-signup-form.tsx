"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { signUpUser } from "@/lib/actions/user.actions";
import { useSearchParams } from "next/navigation";

const DEFAULT_CREDENTIALS = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button className="w-full" variant="default" disabled={pending}>
      {pending ? "Processing..." : "Sign Up"}
    </Button>
  );
};

const CredentialsSignUpForm = () => {
  const [data, action] = useActionState(signUpUser, {
    success: false,
    message: "",
  });
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") ?? "/";

  return (
    <form action={action} className="space-y-6">
      <input type="hidden" name="callbackUrl" value={callbackUrl} />
      <div>
        <Label htmlFor="name" title="Name" />
        <Input
          type="text"
          id="name"
          name="name"
          required
          placeholder="Name"
          autoComplete="name"
          defaultValue={DEFAULT_CREDENTIALS.name}
        />
      </div>
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
      <div>
        <Label htmlFor="confirmPaasword" title="Confirm password" />
        <Input
          type="password"
          id="confirmPaasword"
          name="confirmPassword"
          required
          placeholder="Confirm password"
          autoComplete="confirmPaasword"
          defaultValue={DEFAULT_CREDENTIALS.confirmPassword}
        />
      </div>
      <SignUpButton />
      {data && !data.success && (
        <div className="text-center text-destructive">{data.message}</div>
      )}
      <div className="text-sm text-center text-muted-foreground">
        Already have an account?{" "}
        <Link href="/sign-in" target="_self" className="link">
          Sign In
        </Link>
      </div>
    </form>
  );
};

export default CredentialsSignUpForm;
