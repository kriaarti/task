import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const Popular = () => {
  return (
    <div className='p-10 ml-10 mr-10 items-center'>
      <h6 className='mb-6'>Popular States</h6>
      {/* <div className='p-6'> */}
      <img src='./popular.png' className='w-[1143px] h-[655px]'/>
      {/* </div> */}
      <div className='flex items-center justify-center mt-6'>
  <div className='bg-blue-800 text-sm rounded-sm p-2 text-white w-36 flex items-center justify-between'>
    <button>ExploreAllStates</button>
    <ArrowForwardIosIcon className='w-4 h-4' />
  </div>
</div>
<h6 className='p-4'> Top Colleges</h6>
<div className='flex items-center gap-4 p-2 ml-8'>
  <p className='text-sm'>Filter</p>
  <img src='filter.png' alt='Filter Icon' className='w-4 h-4 ml-2' />
  
  <div className='flex items-center space-x-6'>
    <div className='text-sm rounded-2xl bg-pink-200 p-2 w-10'>
      <button>All</button>
    </div>

    <div className='flex space-x-6'>
      <button className='text-sm rounded-2xl bg-gray-300 p-3 w-fit'>BE/B.Tech</button>
      <button className='text-sm rounded-2xl bg-gray-300 p-3 w-fit'>MBA/PGDM</button>
      <button className='text-sm rounded-2xl bg-gray-300 p-3 w-fit'>MBBS</button>
      <button className='text-sm rounded-2xl bg-gray-300 p-3 w-fit'>ME/M.Tech</button>
      <button className='text-sm rounded-2xl bg-gray-300 p-3 w-fit'>B.Sc</button>
      <button className='text-sm rounded-2xl bg-gray-300 p-3 w-fit'>BA</button>
      <button className='text-sm rounded-2xl bg-gray-300 p-3 w-fit'>B.Com</button>
      <button className='text-sm rounded-2xl bg-gray-300 p-3 w-fit'>BCA</button>
      <button className='text-sm rounded-2xl bg-gray-300 p-3 w-fit'>BBA/BBM</button>
    </div>
  </div>

</div>

  <div className='flex items-center justify-center gap-4 mt-4'>
  <img src='./college.png'/>
  <img src='./college.png'/>
  </div>
    </div>
  )
}

export default Popular
