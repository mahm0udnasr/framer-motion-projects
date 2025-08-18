import { motion, useScroll, useTransform } from "framer-motion";
import Card from "./Card";
import { cards } from "../utils/data";
import { useRef } from "react";

const ScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <div className="relative h-[300vh]" ref={targetRef}>
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div className="flex gap-4" style={{ x }}>
          {cards.map((card, index) => (
            <Card idx={index} card={card} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ScrollCarousel;
