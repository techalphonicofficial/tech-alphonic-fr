"use client";

import { useEffect, useRef, useState } from "react";

export default function CursorFollower() {
  const dotPosRef = useRef(null);
  const ringPosRef = useRef(null);
  const dotVisualRef = useRef(null);
  const ringVisualRef = useRef(null);
  
  const requestRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const lastScroll = useRef({ x: 0, y: 0 });
  const isVisible = useRef(false);
  
  const [mounted, setMounted] = useState(false);
  const [isCapable, setIsCapable] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Feature detection for mobile/touch devices and reduced motion
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    const hoverSupported = window.matchMedia("(hover: hover)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    
    if (hasFinePointer && hoverSupported && !reducedMotion) {
      setIsCapable(true);
    }
  }, []);

  useEffect(() => {
    if (!isCapable) return;

    lastScroll.current = { x: window.scrollX, y: window.scrollY };

    // Hide native cursor
    document.documentElement.classList.add("custom-cursor-enabled");

    const onMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      
      // Initialize positions on first move
      if (!isVisible.current) {
        ring.current = { x: e.clientX, y: e.clientY };
        isVisible.current = true;
        
        if (dotPosRef.current) dotPosRef.current.style.opacity = "1";
        if (ringPosRef.current) ringPosRef.current.style.opacity = "1";
      }
    };

    const onScroll = () => {
      if (!isVisible.current) return;
      
      const currentScrollX = window.scrollX;
      const currentScrollY = window.scrollY;
      
      const deltaX = currentScrollX - lastScroll.current.x;
      const deltaY = currentScrollY - lastScroll.current.y;
      
      // Offset the ring's position opposite to the scroll direction
      // This makes it stick to the page temporarily before floating back
      ring.current.x -= deltaX;
      ring.current.y -= deltaY;
      
      lastScroll.current = { x: currentScrollX, y: currentScrollY };
    };

    const onMouseEnter = () => {
      if (!isVisible.current) return;
      if (dotPosRef.current) dotPosRef.current.style.opacity = "1";
      if (ringPosRef.current) ringPosRef.current.style.opacity = "1";
    };

    const onMouseLeave = () => {
      if (dotPosRef.current) dotPosRef.current.style.opacity = "0";
      if (ringPosRef.current) ringPosRef.current.style.opacity = "0";
    };

    const onMouseOver = (e) => {
      const target = e.target;
      if (
        target.closest('a') || 
        target.closest('button') || 
        target.closest('[role="button"]') ||
        target.closest('input') ||
        target.closest('select') ||
        target.closest('textarea')
      ) {
        if (dotVisualRef.current) {
          dotVisualRef.current.classList.add('scale-50', 'opacity-50');
        }
        if (ringVisualRef.current) {
          ringVisualRef.current.classList.add('scale-150', 'bg-[#53AFBE]/10', 'border-opacity-50');
        }
      }
    };

    const onMouseOut = (e) => {
      const target = e.target;
      if (
        target.closest('a') || 
        target.closest('button') || 
        target.closest('[role="button"]') ||
        target.closest('input') ||
        target.closest('select') ||
        target.closest('textarea')
      ) {
        if (dotVisualRef.current) {
          dotVisualRef.current.classList.remove('scale-50', 'opacity-50');
        }
        if (ringVisualRef.current) {
          ringVisualRef.current.classList.remove('scale-150', 'bg-[#53AFBE]/10', 'border-opacity-50');
        }
      }
    };

    const animate = () => {
      // Lerp logic for outer ring
      ring.current.x += (mouse.current.x - ring.current.x) * 0.05;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.05;

      // Update positions using transform3d for best performance
      if (dotPosRef.current) {
        dotPosRef.current.style.transform = `translate3d(${mouse.current.x}px, ${mouse.current.y}px, 0)`;
      }

      if (ringPosRef.current) {
        ringPosRef.current.style.transform = `translate3d(${ring.current.x}px, ${ring.current.y}px, 0)`;
      }

      requestRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseover", onMouseOver, { passive: true });
    document.addEventListener("mouseout", onMouseOut, { passive: true });
    
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      document.documentElement.classList.remove("custom-cursor-enabled");
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseout", onMouseOut);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [isCapable]);

  if (!mounted || !isCapable) return null;

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .custom-cursor-enabled,
        .custom-cursor-enabled * {
          cursor: none !important;
        }
      `}} />
      
      {/* Outer Ring */}
      <div
        ref={ringPosRef}
        className="pointer-events-none fixed left-0 top-0 z-[10000] opacity-0 transition-opacity duration-300 ease-out will-change-transform"
      >
        <div
          ref={ringVisualRef}
          className="h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary transition-all duration-300 ease-out"
        />
      </div>
      
      {/* Inner Dot */}
      <div
        ref={dotPosRef}
        className="pointer-events-none fixed left-0 top-0 z-[10000] opacity-0 transition-opacity duration-300 ease-out will-change-transform"
      >
        <div
          ref={dotVisualRef}
          className="h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary transition-all duration-300 ease-out"
        />
      </div>
    </>
  );
}