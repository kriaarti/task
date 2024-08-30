import React from 'react'
import admission from './data/admission'
import step from './data/step'
const Admission = () => {
    return (
        <>
            <div className='flex items-center justify-between ml-20 mr-20 '>
                <div className=''>
                    <h1 className='text-lg text-wrap mb-6'>Know your chances for<br />
                        Admission</h1>
                    <p className='text-gray-400 text-wrap text-sm'>Duis aute irure dolor inreprehenderit in voluptate velDuis aute
                        <br /> irure dolor in reprehenderit in Duis auteiruredolor in<br />
                        reprehenderit in voluptate vel Duis aute irure dolor in<br />
                        reprehenderit in Duis auteirure dolorin reprehenderitin<br />
                        voluptatevel Duis aute irure dolor in reprehenderit in</p>
                </div>
                <div className='mr-20'>
                    <img src='./admission.png' className="w-96 h-auto" />
                </div>
            </div>
            <div className='justifty-center items-center text-center mt-10'>
                <h4 className='text-[#322B57] text-lg'>Trending Exams</h4>
                <p className='text-gray-500 text-sm'>Easy Information and downloads on Exam preparation, dates, counselling, syllabus and more</p>
            </div>
            <div className=' container  flex items-center text-sm  justify-center gap-4 p-6'>
                {
                    admission.map((item) => (
                        <>
                        <div className=' bg-gray-200 rounded-md text-center items-center p-8' key={item.id}>
                            <img src={item.img} className='w-11 h-10' />
                            <p className='mt-4'>{item.title}</p>
                            </div>
                            </>

                    ))
                }
            </div>

            <div className='justifty-center items-center text-center p-4'>
                <h4 className='text-[#322B57] text-lg'> Trending Courses</h4>
                <p className='text-gray-500 text-sm'>expertise with online courses to amplify your emp</p>
            </div>
            <div className=' container  flex items-center text-sm  justify-center gap-4 p-4'>
                {
                    admission.map((item) => (
                        <div key={item.id} className="space-y-4">
                          {/* First container */}
                          <div className="bg-gray-200 rounded-md text-center items-center p-8">
                            <img src={item.img} className="w-11 h-10" />
                            <p className="mt-4">{item.title}</p>
                          </div>
                      
                          {/* Second container */}
                          <div className="bg-gray-200 rounded-md text-center items-center p-8">
                            <img src={item.img} className="w-11 h-10" />
                            <p className="mt-4">{item.title}</p>
                          </div>
                        </div>
                      ))
                      
                      
                }
            </div>
            <div className='p-4 ml-20 mr-20 mt-8 '>
                <h4 className=' text-lg'>B.Tech Admission Process 2024</h4>
                <p className='text-gray-500 text-sm'>Loremipsum dolor sit amet,consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore Ut enim ad minim veniam,quis nostrud exercitation ullamcolaboris nisi ut
                aliquip ex ea commodo con Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu Excepteur sint occaecat cupidatat non.</p>
            </div>

            <div className="flex items-center justify-center text-sm text-center ml-16 mr-16">
  {step.map((item) => (
    <div className="m-4" key={item.id}>
      <div className="p-4">
        <img src={item.img} className="w-40 mx-auto" alt={item.title} />
        <p className="mt-6 font-semibold">{item.title}</p>
        <p className="mt-2 text-gray-300">{item.text}</p>
      </div>
    </div>
  ))}
</div>

        </>
    )
}

export default Admission
