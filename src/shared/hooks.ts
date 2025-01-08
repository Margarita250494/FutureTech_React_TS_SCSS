import { useState, useEffect } from "react";

export const useIsMobile = (query: string): boolean => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const handleResize = () => setIsMobile(mediaQuery.matches);

    handleResize();
    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, [query]);

  return isMobile;
};

/**
 * @param isActive - if true , adds the no-scroll class, otherwise, removes it
 */

export const useBodyNoScroll = (isActive:boolean) => {
  useEffect(()=>{
    if(isActive){
      document.body.classList.add("no-scroll");
    } else{
      document.body.classList.remove("no-scroll");
    }

    return() => {
      document.body.classList.remove("no-scroll");
    }
  }, [isActive])
}