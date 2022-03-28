// next
import Image from "next/image";
import Link from "next/link";

import { APP_BASE_URL } from "../../constants/env";
import useSession from "../../hooks/useSession";
import Logo from "../../public/logos/logo.svg";

function SimpleHeader() {
  const { user } = useSession();

  const handleDashboard = () => {
    window.location.href = `${APP_BASE_URL}/`;
  };
  const handleSignUp = () => {
    window.location.href = `${APP_BASE_URL}/auth/signUp`;
  };
  const handleLogin = () => {
    window.location.href = `${APP_BASE_URL}/auth/login`;
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
        {user ? (
          <button
            className="text-gray-600 font-bold bg-transparent hover:bg-gray-100 transition-colors ease-in-out delay-50 px-5 py-1 rounded"
            onClick={handleDashboard}
          >
            Dashboard
          </button>
        ) : (
          <>
            <button
              className="text-gray-600 font-bold bg-transparent hover:bg-gray-100 transition-colors ease-in-out delay-50 px-5 py-1 rounded"
              onClick={handleLogin}
            >
              Login
            </button>
            <button
              className="bg-blue-600 hover:bg-blue-700 transition-colors ease-in-out delay-50 text-white px-5 py-1 rounded"
              onClick={handleSignUp}
            >
              Sign Up
            </button>
          </>
        )}
      </div>
    </header>
  );
}

export default SimpleHeader;
