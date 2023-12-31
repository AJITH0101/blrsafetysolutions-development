import React from 'react'


const Navbar = () => {
  return (
    <>
    <div className='lg:w-full md:w-full lg:h-24 md:h-24 bg-white  text-black flex flex-row justify-between'>

    <div className='w-64'>
    <img src={process.env.PUBLIC_URL + '/logo.png'} alt="Logo" />
    </div>  

    



    <div className='lg:flex lg:flex-row md:flex md:flex-row lg:pt-6 md:pt-6 text-lg lg:pr-8'>
    <div className='lg:px-5 md:px-5'>Home</div>
    <div className='lg:px-5 md:px-5'>Products</div>
    <div className='lg:px-5 md:px-5'>Career</div>
    <div className='lg:px-5 md:px-5'>About Us</div>
    <div className='lg:px-5 md:px-5'>Contact Us</div>
    </div>
    </div>
    </>   
  )
}

export default Navbar