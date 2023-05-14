import {useState, useRef, useEffect} from 'react'
import { motion, AnimatePresence, LayoutGroup } from "framer-motion"



const data = [
    {url : '/images/featured/1.gif', name : 'John'},
    {url : '/images/featured/2.gif', name : 'James'},
    {url : '/images/featured/3.gif', name : 'Keshy'},
    {url : '/images/featured/4.gif', name : 'Steven'},
]



const Showcase = () => {
    const [index, setIndex] = useState(0)
    const card = useRef(null)
    let previousCardWidth = useRef(0)

    useEffect(()=>{

        if(card.current){
            // console.log(previousCardWidth.current)
            if(previousCardWidth.current > 0){
                card.current.animate([{transform : `scaleX(${card.current.getBoundingClientRect().width / previousCardWidth.current})`}, {transform : 'scaleX(1)'}],{duration : 1000, fill : 'forwards'})
                console.log(card.current.getBoundingClientRect().width / previousCardWidth.current)
            }

            previousCardWidth.current = card.current.getBoundingClientRect().width
            // console.log(card.current.getBoundingClientRect())
            // console.log(previousCardWidth)
        }

    },[index])

    const moveForward = () => {
        if(index == data.length - 1)
            setIndex(0)

        if(index < data.length - 1)
        setIndex(index + 1)
    }

    const moveBackward = () => {
        if(index==0)
            setIndex(data.length - 1)
        if(index > 0)
        setIndex(index - 1)
    }

  return (
    
    <div
        className="inline-block card origin-top-right"
        ref={card}
    >
    <motion.div  className="inline-flex gap-4"
    >
      <img className="h-[150px]" src={data[index].url} alt="no reason am"/>
      <div className="flex items-center gap-4">
        <button><motion.div onClick={moveBackward} className="w-[40px] aspect-square bg-[url('/images/icons/icon-angle-left.svg')] bg-center bg-no-repeat"></motion.div></button>
        <motion.h1>{data[index].name}</motion.h1>
        <button><motion.div onClick={moveForward} className="w-[40px] aspect-square bg-[url('/images/icons/icon-angle-right.svg')] bg-center bg-no-repeat"></motion.div></button>
      </div>
    </motion.div>

    <div>

      <div className="flex mt-4 gap-10 md:absolute justify-between md:top-[-24px] md:right-8">
        <div>
            <p className="text-[12px] font-bold text-gray-300">Position</p>
            <p className="text-[16px] font-hand-sofia leading-6 mt-1">Small Forward</p>
        </div>
    
        <div>
            <p className="text-[12px] font-bold text-gray-300">Rebounds</p>
            <p className="text-[16px] font-hand-sofia leading-6 mt-1">Los Angeles Lakers</p>
        </div>
      </div>

      <div className="flex mt-4 gap-10 md:absolute justify-between md:top-[-24px] md:right-8">
        <div>
            <p className="text-[12px] font-bold text-gray-300">Team</p>
            <p className="text-[16px] font-hand-sofia leading-6 mt-1">Small Forward</p>
        </div>
    
        <div>
            <p className="text-[12px] font-bold text-gray-300">Points</p>
            <p className="text-[16px] font-hand-sofia leading-6 mt-1">Los Angeles Lakers</p>
        </div>
      </div>

      <div className="flex mt-4 gap-10 md:absolute justify-between md:top-[-24px] md:right-8">
        <div>
            <p className="text-[12px] font-bold text-gray-300">Height</p>
            <p className="text-[16px] font-hand-sofia leading-6 mt-1">Small Forward</p>
        </div>
    
        <div>
            <p className="text-[12px] font-bold text-gray-300">Assist</p>
            <p className="text-[16px] font-hand-sofia leading-6 mt-1">Los Angeles Lakers</p>
        </div>
      </div>

    </div>
    </div>
  )
}

export default Showcase