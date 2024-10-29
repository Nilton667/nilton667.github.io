"use client"
import { motion } from "framer-motion";
import Image from "next/image";

export default function Photo() {
    return (
        <div className="w-full h-full relative ">
            {/* Image */}
            <motion.div
            className="w-[298px] h-[298px] xl:w-[400px] xl:h-[400px] mix-blend-lighten absolute"
            initial={{opacity: 0}}
            animate={{
                opacity: 1,
                transition:{delay: 2.4, duration: 0.4, ease: 'easeInOut'}
            }}>
                <div>
                    <Image src={'./avatar.png'} quality={100} priority fill alt="Avatar" className="object-contain rounded-full"/>
                </div>
            </motion.div>
            {/* Border */}
            <motion.svg
            className={'w-[298px] h-[298px] xl:w-[400px] xl:h-[400px]'}
            fill={'transparent'}
            viewBox={'0 0 506 506'}
            xmlns={'http://www.w3.org/2000/svg'}>
                <motion.circle 
                cx={254}
                cy={254}
                r={250}
                stroke="#00ff99"
                strokeWidth={4}
                strokeLinecap={'round'}
                strokeLinejoin={'round'}
                initial={{strokeDasharray: "24 10  0 0"}}
                animate={
                    {
                        strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 2"],
                        rotate: [120, 360]
                    }
                }
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    repeatType: 'reverse'
                }}/>
            </motion.svg>
        </div>
    );
}