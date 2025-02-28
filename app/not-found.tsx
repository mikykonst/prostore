"use client";

import Logo from "@/components/shared/logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen">
      <Logo />
      <div className="p-6 w-1/3 rounded-lg shadow-md text-center">
        <h1 className="text-3xl font-bold mb-4">Not found</h1>
        <p className="text-destructive">Could not find requested page.</p>
        <Link href={"/"}>
          <Button variant="outline" className="mt-4 ml-2">
            Back to home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
