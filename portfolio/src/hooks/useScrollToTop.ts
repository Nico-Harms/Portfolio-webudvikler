import { useEffect } from "react";
import { usePathname } from "next/navigation";

export const useScrollToTop = () => {
  const pathname = usePathname();

  useEffect(() => {
    // Simple and reliable scroll to top on route change
    window.scrollTo(0, 0);
  }, [pathname]);
};
