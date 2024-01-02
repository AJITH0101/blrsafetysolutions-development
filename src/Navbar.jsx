import React, { useEffect, useState } from 'react'
import { FiMenu } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";

const menuIcon = <FiMenu size={30} color="#00171f" />
const closeIcon = <IoCloseSharp size={30} color="#00171f" />

let iconSwitch = true





const Navbar = () => {
const[navBar,setNavBar] = useState(true)    //Hook used to render NavBar
const[menuLine,setmenuLine] = useState(false)//Hook used to render the menu icon
const[menuBar,setMenuBar] = useState(true)



useEffect(()=>{

    if(iconSwitch){                           // This section renders initially to check the screen size when the program starts
    if(window.innerWidth<=775){
    setNavBar(false)
    setmenuLine(true)
    }
  else{
    setNavBar(true)
    setmenuLine(false)
    } 
  iconSwitch = false                      //This variable will get false and this section wont repeat after the initial render
  }
 
  
  const WindowCheck=()=>{                 //This is a callBack function which renders when the screen size changed   

    if(window.innerWidth<=775){
      setNavBar(false)                    //setNavBar Check for the screen size and hides the component name HOME, PRODUCTS etc
      setmenuLine(true)                   //setMenuLine will make the menu icon visible when screen size lessthan 775 pixels
      
    }
    else{
      setNavBar(true)
      setmenuLine(false)
      setMenuBar(true)     
    }
  }
  window.addEventListener('resize',WindowCheck)
  return ()=>{
  window.removeEventListener('resize',WindowCheck)
  }
  },[navBar])


  const menuIconShift = ()=>{             //This function will switch menuicon 
  setmenuLine(!menuLine)
  setMenuBar(!menuBar) 
   
  }
  return (

  <>
    {(navBar? (<div className='lg:w-full md:w-full lg:h-20 md:h-20 sm:h-20 xs:h-20 bg-white text-black lg:flex lg:flex-row lg:justify-between md:flex md:flex-row md:justify-between'>
    
                      
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
  

    :(<div className='w-full h-20 bg-white text-black flex flex-row justify-between'>
      
              <div className='w-60'>
                  <img src={process.env.PUBLIC_URL + '/logo.png'} alt="Logo" />
              </div> 

              <div className='p-6' onClick={menuIconShift}>
                  {(menuLine ? menuIcon : closeIcon)} 
              </div>
          
      </div>   
      ))} 

      {(menuBar ? null : (<div className=' sm:pt-6 text-lg bg-[#AD0711] w-60'>
                  <div className='border-b border-white px-5 text-white'>Home</div>
                  <div className='border-b border-white px-5 text-white'>Products</div>
                  <div className='border-b border-white px-5 text-white'>Career</div>
                  <div className='border-b border-white px-5 text-white'>About Us</div>
                  <div className='px-5 text-white'>Contact Us</div>
     </div>)
      )}
      </>
      ) 
}
      


export default Navbar