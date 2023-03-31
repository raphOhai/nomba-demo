import { useEffect, useState } from "react";


export default function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  const isBrowser = () => typeof window !== "undefined";

  const calculateWidth = () => {
    if (window.innerWidth < 768) return setIsMobile(true);
    setIsMobile(false);
  };

  isBrowser() && window.addEventListener("resize", calculateWidth);

  useEffect(() => {
    calculateWidth();
  }, []);

  return isMobile;
}
