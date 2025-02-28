import Image from "next/image";

import loader from "@/assets/loader.gif";

const LoadingPage = () => {
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <Image src={loader} alt="Loading..." width={100} height={100} />
    </div>
  );
};

export default LoadingPage;
