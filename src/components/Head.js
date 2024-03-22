import { useEffect } from "react";

function Head({ title }) {
  useEffect(() => {
    document.title = `Highly Handy - ${title}`;
    return () => {
      document.title = "Highly Handy - Home Care Services";
    };
  }, [title]);

  return null;
}

export default Head;
