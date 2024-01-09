import React from 'react'

const Industries = ({name,image}) => {
  return (
    <>
     <div className='w-56 h-72 border-2 border-[#e4e3e3] rounded-lg text-center m-4 mx-auto'>
        <div className='w-48 h-32 mx-auto border-2 mt-14 border-[#e4e3e3]'>
          {<img src={image} alt='image' />} 
        </div>
        <div className='text-2xl font-semibold w-48 mt-6'>{name}

        </div>

        

     </div>
    </>
   
  )
}

export default Industries