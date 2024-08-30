import { Tooltip } from 'antd'
import React, { useState } from 'react'
import { WeatherIcon } from '../CustomIcons'
import { motion } from 'framer-motion'
import { SunDimIcon, CloudRainIcon , Wind } from 'lucide-react'


const WeatherButton = () => {
 const [isWeatherOpen, setIsWeatherOpen] = useState(false);
  const handleWeather = () => {}

  const variant = {
    initial: {
      width: 40,
      height: 40,
      borderRadius: "100%",
    } ,
    open: {
      width : "100%", 
      height: "100%",
      borderRadius: "10px",
      right: 0, 
      bottom : 0,
      backgroundColor: "rgba(0,0,0,0.5)",

    } ,
    close: {}
  }
  return (
    <Tooltip title={!isWeatherOpen && "Weather"} mouseEnterDelay={0.3}>
            <motion.div 
            layout
            variants={variant}
            initial="initial"
            animate={isWeatherOpen ? "open" : "initial"}
            transition={{duration:0.3 , ease:"easeInOut"}}
            onClick={() => setIsWeatherOpen(!isWeatherOpen)}
            className="glassmorphism absolute bottom-2 right-2 flex justify-start items-center border-[1px] cursor-pointer">
              {!isWeatherOpen && <WeatherIcon className="h-5 w-full stroke-white" />}
              {isWeatherOpen && 
              <motion.div 
              layout
              initial={{opacity:0}}
              animate={{opacity:1}}
              transition={{duration:0.3, ease:"easeInOut" , delay:0.2}}
              className='w-full h-full p-4 text-white'>
               <h4 className='text-sm'>Mon , 01:00 PM , Mostly Sunny</h4>
               <div className='flex justify-start gap-8 items-center mt-5 mb-3'>
                  <h1 className='text-[60px] font-normal flex gap-1'>30<span className='text-xl'>°C</span></h1>
                  <SunDimIcon className='w-16 h-16' />
               </div>
               <div className='flex justify-between'>
                <div className='flex flex-col justify-center items-center'>
                  <CloudRainIcon />
                  <p className='text-sm'>2% Precipitation</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                  <Wind />
                  <p className='text-sm'>23 km/h Winds</p>
                </div>
               </div>
              </motion.div>
              }
            </motion.div>
    </Tooltip>
  )
}

export default WeatherButton