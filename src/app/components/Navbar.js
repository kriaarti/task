import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const Navbar = () => {
    return (
        <div className='flex justify-between  p-2 h-20  text-gray-800 bg-blue-100'>
            <div className='flex items-center ml-20  gap-2'>
                <img src='/image.png' className='w-12 h-12' />
                <p className='text-lg font-semibold  text-blue-800'>College Directory</p>
            </div>

            <div className='mr-20'>
                <div className='flex items-center space-x-8  text-end'>
                    <div className="text-sm">
                        <p className='text-yellow-500'>New</p>
                        <p>Study Materials</p>
                    </div>
                    <div className="text-sm">
                        <p className='text-yellow-500'>New</p>
                        <p>Study Materials</p>
                    </div>
                    <div className="text-sm">
                        <p className='text-yellow-500'>New</p>
                        <p>Study Materials</p>
                    </div>
                    <div className="text-sm">
                        <p className='text-yellow-500'>New</p>
                        <p>Study Materials</p>
                    </div>
                </div>

                <div className='flex items-center space-x-8 mt-1 p-1'>
                    <div className='flex items-center text-sm'>
                        <p>Colleges</p>
                        <KeyboardArrowDownIcon className='w-4 h-4' />
                    </div>
                    <div className='flex items-center text-sm'>
                        <p>Courses</p>
                        <KeyboardArrowDownIcon className='w-4 h-4' />
                    </div>
                    <div className='flex items-center text-sm'>
                        <p>Exams</p>
                        <KeyboardArrowDownIcon className='w-4 h-4' />
                    </div>
                    <div className='flex items-center text-sm'>
                        <p>News & Updates</p>
                        <KeyboardArrowDownIcon className='w-4 h-4' />
                    </div>
                    <div className='flex items-center text-sm'>
                        <p>More</p>
                        <KeyboardArrowDownIcon className='w-4 h-4' />
                    </div>
                    <div>
                        <img src='/image1.png' className='w-6 h-6' />
                    </div>
                    <div>
                        <img src='/image2.png' className='w-3 h-3' />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Navbar
