import { useEffect } from "react";
import { usePathname } from "next/navigation";

export const useScrollToTop = () => {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const hasVisitedBefore = localStorage.getItem("hasVisitedBefore");

    if (!hasVisitedBefore) {
      // First visit - scroll to top
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
      localStorage.setItem("hasVisitedBefore", "true");
    } else {
      // Returning visit - try to restore scroll position
      try {
        const scrollPosition = sessionStorage.getItem("scrollPosition");
        if (scrollPosition) {
          window.scrollTo({
            top: parseInt(scrollPosition),
            left: 0,
            behavior: "instant",
          });
        }
      } catch (error) {
        console.error("Error restoring scroll position:", error);
      }
    }

    // Save scroll position before unload
    const handleBeforeUnload = () => {
      sessionStorage.setItem("scrollPosition", window.scrollY.toString());
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [pathname]);
};
