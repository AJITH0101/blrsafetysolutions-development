import React, { useEffect, useState } from 'react'
import Badge from './Badge';

import { MdMailOutline } from "react-icons/md";


let switchValue = 0
let imgSwitch = [true,true,true] 

const mailIcon = <MdMailOutline size={50} color="#ffffff" />

const Home = () => {
const imgArr = [process.env.PUBLIC_URL + '/scroll1Low.png',
                process.env.PUBLIC_URL + '/scroll2Low.png',
                process.env.PUBLIC_URL + '/scroll3Low.png']

 

      const[currentVisible,setVisible] = useState(Array(3).fill(true)) //currentVisible Array will hold boolean value to switch the image
      const[currentScroll,setScroll] = useState(false)
     
      
      useEffect(()=>{

      const handleWindowY = ()=>{

        

      if(window.scrollY>=100 && window.scrollY<=200) {
      setScroll(true)
       console.log("100 pixels"); 
      }
      }

      window.addEventListener('scroll',handleWindowY);

     
          const imgTimer = setInterval(()=>{     

        
          switch(switchValue){
          case 0: {
          imgSwitch = [false,true,true];// Hides the first image, second and third images will visible(2nd one above third)
          break;
        }
        case 1: {
          imgSwitch = [false,false,true];// Hides the 1st and 2nd images and 3rd image will be visible
          break;
        }
        default :{
          imgSwitch = [true,true,true];//This makes 1st image visible
        }
      }
        switchValue++;
        if(switchValue>2){  //switching images
        switchValue=0
        }    
    
    setVisible(()=>{
    const currentImage = [...imgSwitch]
    return currentImage
    })

    },5000)

    return()=>{
     clearInterval(imgTimer) 
     window.removeEventListener('scroll',handleWindowY)
    }   

    },[currentVisible])

  return (
    <> 


    <div className={`relative w-full`}>
      <img className = {`absolute transition-opacity duration-1000 ${currentVisible[2] ? 'opacity-100' : 'opacity-0'}`} src={imgArr[2]} alt='image2'/>
      <img className = {`absolute transition-opacity duration-1000 ${currentVisible[1] ? 'opacity-100' : 'opacity-0'}`} src={imgArr[1]} alt='image1'/>
      <img className = {`absolute transition-opacity duration-1000 ${currentVisible[0] ? 'opacity-100' : 'opacity-0'}`} src={imgArr[0]} alt='image0'/>
    </div>

    <div className='flex flex-row w-full lg:h-56 md:h-56 lg:mt-80 md:mt-56 sm:h-56 sm:mt-44 xs:h-36 xs:mt-24  bg-[#AD0711]'>
      <div className={`lg:pt-28 md:pt-28 sm:pt-14 xs:pt-14 text-white transition-transform duration-500 inline-block ${currentScroll ? 'lg:translate-x-full md:translate-x-1/2 sm:translate-x-1/4 xs:translate-x-1/4' : 'translate-x-0' } absolute transition-opacity duration-1000 ${currentScroll ? 'opacity-100' : 'opacity-0'}`} >
         <div className='flex flex-row'>
          <div className='lg:px-2 md:px-2 sm:px-1 xs:px-1'>{mailIcon}</div>
          <div className='lg:text-5xl md:text-5xl sm:text-3xl xs:text-3xl lg:pt-0 md:pt-0 sm:pt-2 xs:pt-2'>Get a Quote Now</div>          
         </div>           
      </div>    
      
     

    </div>
 <div className='w-full h-[2000px] bg-white text-center text-4xl pt-8 font-bold text-gray-800'>
  <div>Our Products</div>

<div className='flex flex-wrap'>  
 <Badge item='Head Protection' picture={process.env.PUBLIC_URL + '/helmet.jpeg'} />
 <Badge item='Eye Protection' picture={process.env.PUBLIC_URL + '/eyeprotect.jpg'} />
 <Badge item='Face Protection' picture={process.env.PUBLIC_URL + '/faceprotect.jpg'} />
 <Badge item='Hand Protection' picture={process.env.PUBLIC_URL + '/gloves.jpg'} />
 <Badge item='Body Protection' picture={process.env.PUBLIC_URL + '/bodyprotect.jpg'} />
 <Badge item='Respiratory Protection' picture={process.env.PUBLIC_URL + '/mask.jpg'} />
 <Badge item='Face Protection' picture={process.env.PUBLIC_URL + '/faceprotect.jpg'} />
 <Badge item='Reflective Wear' picture={process.env.PUBLIC_URL + '/reflectivewear.jpg'} />

</div>
  </div>

    </>
    
  )
}

export default Home