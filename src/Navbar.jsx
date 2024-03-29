import React, { useEffect, useState } from 'react'
import { FiMenu } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";
import { NavLink, Link } from 'react-router-dom';
import './navbar.css'

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

  const changeColor = ()=>{
    console.log("Home Pressed");
  }


  const menuIconShift = ()=>{             //This function will switch menuicon 
  setmenuLine(!menuLine)                  //Hook to switch the icon
  setMenuBar(!menuBar)                    //Hook to switch the vertical menu bar for small screen
   
  }
  return (

  <div>
    {(navBar? (<div className='lg:w-full md:w-full lg:h-20 md:h-20 sm:h-20 xs:h-20 bg-white text-black lg:flex lg:flex-row lg:justify-between md:flex md:flex-row md:justify-between z-50'>
    
                      
                              <div className='w-60'>
                                  <img src={process.env.PUBLIC_URL + '/logo.png'} alt="Logo" />
                              </div>    

                              <div className='lg:flex lg:flex-row md:flex md:flex-row lg:pt-6 md:pt-6 text-lg lg:pr-8'>
                                <NavLink exact to='/' className='lg:px-5 md:px-5' style={({ isActive }) => ({color: isActive? "#AD0711": "#00171f"})}>Home</NavLink>                                  
                                <NavLink exact to='product' className='lg:px-5 md:px-5' style={({ isActive }) => ({color: isActive? "#AD0711": "#00171f"})}>Product</NavLink> 
                                <NavLink exact to='careers' className='lg:px-5 md:px-5' style={({ isActive }) => ({color: isActive? "#AD0711": "#00171f"})}>Careers</NavLink>  
                                <NavLink exact to='about' className='lg:px-5 md:px-5' style={({ isActive }) => ({color: isActive? "#AD0711": "#00171f"})}>About Us</NavLink>                                 
                                <NavLink exact to='contact' className='lg:px-5 md:px-5' style={({ isActive }) => ({color: isActive? "#AD0711": "#00171f"})}>Contact Us</NavLink>                             
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

      {(menuBar ? null : (<div className='pt-6 text-lg bg-[#AD0711] w-60 fixed top-0 left-0 z-50 mt-20 '>
      <Link to={'/'}><div className='border-b border-white px-5 text-white'onClick={changeColor}>Home</div></Link> 
      <Link to={'product'}><div className='border-b border-white px-5 text-white'>Products</div></Link>
      <Link to={'about'}><div className='border-b border-white px-5 text-white'>Careers</div></Link> 
      <Link to={'careers'}><div className='border-b border-white px-5 text-white'>About Us</div></Link> 
      <Link to={'contact'}><div className='border-b border-white px-5 text-white'>Contact Us</div></Link>    
     </div>)
      )}
      </div>
      ) 
}
      


export default Navbar