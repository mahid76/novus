import { useEffect } from "react";
import { useLocation } from "react-router";

/**
 * Place this once inside MainRoute (alongside <Navbar /> and <Outlet />).
 * React Router does not reset scroll position on navigation by default,
 * so without this, clicking a nav link keeps you at whatever scroll
 * position you were at on the previous page.
 *
 * Disabling the browser's native scroll restoration also fixes the
 * "reload keeps the old scroll position" issue — otherwise the browser
 * restores the last scroll spot before/while React mounts.
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
};

export default ScrollToTop;