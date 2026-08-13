import { useEffect, useRef, useState } from "react";

/**
 * useReveal — returns a ref to attach to an element and a boolean
 * that flips to true once the element scrolls into view. Pair with
 * the motion-safe: Tailwind variant so users with reduced-motion
 * preferences just see content appear instantly.
 */
export function useReveal({ threshold = 0.15, rootMargin = "0px 0px -60px 0px" } = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return [ref, inView];
}