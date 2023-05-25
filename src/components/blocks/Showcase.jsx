import {useState, useEffect} from 'react'
import { motion, AnimatePresence, LayoutGroup } from "framer-motion"


const data = [
    {position : 'Point Guard', rebounds : '3.7', team : 'Denver Nuggets', height : '6 ft 4 in', assists : '4.2', points : '16.9', url : '/images/featured/1.gif', name : 'Jamal Murray', animate : {opacity : [0,1], x:[-20, 0], y: [-20, 0]}},
    {position : 'Power Forward', rebounds : '7.1', team : 'Phoenix Suns', height : '6 ft 10 in', assists : '4.3', points : '27.3', url : '/images/featured/2.gif', name : 'Kevin Durant', animate : {opacity : [0.1,1], x:[-20, 0], y:[50, 0]}},
    {position : 'Small Forward', rebounds : '7.5', team : 'Los Angeles Lakers', height : '6 ft 9 in', assists : '7.3', points : '27.2', url : '/images/featured/3.gif', name : 'Lebron James', animate : {opacity : [0.1,1], x:[20, 0], y:[20, 0]}},
    {position : 'Small Forward', rebounds : '5.6', team : 'Retired', height : '6 ft 8 in', assists : '4.4', points : '19.6', url : '/images/featured/4.gif', name : 'Tracy McGrady', animate : {opacity : [0,1], x:[50, 0], y:[20, 0]}},
    {position : 'Shooting Guard', rebounds : '6.4', team : 'Los Angeles Clppers', height : '6 ft 7 in', assists : '3.0', points : '19.6', url : '/images/featured/5.gif', name : 'Kawhi Leonard', animate : {opacity : [0,1], x:[0, 0], y:[100, 0]}},
    {position : 'Shooting Guard', rebounds : '60.2', team : 'Retired', height : '6 ft 6 in', assists : '3.3', points : '30.1', url : '/images/featured/6.gif', name : 'Micheal Jordan', animate : {opacity : [0,1], x:[-100, 0], y:[0, 0]}},
    {position : 'Small Forward', rebounds : '10.0', team : 'Retired', height : '6 ft 11 in', assists : '3.7', points : '17.8', url : '/images/featured/7.gif', name : 'Kevin Garnett', animate : {opacity : [0,1], x:[50, 0], y:[20, 0]}},
    {position : 'Shooting Guard', rebounds : '5.2', team : 'Retired', height : '6 ft 6 in', assists : '4.7', points : '25.0', url : '/images/featured/8.gif', name : 'Kobe Bryant', animate : {opacity : [0,1], x:[-40, 0], y:[-40, 0]}},
    {position : 'Center', rebounds : '10.8', team : 'Retired', height : '6 ft 11 in', assists : '3.0', points : '19.0', url : '/images/featured/9.gif', name : 'Tim Duncan', animate : {opacity : [0,1], x:[-20, 0], y:[20, 0]}},

]

const Showcase = () => {

    useEffect(()=>{
        data.forEach(d => {
            const img = new Image()
            img.src = d.url
            console.log(img)
        })
    }, [])

    const [index, setIndex] = useState(0)

    const playAudio = async () => {
        const bounceAudio = new Audio('/audio/bounce.mp3')
        bounceAudio.play()
    }

    const playSwish = async () => {
        const swishAudio = new Audio('/audio/swish.mp3')
        swishAudio.play()
    }

    const moveForward = () => {
        playSwish()
        if(index == data.length - 1)
            setIndex(0)

        if(index < data.length - 1)
        setIndex(index + 1)
    }

    const moveBackward = () => {
        playSwish()
        if(index==0)
            setIndex(data.length - 1)
        if(index > 0)
        setIndex(index - 1)
    }

  return (
    <motion.div>
        <motion.div
            className="inline-block md:inline-flex shadow-md rounded-md relative bg-white"
            layout="scale"
            layoutRoot
            
        >
            <div className='absolute right-2 bottom-2 text-[12px] md:text-[16px] text-neutral-color'>{`${index + 1} / ${data.length}`}</div>
            <motion.div className="inline-flex gap-4">
                <motion.img className="h-[20vw] sm:h-[150px] md:h-[350px]" src={data[index].url} alt="no reason am" layout="size" animate={data[index].animate}  transition={{ type: "spring", stiffness : 150, duration : 2, layout : {duration : 0.5}}}/>
                <motion.div layout="position" className="flex items-center md:hidden">
                    <button><motion.div onClick={moveBackward} className="w-[40px] aspect-square bg-[url('/images/icons/icon-angle-left.svg')] bg-center bg-no-repeat"></motion.div></button>
                    <motion.h1 className='text-center font-bilal '>{data[index].name}</motion.h1>
                    <button><motion.div onClick={moveForward} className="w-[40px] aspect-square bg-[url('/images/icons/icon-angle-right.svg')] bg-center bg-no-repeat"></motion.div></button>
                </motion.div>
            </motion.div>

            <div>
                <motion.div layout="position" className="items-center justify-center gap-4 hidden md:flex">
                    <button><motion.div onClick={moveBackward} className="w-[40px] aspect-square bg-[url('/images/icons/icon-angle-left.svg')] bg-center bg-no-repeat"></motion.div></button>
                    <motion.h1 className='text-[30px] font-bilal text-center lg:text-[48px]'>{data[index].name}</motion.h1>
                    <button><motion.div onClick={moveForward} className="w-[40px] aspect-square bg-[url('/images/icons/icon-angle-right.svg')] bg-center bg-no-repeat"></motion.div></button>
                </motion.div>
                
                <motion.div className='flex justify-between px-4 pb-[36px] md:pb-0 gap-4 md:gap-16' layout="position" transition={{ ease: "easeOut", duration: 0.5 }}>
                    <div className="flex flex-col mt-4 gap-10  justify-between md:top-[-24px]">
                        <div>
                            <p className="text-[12px] font-bold text-[#bdbcbc]">Position</p>
                            <p className="text-[16px] font-hand-sofia leading-6 mt-1">{data[index].position}</p>
                        </div>

                        <div>
                            <p className="text-[12px] font-bold text-[#bdbcbc]">Team</p>
                            <p className="text-[16px] font-hand-sofia leading-6 mt-1">{data[index].team}</p>
                        </div>

                        <div>
                            <p className="text-[12px] font-bold text-[#bdbcbc]">Height</p>
                            <p className="text-[16px] font-hand-sofia leading-6 mt-1">{data[index].height}</p>
                        </div>
                    </div>

                    <div className="flex flex-col mt-4 gap-10  justify-between md:top-[-24px]">
                        <div>
                            <p className="text-[12px] font-bold text-[#bdbcbc]">Rebounds</p>
                            <p className="text-[16px] font-hand-sofia leading-6 mt-1">{data[index].rebounds}</p>
                        </div>
                        
                        <div>
                            <p className="text-[12px] font-bold text-[#bdbcbc]">Points</p>
                            <p className="text-[16px] font-hand-sofia leading-6 mt-1">{data[index].points}</p>
                        </div>

                        <div>
                            <p className="text-[12px] font-bold text-[#bdbcbc]">Assist</p>
                            <p className="text-[16px] font-hand-sofia leading-6 mt-1">{data[index].assists}</p>
                        </div>
                    </div>
                </motion.div>
            </div>

        </motion.div>
    </motion.div>
  )
}

export default Showcase