import React, { useEffect, useState } from 'react'
let imgValue = 0
const imgArr = []
imgArr[0]=process.env.PUBLIC_URL + '/scroll1Low.png'
imgArr[1]=process.env.PUBLIC_URL + '/scroll2Low.png'
imgArr[2]=process.env.PUBLIC_URL + '/scroll3Low.png'


const Home = () => {
const[currentImg,setCurrentImage] = useState(0)


useEffect(()=>{
const timer = setInterval(()=>{
setCurrentImage(imgValue)
imgValue++
if(imgValue>2){
imgValue=0 
clearInterval(timer)
}
},3000)
return () => clearInterval(timer);
},[currentImg])


  return (
    <>
    <div className=' w-full'>
    <img src={imgArr[currentImg]} alt={`Image ${currentImg}`} />
    </div>
    </>
    
  )
}

export default Home