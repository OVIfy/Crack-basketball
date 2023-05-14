import {useEffect, useRef, useState} from 'react'
import { motion, useAnimationControls } from "framer-motion"


const Visualizer = ({url}) => {
  const controls = useAnimationControls()

  const [isPaused, setIsPaused] = useState(true)
  const audioElement = useRef(null)

  useEffect(()=>{
    // controls.start(i => ({height : i*10 + '%'}))
  }, [])

  function play(){
    let random = Math.floor(Math.random() * 5) * 2 > 0 ? Math.floor(Math.random() * 5) * 2 : 5
    console.log(random)
    setIsPaused(false)
    audioElement.current.play()
    controls.start(i => ({height : i*random + '%'}))

  }

  function stop(){
    setIsPaused(true)
    audioElement.current.pause()
    controls.stop()
  }

  return (
    <motion.div className='h-[60px] relative inline-block'>
      <audio ref={audioElement} src={url} className='mr-2'/>
      <div className='flex items-center justify-center gap-[0.2rem] absolute h-[60px]'>
        {isPaused ?
          <button className="w-[10px] aspect-square bg-[url('/images/icons/icon-play.svg')] bg-center bg-contain bg-no-repeat" onClick={play}></button>
          :
          <button className='w-[10px] aspect-square flex justify-between' onClick={stop}>
            <div className='w-[40%] h-full bg-black'></div>
            <div className='w-[40%] h-full bg-black'></div>
          </button>
        }
        <motion.div custom={0} animate={controls} transition={{repeat : Infinity, repeatType : 'reverse', duration : 1, type:"tween"}} className="w-[3px] h-[90%] bg-black"></motion.div>
        <motion.div custom={1} animate={controls} transition={{repeat : Infinity, repeatType : 'reverse', duration : 0.8, type:"tween"}} className="w-[3px] h-[85%] bg-black"></motion.div>
        <motion.div custom={4} animate={controls} transition={{repeat : Infinity, repeatType : 'reverse', duration : 1, type:"tween"}} className="w-[3px] h-[40%] bg-black"></motion.div>
        <motion.div custom={3} animate={controls} transition={{repeat : Infinity, repeatType : 'reverse', duration : 0.8, type:"tween"}} className="w-[3px] h-[25%] bg-black"></motion.div>
        <motion.div custom={5} animate={controls} transition={{repeat : Infinity, repeatType : 'reverse', duration : 0.5, type:"tween"}} className="w-[3px] h-[40%] bg-black"></motion.div>
        <motion.div custom={7} animate={controls} transition={{repeat : Infinity, repeatType : 'reverse', duration : 0.5, type:"tween"}} className="w-[3px] h-[50%] bg-black"></motion.div>
        <motion.div custom={7} animate={controls} transition={{repeat : Infinity, repeatType : 'reverse', duration : 0.5, type:"tween"}} className="w-[3px] h-[30%] bg-black"></motion.div>
        <motion.div custom={8} animate={controls} transition={{repeat : Infinity, repeatType : 'reverse', duration : 1, type:"tween"}} className="w-[3px] h-[10%] bg-black"></motion.div>
        <motion.div custom={8} animate={controls} transition={{repeat : Infinity, repeatType : 'reverse', duration : 0.8, type:"tween"}} className="w-[3px] h-[10%] bg-black"></motion.div>
        <motion.div custom={4} animate={controls} transition={{repeat : Infinity, repeatType : 'reverse', duration : 1, type:"tween"}} className="w-[3px] h-[10%] bg-black"></motion.div>
        <motion.div custom={7} animate={controls} transition={{repeat : Infinity, repeatType : 'reverse', duration : 0.8, type:"tween"}} className="w-[3px] h-[50%] bg-black"></motion.div>
        <motion.div custom={5} animate={controls} transition={{repeat : Infinity, repeatType : 'reverse', duration : 0.5, type:"reverse"}} className="w-[3px] h-[20%] bg-black"></motion.div>
        <motion.div custom={3} animate={controls} transition={{repeat : Infinity, repeatType : 'reverse', duration : 0.5, type:"tween"}} className="w-[3px] h-[30%] bg-black"></motion.div>
        <motion.div custom={1} animate={controls} transition={{repeat : Infinity, repeatType : 'reverse', duration : 0.5, type:"tween"}} className="w-[3px] h-[70%] bg-black"></motion.div>
      </div>
    </motion.div>
  )
}

export default Visualizer