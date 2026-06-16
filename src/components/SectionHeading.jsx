import { motion } from "framer-motion";

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
        className="text-[13px] font-bold uppercase tracking-widest text-brand-500"
      >
        {eyebrow}
      </motion.p>
      <motion.h2
        variants={fadeInUp}
        className={`mt-4 max-w-3xl font-display text-3xl font-medium tracking-tight text-zinc-900 dark:text-white sm:text-4xl ${copyWidth}`}
      >
        {title}
      </motion.h2>
    </motion.div>
  );
}
