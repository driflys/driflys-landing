// next
import Image from "next/image";
import Link from "next/link";

import { APP_BASE_URL } from "../../constants/env";
import Logo from "../../public/logos/logo.svg";

function SimpleHeader() {
  const handleSignUp = () => {
    window.location.href = `${APP_BASE_URL}/auth/signUp`;
  };

  return (
    <header className="fixed z-50 w-full p-2 lg:px-32 xl:px-32 h-14 flex items-center justify-between shadow bg-white">
      <div>
        <Link href="/">
          <a>
            <div className="flex items-center gap-1">
              <Image src={Logo} alt="Driflys logo" width={30} height={30} />
              <h1 className="font-bold text-lg text-sky-500">DRIFLYS</h1>
            </div>
          </a>
        </Link>
      </div>
      <div className="flex items-center justify-between gap-1">
        <button
          className="bg-blue-600 hover:bg-blue-700 transition-colors ease-in-out delay-50 text-white px-5 py-1 rounded"
          onClick={handleSignUp}
        >
          Sign Up
        </button>
      </div>
    </header>
  );
}

export default SimpleHeader;
