import React from 'react'

const Badge = ({item,picture}) => {
  return (
    <>
    <div className='w-72 h-80 border-2 border-gray-100 rounded-lg shadow-xl mx-auto mt-12'>
        <div className='mx-auto text-xl pt-5 w-36 h-20 text-center text-gray-700'>{item}</div>
        <div className='w-48 mx-auto border-2 border-gray-100'>
            <img src= {picture} alt='img' />
        </div>
        <div className='w-32 h-10 mt-5 border-2 border-[#AD0711] mx-auto rounded-3xl text-lg text-[#AD0711] pt-1'>View More

        </div>
    
    </div>
    </>
  )
}

export default Badge