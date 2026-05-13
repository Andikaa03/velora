import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const testimonials = [
  {
    quote: "Velora turned our scattered ideas into a premium website in just two weeks. The new design feels lightyears ahead of what we had, and the launch was completely seamless.",
    name: "Alex Jensen",
    role: "Founder, Mercury",
    avatar: "/assets/testimonial-avatar.png",
    logo: "/assets/logo-mercury.svg",
    logoHeight: "h-[20px]",
  },
  {
    quote: "Finally, an agency that actually builds what they design, and does it fast. We saw an immediate increase in trust from our enterprise clients after the redesign.",
    name: "Sarah Lin",
    role: "CMO, Cognite",
    avatar: "/assets/work-avatar-rachel.png",
    logo: "/assets/logo-cognite.svg",
    logoHeight: "h-[32px]",
  },
  {
    quote: "The visual direction is sharp and the site loads incredibly fast. Velora's sprint process is exactly what modern startups need instead of dragging out projects for months.",
    name: "David Chen",
    role: "CEO, Aidn",
    avatar: "/assets/work-avatar-scott.png",
    logo: "/assets/logo-aidn.svg",
    logoHeight: "h-[24px]",
  }
];

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <div data-reveal className="mx-auto mt-16 max-w-[960px] overflow-hidden rounded-2xl bg-[#f7f7f7] px-8 py-12 text-center sm:px-16 sm:py-16">
      <div className="relative min-h-[280px] sm:min-h-[220px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex h-full flex-col items-center justify-between"
          >
            <div className="flex-1 flex flex-col items-center justify-center">
              <img src={current.logo} alt={current.name} className={`mx-auto w-auto opacity-70 grayscale ${current.logoHeight}`} />
              <p className="mt-8 text-[clamp(20px,3vw,32px)] leading-[1.4] tracking-[-0.01em] text-[#242424]">
                "{current.quote}"
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-12 flex flex-col items-center justify-between gap-6 sm:flex-row sm:gap-0">
        <div className="flex items-center gap-4">
          <AnimatePresence mode="wait">
            <motion.img
              key={current.avatar}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              src={current.avatar}
              alt={current.name}
              className="size-[48px] rounded-full object-cover"
            />
          </AnimatePresence>
          <div className="text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.name}
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-[17px] font-medium leading-none text-[#242424]">{current.name}</p>
                <p className="mt-1.5 text-[15px] leading-none text-[#686868]">{current.role}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button onClick={prev} className="flex size-[48px] items-center justify-center rounded-full border border-[#dedede] bg-white transition hover:bg-[#f0f0f0] hover:scale-105 active:scale-95">
            <img src="/assets/testimonial-arrow-left.svg" alt="Previous" className="size-6 opacity-70" />
          </button>
          <button onClick={next} className="flex size-[48px] items-center justify-center rounded-full border border-[#dedede] bg-white transition hover:bg-[#f0f0f0] hover:scale-105 active:scale-95">
            <img src="/assets/testimonial-arrow-right.svg" alt="Next" className="size-6 opacity-70" />
          </button>
        </div>
      </div>
    </div>
  );
}
