import React from 'react'
import { useLocation } from 'react-router-dom'
import { MdKeyboardArrowDown } from 'react-icons/md';
import avatar2 from '../data/avatar2.jpg'

function Navbar() {
    const location = useLocation();
    let pagetitle = '';

    if (location.pathname === '/' || location.pathname === '/dashboard') {
        pagetitle = 'Dashboard';
    } else if (location.pathname === '/applications') {
        pagetitle = 'Applications';
    }

    const handleClick = (component) => {
        // Handle click events for navbar components
        console.log(`${component} clicked`);
    };

    return (
    <div className='flex justify-between items-center h-14 p-2 relative bg-main-bg border-b border-gray-200'>
        <h1 className='text-xl font-semibold text-gray-900'>{pagetitle}</h1>
        <div 
            className='flex items-center gap-2 cursor-pointer px-2 py-1 hover:bg-light-gray rounded-lg'
            onClick={()=>handleClick('userProfile')}    
        >
            <img
                className='rounded-full w-8 h-8 object-cover border border-gray-300'
                src={avatar2}
                alt='user-profile'
            />
            <span className='text-gray-700 font-semibold text-sm ml-1'>Charu Bohra</span>
            <MdKeyboardArrowDown className='text-gray-700 text-lg'/>
        </div>
    </div>
  )
}

export default Navbar