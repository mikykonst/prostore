import Link from "next/link";

import Logo from "@/components/shared/logo";
import Menu from "@/components/shared/header/menu";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <Link className="flex-start" href="/">
            <Logo classNames="hidden lg:block" />
          </Link>
        </div>
        <Menu />
      </div>
    </header>
  );
};

export default Header;
