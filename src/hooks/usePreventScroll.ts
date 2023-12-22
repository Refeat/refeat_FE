import { allowScroll, preventScroll } from "@/utils/scroll";
import { useEffect } from "react";

const usePreventScroll = () => {
  useEffect(() => {
    const prevScrollY = preventScroll();
    return () => {
      allowScroll(prevScrollY);
    };
  }, []);
};

export default usePreventScroll;
