"use client"

import { motion } from "framer-motion";

const stairAnimation = {
    initial: {
        top: "0%"
    },
    animate: {
        top: "100%"
    },
    exit: {
        top: ["100%", "0%"]
    }
}
export default function Stairs() {
    const reverseIndex = (i: number)=> {
        const steps = 6;
        return steps - i - 1;
    }

    return (
        <>
        {
            [...Array(6)].map((_, i)=>(
                <motion.div 
                key={i} 
                variants={stairAnimation}
                initial='initial'
                animate='animate'
                exit='exit'
                transition={
                    {
                        duration: '0.4',
                        ease: 'easeInOut',
                        delay: reverseIndex(i) * 0.1
                    }
                }
                className="h-screen w-screen bg-white relative "
                />
            ))
        }
        </>
    );
}