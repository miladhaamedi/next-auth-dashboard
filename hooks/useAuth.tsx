import { getLocalStorage } from "@/utils/storage";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function useAuth({ redirectTo = "/auth", protect = true } = {}) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const router = useRouter();

  useEffect(() => {
    const user = getLocalStorage("user");

    if (user) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
      if (protect) {
        router.replace(redirectTo);
      }
    }
  }, []);

  return { isAuthenticated };
}
