"use client";
import { useMediaQuery } from "@/hooks/useMediaQuery";

interface ResponsiveWrapperProps {
  children: (isMobile: boolean, isTablet: boolean, isDesktop: boolean) => React.ReactNode;
}

export default function ResponsiveWrapper({ children }: ResponsiveWrapperProps) {
  const isMobile = useMediaQuery('(max-width: 767px)');
  const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1279px)');
  const isDesktop = useMediaQuery('(min-width: 1280px)');
  
  return <>{children(isMobile, isTablet, isDesktop)}</>;
}
