import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { UserIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOutUser } from "@/lib/actions/user.actions";

const UserButton = async () => {
  const session = await auth();

  if (!session) {
    return (
      <Button asChild>
        <Link href="/sign-in">
          <UserIcon /> Sign in
        </Link>
      </Button>
    );
  }

  const firstInitial = session.user?.name?.charAt(0).toUpperCase() ?? "U";

  return (
    <div className="flex gap-2 items-center">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex items-center">
            <Button
              variant="ghost"
              className="relative rounded-full bg-gray-200 justify-center flex w-8 h-8 ml-2"
            >
              {firstInitial}
            </Button>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="text-sm font-medium leading-none">
              {session.user?.name}
            </div>
            <div className="text-sm leading-none text-muted-foreground">
              {session.user?.email}
            </div>
          </DropdownMenuLabel>
          <DropdownMenuItem>
            <form action={signOutUser} className="w-full">
              <Button
                variant="ghost"
                className="w-full py-4 px-2 h-4 justify-start text-sm font-normal"
              >
                Sign out
              </Button>
            </form>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default UserButton;
