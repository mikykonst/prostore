import ModeToggle from "@/components/shared/header/mode-toggle";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { EllipsisVertical, ShoppingCart, UserIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

type MenuItemsProps = {
  withSignIn?: boolean;
};

const MenuItems = ({ withSignIn = false }: MenuItemsProps) => {
  return (
    <>
      <Button asChild variant="ghost">
        <Link href="/cart" className="flex items-center">
          <ShoppingCart />
          <span className="hidden lg:block">Cart</span>
        </Link>
      </Button>
      {withSignIn && (
        <Button asChild>
          <Link href="/account" className="flex items-center">
            <UserIcon />
            <span className="hidden lg:block">Sign in</span>
          </Link>
        </Button>
      )}
    </>
  );
};

const Menu = () => {
  return (
    <div className="flex justify-end gap-3">
      <nav className="hidden md:flex w-full max-w-xs gap-1">
        <ModeToggle />
        <MenuItems withSignIn />
      </nav>
      <nav className="md:hidden">
        <Sheet>
          <SheetTrigger className="align-middle">
            <EllipsisVertical />
          </SheetTrigger>
          <SheetContent className="flex flex-col items-start">
            <SheetTitle></SheetTitle>
            <ModeToggle />
            <MenuItems />
            <SheetDescription></SheetDescription>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
};

export default Menu;
