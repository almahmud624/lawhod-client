import { useEffect } from "react";
const useDynamicTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - LawHod`;
  }, [title]);
};

export default useDynamicTitle;
