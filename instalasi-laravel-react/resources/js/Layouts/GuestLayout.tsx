import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/inertia-react";
import Bg from "../Components/bg.png";

interface Props {
  children: React.ReactNode;
}

export default function Guest({ children }: Props) {
  return (
    <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
      <img
        src={Bg}
        alt=""
        className="absolute w-full h-screen object-cover blur-md select-none"
      />
      <div className="z-10">
        <Link href="/">
          <ApplicationLogo className="w-20 h-20 rounded-lg fill-current text-gray-500" />
        </Link>
      </div>

      <div className="w-full z-10 sm:max-w-md mt-6 px-6 py-6 bg-white shadow-md overflow-hidden sm:rounded-lg">
        {children}
      </div>
    </div>
  );
}
