import cookie from "js-cookie";
import { useEffect, useState } from "react";

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  plan: string;
  image?: string;
  verification?: {
    isEmailVerified: boolean;
  };
  oAuth?: {
    id: string;
    provider: string;
  };
  brandId?: string;
}

/**
 * Read the user auth state using appropriate cookies
 */
const useSession = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    const userCookie = cookie.get("Driflys-User");

    if (userCookie) {
      try {
        const parsed = JSON.parse(userCookie);
        setUser(parsed);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    } else {
      setUser(null);
      setError("No user was found");
      setLoading(false);
    }
  }, []);

  return { user, loading, error };
};

export default useSession;
