"use client"
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Tooltip, TooltipContent } from "@radix-ui/react-tooltip";
import { motion } from "framer-motion";
import { 
  SiJavascript, 
  SiPhp, 
  SiTypescript,
  SiNodedotjs,
  SiFlutter,
  SiCss3,
  SiMongodb,
  SiMysql,
  SiPython,
  SiKotlin,
  SiHtml5,
  SiGit,
  SiCsharp,

} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const about = {
  tittle: 'Sobre mim',
  description: 'Programador e desenvolvedor há mais de 6 anos actuando directamente no mercado. Bem reconhecido na área por também dar aulas tanto em escolas de programação, quanto aulas particulares',
  info: [
    {
      fieldName: 'Nome',
      fieldValue: 'Nilton Manuel'
      
    },
    {
      fieldName: 'Telefone',
      fieldValue: '(+244) 935 074 974'
      
    },
    {
      fieldName: 'Experiência',
      fieldValue: '+6 Anos'
      
    },
    {
      fieldName: 'Telegram',
      fieldValue: '@nilton667'
    },
    {
      fieldName: 'Github',
      fieldValue: 'github.com/nilton667'
    },
    {
      fieldName: 'Nacionalidade',
      fieldValue: 'Angola'
      
    },
    {
      fieldName: 'Email',
      fieldValue: 'nilton667@controljp.com'
      
    },
    {
      fieldName: 'Freelancer',
      fieldValue: 'Disponíveil'
      
    },
    {
      fieldName: 'Linguagem',
      fieldValue: 'Português, Ingles'
      
    },
  ]
}

const experience = {
  icon: '',
  tittle: 'Experiência',
  description: 'Experiência profissional',
  items: [
    {
      company: 'Bep-softwares',
      position: 'WEB DEVELOPER',
      duration: '2014',
    },
    {
      company: 'Vénus Robusta',
      position: 'PROGRAM SPECIALIST',
      duration: '2015',
    },
    {
      company: 'Mulemba',
      position: 'SYSTEM PROGRAMMER',
      duration: '2019',
    },
    {
      company: 'Global Advanced Technology LTD',
      position: 'Full Stack Developer',
      duration: '2021',
    },
    {
      company: 'Control JP',
      position: 'Full Stack Developer',
      duration: '2023',
    },
  ]
}

const education = {
  icon: '',
  tittle: 'Educação',
  description: 'Formação acadêmica',
  items: [
    {
      institution: 'I.M.E.K.K (Medium Institute of Economics of Kilamba Kiaxe)',
      degree: 'Administration and Services',
      duration: '2015',
    },
    {
      institution: 'I.S.P.A (Atlântida Polytechnic Institute)',
      degree: 'Human Resources',
      duration: '2018',
    },
    {
      institution: 'I.S.I.A (International Higher Polytechnic Institute Of Angola)',
      degree: 'Computer Engineering',
      duration: '2021',
    },
  ]
}

const skills = {
  tittle: 'Habilidades',
  description: 'Habilidades adquiridas ao longo do tempo',
  kspillList: [
    {
      icon: <SiPhp/>,
      name: 'PHP (Laravel)',
    },
    {
      icon: <SiJavascript/>,
      name: 'JavaScript',
    },
    {
      icon: <SiTypescript/>,
      name: 'TypeScript',
    },
    {
      icon: <SiNodedotjs/>,
      name: 'Node.js',
    },
    {
      icon: <SiFlutter/>,
      name: 'Flutter',
    },
    {
      icon: <SiCss3/>,
      name: 'CSS',
    },
    {
      icon: <SiMongodb/>,
      name: 'MongoDb',
    },
    {
      icon: <SiMysql/>,
      name: 'Mysql And PostGreSql',
    },
    {
      icon: <SiCsharp/>,
      name: 'C#',
    },
    {
      icon: <SiPython/>,
      name: 'Python',
    },
    {
      icon: <SiKotlin/>,
      name: 'Kotlin',
    },
    {
      icon: <FaJava/>,
      name: 'Java',
    },
    {
      icon: <SiHtml5/>,
      name: 'HTML',
    },
    {
      icon: <SiGit/>,
      name: 'Git',
    }
  ]
}

export default function Home() {
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{
      opacity: 1,
      transition: {delay: 2.4, duration: 0.4, ease: 'easeIn'}
    }}
    className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <Tabs
        defaultValue="experience"
        className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger className="rounded" value="experience">Experiência</TabsTrigger>
            <TabsTrigger className="rounded" value="education">Educação</TabsTrigger>
            <TabsTrigger className="rounded" value="skills">Habilidades</TabsTrigger>
            <TabsTrigger className="rounded" value="about">Sobre mim</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">
                  {experience.tittle}
                </h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, i)=>{
                      return(
                      <li key={i} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">
                  {education.tittle}
                </h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, i)=>{
                      return(
                      <li key={i} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                  <div className="flex flex-col gap-[30px] text-center xl:text-left">
                    <h3 className="text-4xl font-bold">{skills.tittle}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                      {skills.description}
                    </p>
                  </div>
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md-grid-cols-4 gap-4 xl:gap-[30px]">
                    {skills.kspillList.map((item, i)=>{
                      return (
                        <li key={i}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                <div className="text-6xl group-hover:text-accent transition-all duration-300">{item.icon}</div>
                              </TooltipTrigger>
                              <TooltipContent>
                              <div className="capitalize">{item.name}</div>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      )
                    })}
                  </ul>
              </div>
            </TabsContent>
            {/* about */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">
                    {about.tittle}
                </h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] max-auto xl:mx-0">
                    {about.info.map((item, i)=>{
                      return(
                        <li key={i} className="flex items-center justify-center xl:justify-start gap-4">
                          <span className="text-white/60">{item.fieldName}</span>
                          <span className="text-xl">{item.fieldValue}</span>
                        </li>
                      )
                    })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
        <br/>
      </div>
    </motion.div>
  );
}
