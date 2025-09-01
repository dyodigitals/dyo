"use client";
import { useState, useEffect } from 'react';

export function useMediaQuery(query: string): boolean {
  // Initialize with a default value when in server-side rendering
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // Skip in SSR context
    if (typeof window === 'undefined') {
      return;
    }
    
    const mediaQuery = window.matchMedia(query);
    
    // Set the initial value
    setMatches(mediaQuery.matches);
    
    // Create listener function
    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };
    
    // Add the listener
    mediaQuery.addEventListener('change', listener);
    
    // Clean up
    return () => {
      mediaQuery.removeEventListener('change', listener);
    };
  }, [query]);

  return matches;
}
