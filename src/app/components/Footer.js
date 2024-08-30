import React from 'react'
import data from './data/data'
const Footer = () => {
  return (<>
   <div className='bg-slate-800 text-white  p-4'>
  <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pl-20 pr-20'>
    {data.map((item) => (
      <div key={item.id} className=' flex text-sm items-center gap-28 '>
        
        {/* Flex applied to topClg section */}
        <div className='space-y-1 '>
          <h5 className='mb-2'>{item.tittle.topClg}</h5>
  <p>{item.subTittle.mba}</p>
  <p>{item.subTittle.be}</p>
  <p>{item.subTittle.bca}</p>
  <p>{item.subTittle.mca}</p>
  <p>{item.subTittle.mTech}</p>
  <p>{item.subTittle.ma}</p>
  <p>{item.subTittle.ba}</p>
  <p>{item.subTittle.medical}</p>

        </div>

        {/* Flex applied to topExam section */}
        <div className='space-y-1 '>
          <h5 className='mb-2'>{item.tittle.topExam}</h5>
          <p>{item.subTittle.cat}</p>
          <p>{item.subTittle.gate}</p>
          <p>{item.subTittle.jee}</p>
          <p>{item.subTittle.neet}</p>
          <p>{item.subTittle.xat}</p>
          <p>{item.subTittle.clat}</p>
          <p>{item.subTittle.mat}</p> 
        </div>

        <div className=' space-y-1'>
          <h5 className='mb-2'>{item.tittle.study}</h5>
          <p>{item.subTittle.canada}</p>
          <p>{item.subTittle.usa}</p>
          <p>{item.subTittle.uk}</p>
          <p>{item.subTittle.ukraine}</p>
          <p>{item.subTittle.germany}</p>
          <p>{item.subTittle.australia}</p>
          <p>{item.subTittle.italy}</p> 
          <p>{item.subTittle.ireland}</p> 
        </div>

        <div className='space-y-1 '>
          <h5 className='mb-2'>{item.tittle.quick}</h5>
          <p>{item.subTittle.about}</p>
          <p>{item.subTittle.contact}</p>
          <p>{item.subTittle.join}</p>
          <p>{item.subTittle.advertising}</p>
          <p>{item.subTittle.visual}</p> 
        </div>

        <div className='space-y-1 '>
          <h5 className='mb-2'>{item.tittle.topUniversity}</h5>
          <p>{item.subTittle.cusat}</p>
          <p>{item.subTittle.mnitjaipur}</p>
          <p>{item.subTittle.nittrichy}</p>
          <p>{item.subTittle.tezpur}</p>
          <p>{item.subTittle.anna}</p>
          <p>{item.subTittle.dtu}</p>
          <p>{item.subTittle.nit}</p> 
          <p>{item.subTittle.puchd}</p> 
        </div>

        <div className='space-y-1 '>
          <p>{item.subTittle.jaypee}</p>
          <p>{item.subTittle.doon}</p>
          <p>{item.subTittle.fms}</p>
          <p>{item.subTittle.nit}</p>
          <p>{item.subTittle.vmou}</p>
          <p>{item.subTittle.vidyasagar}</p>
        </div>
        
      </div>
    ))}
  </div>
  <div className='flex items-center justify-between pl-20 pr-20 p-2'>
    <div className='flex gap-4'>
<img src='button.png'/>
<img src='button2.png'/>
    </div>
    <div  className='flex gap-4'>
    <img src='youtube.png'/>
    <img src='thread.png'/>
    <img src='linkdin.png'/>
    <img src='instragram.png'/>
    <img src='facebook.png'/>
    </div>
  </div>
  <div className='flex items-center text-sm justify-between pl-20 pr-20 p-2'>
    <div>
<p>Term&Condition |Privacy Policy</p>
    </div>
    <div className='flex gap-1'>
      <img src='./copy.png' />
<p>College DirectoryAllRight Reserved</p>
    </div>
  </div>
</div>

        </>
  )
}

export default Footer
