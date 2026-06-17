import { motion } from "framer-motion";
import { display } from "../lib/fonts";

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
      initial={false} 
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
        className={`${display.className} mt-6 max-w-3xl text-[1.82rem] font-medium leading-[1] text-[#241913] dark:text-[#fff7ec] sm:mt-8 sm:text-[2.75rem] lg:text-[3.1rem] ${copyWidth}`}
      >
        {title}
      </motion.h2>
      {description ? (
        <motion.p
          variants={fadeInUp}
          className={`theme-copy mt-3 max-w-2xl text-[0.88rem] leading-6 sm:mt-5 sm:text-[1rem] sm:leading-8 ${copyWidth}`}
        >
          {description}
        </motion.p>
      ) : null}
    </motion.div>
  );
}
