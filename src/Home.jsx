import React, { useEffect, useState } from 'react'
let switchValue = 0

const Home = () => {
const imgArr = [process.env.PUBLIC_URL + '/scroll1Low.png',
                process.env.PUBLIC_URL + '/scroll2Low.png',
                process.env.PUBLIC_URL + '/scroll3Low.png']

let imgSwitch = [true,true,true]  

      const[currentVisible,setVisible] = useState(Array(3).fill(true)) //currentVisible Array will hold boolean value to switch the image
      useEffect(()=>{
      const imgTimer = setInterval(()=>{
      switch(switchValue){
          case 0: {
          imgSwitch = [false,true,true];// Hides the first image, secon and third images will visible(2nd one above third)
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
    },4000)
    clearInterval(imgTimer)
    },[currentVisible])



  return (
    <>
    <div className={`relative w-full`}>
      <img className = {`absolute transition-opacity duration-1000 ${currentVisible[2] ? 'opacity-100' : 'opacity-0'}`} src={imgArr[2]} alt='image[2]'/>
      <img className = {`absolute transition-opacity duration-1000 ${currentVisible[1] ? 'opacity-100' : 'opacity-0'}`} src={imgArr[1]} alt='image[1]'/>
      <img className = {`absolute transition-opacity duration-1000 ${currentVisible[0] ? 'opacity-100' : 'opacity-0'}`} src={imgArr[0]} alt='image[0]'/>



    {/*
    <img className={`absolute transition-opacity duration-1000 ${currentVisible[2] ? 'opacity-100':'opacity-0'}`} src={imgArr[2]} alt={`Image ${currentImg}`} />
    <img className={`absolute transition-opacity duration-1000 ${currentVisible[1] ? 'opacity-100':'opacity-0'}`} src={imgArr[1]} alt={`Image ${currentImg}`} />
    <img className={`absolute transition-opacity duration-1000 ${currentVisible[0] ? 'opacity-100':'opacity-0'}`} src={imgArr[0]} alt={`Image ${currentImg}`} />
  */}
    </div>
    </>
    
  )
}

export default Home