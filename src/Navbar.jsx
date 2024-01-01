import React, { useEffect, useState } from 'react'
import { FiMenu } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";

const menuIcon = <FiMenu size={30} color="#00171f" />
const closeIcon = <IoCloseSharp size={30} color="#00171f" />
let num = 0
let num1 = 0






const Navbar = () => {
const[navBar,setNavBar] = useState(true)
const[inc,setinc] = useState(0)
const[next,setNext] = useState(0)

useEffect(()=>{
  const WindowCheck=()=>{
    if(window.innerWidth<775){
      setNavBar(false)
    }
    else{
      setNavBar(true)
    }
  }
  window.addEventListener('resize',WindowCheck)
  return ()=>{
    window.removeEventListener('resize',WindowCheck)
  }
},[navBar])



  return (

  <>
  


    {(navBar? (<div className='lg:w-full md:w-full lg:h-20 md:h-20 sm:h-20 xs:h-20 bg-white  text-black lg:flex lg:flex-row lg:justify-between md:flex md:flex-row md:justify-between'>
    
                      
                              <div className='w-60'>
                                  <img src={process.env.PUBLIC_URL + '/logo.png'} alt="Logo" />
                              </div>    

                              <div className='lg:flex lg:flex-row md:flex md:flex-row lg:pt-6 md:pt-6 text-lg lg:pr-8'>
                                  <div className='lg:px-5 md:px-5 text-[#00171f]'>Home</div>
                                  <div className='lg:px-5 md:px-5 text-[#00171f]'>Products</div>
                                  <div className='lg:px-5 md:px-5 text-[#00171f]'>Career</div>
                                  <div className='lg:px-5 md:px-5 text-[#00171f]'>About Us</div>
                                  <div className='lg:px-5 md:px-5 text-[#00171f]'>Contact Us</div>                             
                              </div> 
                     
                </div> )  

   

    :(<div className='sm:w-full xs:w-full sm:w-full xs:w-full sm:h-20 xs:h-20 sm:h-20 xs:h-20 bg-white text-black sm:flex sm:flex-col  xs:flex xs:flex-col'>
      
              <div className='w-60'>
                  <img src={process.env.PUBLIC_URL + '/logo.png'} alt="Logo" />
              </div>  
      </div>   
      ))} 

      {(!navBar && (<div className=' sm:pt-6 sm:pt-6 text-lg lg:pr-8'>
                  <div className='lg:px-5 md:px-5 text-[#00171f]'>Home</div>
                  <div className='lg:px-5 md:px-5 text-[#00171f]'>Products</div>
                  <div className='lg:px-5 md:px-5 text-[#00171f]'>Career</div>
                  <div className='lg:px-5 md:px-5 text-[#00171f]'>About Us</div>
                  <div className='lg:px-5 md:px-5 text-[#00171f]'>Contact Us</div>
     </div>) 
      )}



      </>
      ) 
}
      


export default Navbar