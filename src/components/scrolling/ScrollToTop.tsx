import { useEffect } from "react";
import { useLocation } from "react-router";

interface Props {
  children: JSX.Element[] | JSX.Element;
}
const ScrollToTop = ({ children }: Props) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{children}</>;
};

export default ScrollToTop;
