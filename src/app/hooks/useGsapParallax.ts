import { useRef, useEffect } from 'react';

declare global {
  interface Window {
    gsap: any;
    ScrollTrigger: any;
  }
}

function getGSAP() {
  const gsap = window.gsap;
  const ScrollTrigger = window.ScrollTrigger;
  if (gsap && ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
    return { gsap, ScrollTrigger };
  }
  return null;
}

/**
 * GSAP ScrollTrigger parallax hook.
 * The first child of the section must be taller than the section (e.g. h-[130%])
 * so the image can shift within the overflow-hidden container.
 *
 * @param distance - Max pixel offset during scroll (default 80)
 * @returns Ref to attach to the <section> container
 */
export function useGsapParallax(distance = 1080) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const api = getGSAP();
    if (!api) return;
    const { gsap, ScrollTrigger } = api;

    const target = el.firstElementChild;
    if (!target) return;

    gsap.set(target, { y: -distance});

    const tween = gsap.to(target, {
      y: distance,
      ease: 'none',
      scrollTrigger: {
        trigger: el,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 0.5,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [distance]);

  return ref;
}

/**
 * GSAP ScrollTrigger opacity fade hook.
 * Fades an element from full opacity to 0 as the trigger scrolls out.
 *
 * @param containerRef - Ref to the parent section (acts as scroll trigger)
 * @returns Ref to attach to the element that should fade
 */
export function useGsapScrollFade(containerRef: React.RefObject<HTMLDivElement | null>) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    const trigger = containerRef.current;
    if (!el || !trigger) return;

    const api = getGSAP();
    if (!api) return;
    const { gsap, ScrollTrigger } = api;

    gsap.set(el, { opacity: 1 });

    const tween = gsap.to(el, {
      opacity: 0,
      ease: 'none',
      scrollTrigger: {
        trigger,
        start: 'top top',
        end: '75% top',
        scrub: true,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [containerRef]);

  return ref;
}
