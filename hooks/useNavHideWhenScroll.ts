import { useState, useEffect, MutableRefObject } from "react";

function useNavHideWhenScroll(navRef: MutableRefObject<HTMLDivElement>) {
  const [scrollPos, setScrollPos] = useState<number>(0);

  useEffect(() => {
    const changeNavHeight = () => {
      setScrollPos(document.body.getBoundingClientRect().top);

      if (document.body.getBoundingClientRect().top < scrollPos) {
        navRef.current.style.top = "-80px";
      } else {
        navRef.current.style.top = "0";
      }
    };

    window.addEventListener("scroll", changeNavHeight);

    return () => window.removeEventListener("scroll", changeNavHeight);
  });
}

export default useNavHideWhenScroll;
