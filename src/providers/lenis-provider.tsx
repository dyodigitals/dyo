"use client";

import { ReactLenis } from "lenis/react";
import { ReactNode } from "react";

interface LenisProviderProps {
  children: ReactNode;
}

export default function LenisProvider({ children }: LenisProviderProps) {
  const lenisOptions = {
    lerp: 0.09, // Linear interpolation factor (0-1)
    smoothWheel: true, // Enable smooth scrolling for mouse wheel
    smoothTouch: false, // Disable smooth scrolling for touch devices
    wheelMultiplier: 1, // Wheel speed multiplier
    touchMultiplier: 2, // Touch speed multiplier
  };

  return (
    <ReactLenis root options={lenisOptions}>
      {children}
    </ReactLenis>
  );
}