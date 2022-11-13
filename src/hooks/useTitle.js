import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - hungry`;
  }, [title]);
};

export default useTitle;
