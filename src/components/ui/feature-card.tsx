import { motion } from "framer-motion";

type Data = {
  title: string;
  content: string;
  icon: React.ReactNode;
}

export function FeatureCard({ data } : { data: Data }) {
  const duration = 0.3;

  return (
    <motion.div 
    transition={{
      duration: duration,
      delay:0.3
    }}
    initial={{
      opacity: 0,
      transform: "translate(20px, 0)",
    }}
    whileInView={{ opacity: 1, transform: "translate(0, 0)" }}
    viewport={{ once: false }}
    className="feature-card rounded-xl transition-all hover:scale-95 shadow-md flex items-center justify-center flex-col text-center gap-3 p-6 border border-slate-300">
      <div className="icon w-[60px] h-[60px] bg-[#e0c65339] flex items-center justify-center rounded-full">{ data.icon }</div>
      <h1 className="title font-bold text-[20px] select-none">{ data.title }</h1>
      <p className="content leading-[1.7] text-slate-500 font-[400] select-none">{ data.content }</p>
    </motion.div>
  )
}