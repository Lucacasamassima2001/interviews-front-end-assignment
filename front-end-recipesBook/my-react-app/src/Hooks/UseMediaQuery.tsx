import { useEffect, useState } from "react";

interface MediaQuery {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

const useMediaQuery = () => {
  const [mediaQuery, setMediaQuery] = useState<MediaQuery>({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
  });

  useEffect(() => {
    const handleMediaQuery = () => {
      const isMobile = window.matchMedia("(max-width: 767px)").matches;
      const isTablet = window.matchMedia(
        "(min-width: 768px) and (max-width: 1023px)"
      ).matches;
      const isDesktop = window.matchMedia("(min-width: 1024px)").matches;

      setMediaQuery({
        isMobile,
        isTablet,
        isDesktop,
      });
    };

    handleMediaQuery();

    window.addEventListener("resize", handleMediaQuery);

    return () => window.removeEventListener("resize", handleMediaQuery);
  }, []);

  const { isMobile, isTablet, isDesktop } = mediaQuery;

  return { isMobile, isTablet, isDesktop };
};

export default useMediaQuery;
