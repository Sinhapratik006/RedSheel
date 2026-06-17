import { motion } from "framer-motion";
import { fraunces } from "../lib/fonts";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}) {
  const alignClass = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";
  const copyWidth = align === "center" ? "mx-auto" : "";

  return (
    <motion.div 
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true, margin: "-100px" }}
      variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      className={`flex flex-col ${alignClass}`}
    >
      <motion.p
        variants={fadeInUp}
        className="theme-pill"
      >
        {eyebrow}
      </motion.p>
      <motion.h2
        variants={fadeInUp}
        className={`${fraunces.className} mt-8 max-w-3xl text-[2.45rem] font-medium leading-[0.96] text-[#241913] dark:text-[#fff7ec] sm:text-[3.1rem] ${copyWidth}`}
      >
        {title}
      </motion.h2>
      {description ? (
        <motion.p
          variants={fadeInUp}
          className={`theme-copy mt-5 max-w-2xl text-[1rem] leading-8 ${copyWidth}`}
        >
          {description}
        </motion.p>
      ) : null}
    </motion.div>
  );
}
