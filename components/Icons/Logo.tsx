"use client";
import { InView } from "react-intersection-observer";
import { motion, useCycle } from "framer-motion";
import {
  Rubik_Bubbles,
  Rubik_Gemstones,
  Rubik_Glitch,
  Rubik_Maze,
} from "next/font/google";
import { useEffect } from "react";

const rubik_Glitch = Rubik_Glitch({
  subsets: ["latin"],
  weight: "400",
});
const rubik_Gemstones = Rubik_Gemstones({
  subsets: ["latin"],
  weight: "400",
});
const rubik_Maze = Rubik_Maze({
  subsets: ["latin"],
  weight: "400",
});
const rubik_Bubbles = Rubik_Bubbles({
  subsets: ["latin"],
  weight: "400",
});

export default function Logo() {
  const fonts = [
    rubik_Bubbles.className,
    rubik_Glitch.className,
    rubik_Gemstones.className,
    rubik_Maze.className,
  ];
  const [font, cycleFont] = useCycle(...fonts);

  useEffect(() => {
    const interval = setInterval(() => {
      cycleFont();
    }, 1000);

    return () => clearInterval(interval);
  }, [cycleFont]);
  return (
    <>
      <section className="flex items-end lg:h-screen">
        <InView triggerOnce={false}>
          {({ inView, ref }) => (
            <motion.div
              ref={ref}
              initial={{ x: 100, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              // transition={{ duration: 0.5 }}
            >
              <div className="flex w-min flex-col justify-center text-5xl sm:text-5xl md:text-5xl lg:text-5xl">
                <motion.h1 className={font}>Big Brain Club</motion.h1>
              </div>
            </motion.div>
          )}
        </InView>
      </section>
    </>
  );
}
