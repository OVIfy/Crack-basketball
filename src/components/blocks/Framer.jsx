import React from 'react'
import { motion, AnimatePresence } from "framer-motion"

const variants = {
    visible: { opacity: 1, scale : 0 },
    hidden: { opacity: 1, scale : 1 },
}

const Framer = () => {
  return (
    <motion.div 
        initial="hidden"
        variants={variants}
        className='w-[100px] h-[100px] bg-red-500 origin-[center_top] ' 
        animate="visible"
        transition={{easings : 'easeOut', duration : 0.5, times : [0, 0.3, 1]}}
        whileTap={{scale : 1.2, transition : {duration : 1}}}
    />
  )
}

export default Framer