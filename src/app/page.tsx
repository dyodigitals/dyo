import dynamic from "next/dynamic";
import Hero from "@/components/landing-page/hero";
import Marquee from "@/components/landing-page/marquee";
import About from "@/components/landing-page/about";

// Lazy load everything after Marquee
const Benefits = dynamic(() => import("@/components/landing-page/benefits"), {
  ssr: true,
  loading: () => <div className="min-h-[300px] flex items-center justify-center">Loading...</div>,
});

const Work = dynamic(() => import("@/components/landing-page/work"), {
  ssr: true,
  loading: () => <div className="min-h-[300px] flex items-center justify-center">Loading...</div>,
});

const Services = dynamic(() => import("@/components/landing-page/services"), {
  ssr: true,
  loading: () => <div className="min-h-[300px] flex items-center justify-center">Loading...</div>,
});

const Testimonials = dynamic(() => import("@/components/landing-page/testimonials"), {
  ssr: true,
  loading: () => <div className="min-h-[300px] flex items-center justify-center">Loading...</div>,
});

const Method = dynamic(() => import("@/components/landing-page/method"), {
  ssr: true,
  loading: () => <div className="min-h-[300px] flex items-center justify-center">Loading...</div>,
});

const Pricing = dynamic(() => import("@/components/landing-page/pricing"), {
  ssr: true,
  loading: () => <div className="min-h-[300px] flex items-center justify-center">Loading...</div>,
});

const FAQ = dynamic(() => import("@/components/landing-page/faq"), {
  ssr: true,
  loading: () => <div className="min-h-[300px] flex items-center justify-center">Loading...</div>,
});

const BookCall = dynamic(() => import("@/components/landing-page/book-call"), {
  ssr: true,
  loading: () => <div className="min-h-[300px] flex items-center justify-center">Loading...</div>,
});

const Footer = dynamic(() => import("@/components/shared/footer"), {
  ssr: true,
  loading: () => <div className="min-h-[300px] flex items-center justify-center">Loading...</div>,
});

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Benefits />
      <Work />
      <Services />
      <Testimonials />
      <Method />
      <Pricing />
      <About />
      <FAQ />
      <BookCall />
      <Footer />
    </>
  );
}
