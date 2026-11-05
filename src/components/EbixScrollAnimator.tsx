import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * EbixScrollAnimator
 * Automatically observes all elements with `.ebix-reveal`, `.ebix-reveal-left`,
 * `.ebix-reveal-right`, and `.ebix-scale-reveal` across any page and smoothly adds
 * `.is-revealed` when they enter viewport.
 * Uses native IntersectionObserver with zero main-thread scroll lag and GPU composite rendering.
 */
export default function EbixScrollAnimator() {
  const location = useLocation();

  useEffect(() => {
    // Small timeout to allow React DOM mounting
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-revealed");
            } else {
              entry.target.classList.remove("is-revealed");
            }
          });
        },
        {
          rootMargin: "60px 0px 60px 0px",
          threshold: 0.05,
        }
      );

      const targets = document.querySelectorAll(
        ".ebix-reveal, .ebix-reveal-left, .ebix-reveal-right, .ebix-scale-reveal"
      );

      targets.forEach((el) => observer.observe(el));

      const animObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("animate");
            }
          });
        },
        {
          rootMargin: "100px 0px 100px 0px",
          threshold: 0.02,
        }
      );

      const animTargets = document.querySelectorAll(
        ".flipbox-section, .whatareyou-animate, .home-banner-animate, .careers-animate"
      );
      animTargets.forEach((el) => animObserver.observe(el));

      return () => {
        targets.forEach((el) => observer.unobserve(el));
        animTargets.forEach((el) => animObserver.unobserve(el));
      };
    }, 60);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return null;
}
