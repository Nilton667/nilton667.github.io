"use client"
import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    num: "01",
    tittle: "Desenvolvimento Móvel",
    description: "",
    href: "#"
  },
  {
    num: "02",
    tittle: "Desenvolvimento web",
    description: "",
    href: "#"
  },
  {
    num: "03",
    tittle: "IA",
    description: "",
    href: "#"
  },
  {
    num: "04",
    tittle: "Segurança Digital",
    description: "",
    href: "#"
  },
  {
    num: "05",
    tittle: "Software personalizado",
    description: "",
    href: "#"
  },
  {
    num: "06",
    tittle: "Machine Learning",
    description: "",
    href: "#"
  }
];

export default function Home() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-8">
      <div className="container mx-auto">
        <motion.div
        initial={{opacity: 0}}
        animate={{
          opacity: 1,
          transition: {delay: 2.4, duration: 0.4, ease: 'easeIn'}
        }}
        className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
          {
            services.map((service, i)=>{
              return (
              <div 
              key={i}
              className="flex-1 flex flex-col justify-center gap-6 group">
                <div className="w-full flex justify-between items-center">
                  <div 
                  className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link 
                  className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  href={service.href}>
                    <ArrowDownRight className="text-primary text-3xl"/>
                  </Link>
                </div>
                <h2 className="text-[28px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 ">{service.tittle}</h2>
                <p className="text-white/60">{service.description}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
              )
            })
          }
        </motion.div>
      </div>
    </section>
  );
}
