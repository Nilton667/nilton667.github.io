"use client"
import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger

} from "@/components/ui/tooltip";
import { 
  SiGithub,

} from "react-icons/si";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";
import { Swiper as SwiperType } from "swiper/types";

const projects = [
  {
    num: '01',
    category: 'Fintech',
    tittle: 'Horizon',
    description: 'Horizon é um aplicativo móvel com soluções de pagamento e transferências através de smartphone ou tablet',
    stack: [
      {name: 'Dart'},
      {name: 'Flutter'},
      {name: 'Javascript'},
      {name: 'C++'}
    ],
    image: '/horizon.png',
    live: '',
    github: '',
  },  
  {
    num: '02',
    category: 'Marketing',
    tittle: 'Envoyer',
    description: 'Envoyer é um aplicativo multiplataforma com soluções de marketing por e-mail e SMS em massa.',
    stack: [
      {name: 'NextJS'},
      {name: 'Rust'},
    ],
    image: '/envoyer.png',
    live: '',
    github: '',
  },
  {
    num: '03',
    category: 'Gestão de Acesso',
    tittle: 'Monzoyetu',
    description: 'Controlo de acesso e gestão de condomínios',
    stack: [
      {name: 'PHP (Laravel)'},
      {name: 'Dart'},
      {name: 'Flutter'},
      {name: 'Kotlin'},
      {name: 'Node.JS'}
    ],
    image: '/zoom.png',
    live: 'https://monzoyetu.com',
    github: '',
  },
  {
    num: '04',
    category: 'Loja Virtual',
    tittle: 'Rubro',
    description: '',
    stack: [
      {name: 'Nest.JS'},
      {name: 'Rust'},
    ],
    image: '/rubro.png',
    live: '',
    github: '',
  },
]

export default function Home() {
  const [project, setProject] = useState(projects[0]);
  
  const handleSlideChange = (swiper: SwiperType)=>{
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  }

  return (
    <motion.section
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} - {project.tittle}
              </h2>
              {/* description */}
              <p className="text-white-60">
                {project.description}
              </p>
              <ul className="flex gap-4">
                {project.stack.map((item, i)=>{
                  return(
                    <li key={i} className="text-xl text-accent">
                      {item.name}
                      {i !== project.stack.length - 1 && ','}
                    </li>
                  )
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live projet button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <ArrowUpRight className="text-white text-3xl group-hover:text-accent"/>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Projeto ao vivo</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* Github */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <SiGithub className="text-white text-3xl group-hover:text-accent"/>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Repositorio do github</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
            spaceBetween={30}
            slidesPerView={1}
            className="xl:h-[520px] mb-12"
            onSlideChange={handleSlideChange}>
              {projects.map((item, i)=>{
                return <SwiperSlide key={i} className="w-full">
                    <div className="h-[460px] rounded relative group flex justify-center items-center bg-pink-50/20">
                      {/* Overlay */}
                      <div className="absolute rounded top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* Image */}
                      <div className="relative w-full h-full">
                      <Image 
                      className="object-contain rounded" 
                      src={item.image} 
                      fill 
                      alt={item.tittle}/>
                      </div>
                    </div>
                  </SwiperSlide>
              })}
              {/* Buttons */}
              <WorkSliderBtns 
              containerStyle="flex gap-2 absolute right-0 bottom-[calc(50%-22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" 
              btnStyle="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              iconsStyle="text-black"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
