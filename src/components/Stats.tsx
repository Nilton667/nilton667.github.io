"use client"
import CountUp from "react-countup";

const stats = [
    {num: 6, text: 'Anos de experiência'},
    {num: 26, text: 'Projetos concluídos'},
    {num: 8, text: 'Tecnologias dominada'},
    {num: 500, text: 'Code Commits'}
]

export default function Stats() {
    return (
        <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
            <div className="container mx-auto">
                <div className="flex flex-wrap gap-6 mx-w-[80vw] mx-auto xl:mx-w-none">
                    {stats.map((stat, i)=>{
                        return <div 
                        className="flex-1 flex gap-4 items-center justify-center xl:justify-start" 
                        key={i}>
                            <CountUp 
                            end={stat.num} 
                            duration={5} 
                            delay={2} 
                            className="text-4xl xl:text-6xl font-extrabold"/>
                            <p className={`${
                                stat.text.length < 15 ? "max-w-[100px] " : "max-w-[150px] " }
                                leading-sung text-white/80`}>
                                {stat.text}
                            </p>
                        </div>
                    })}
                </div>
            </div>
        </section>
    );
}