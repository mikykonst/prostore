import { cn } from "@/lib/utils";

import Image from "next/image";
import logo from "@/public/images/logo.svg";
import { APP_NAME } from "@/lib/constants";

type LogoProps = {
  classNames?: string;
};

const Logo = ({ classNames = "" }: LogoProps) => {
  return (
    <div className="flex-start">
      <Image
        src={logo}
        alt={`${APP_NAME} logo`}
        width={48}
        height={48}
        priority={true}
      />
      <span className={cn("font-bold text-2xl ml-3", classNames)}>
        {APP_NAME}
      </span>
    </div>
  );
};

export default Logo;
