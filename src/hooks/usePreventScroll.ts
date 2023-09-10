import { useEffect } from "react";

function usePreventScroll() {
  useEffect(() => {
    const body = document.querySelector("body");
    const navbar = document.querySelector<HTMLDivElement>(".navbar");
    if (body) {
      const scrollBarWidth = window.innerWidth - body.offsetWidth;
      body.style.overflow = "hidden";
      body.style.paddingRight = `${scrollBarWidth}px`;
      if (navbar) {
        navbar.style.paddingRight = `${scrollBarWidth}px`;
      }
    }

    return () => {
      if (body) {
        body.style.overflow = "visible";
        body.style.paddingRight = "0px";
        if (navbar) {
          navbar.style.paddingRight = "0px";
        }
      }
    };
  }, []);
}

export default usePreventScroll;
