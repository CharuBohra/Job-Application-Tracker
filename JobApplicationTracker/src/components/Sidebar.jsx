import React from 'react'
import {Link,NavLink} from 'react-router-dom'
import {MdSpaceDashboard,MdWork} from 'react-icons/md'
import {HiClipboardList} from 'react-icons/hi'

function Sidebar() {
  return (
    <div className='ml-3 h-screen overflow-auto bg-main-bg'>
        <div className='flex items-center px-4 mt-4'>
            <Link to="/" className='flex justify-center items-center gap-2'>
                <MdWork className='text-2xl text-slate-700 rounded-full'/>
                <h1 className='text-2xl font-semibold text-gray-600 tracking-tight'>TrackHire</h1>
            </Link>
        </div>
        <div className='mt-4 flex flex-col border-t border-gray-200 pt-4'>
            <NavLink
                 to="/dashboard" 
                className={({isActive})=> isActive ? 
                            'bg-gray-200 text-gray-900 flex items-center gap-3 px-4 py-3 rounded-lg mt-2 mr-3 font-semibold' :
                            'text-slate-700 hover:bg-light-gray flex items-center gap-3 px-4 py-3 rounded-lg mt-2 mr-3'
                }
            >
                <MdSpaceDashboard className='text-2xl'/>
                <span className='font-medium'>Dashboard</span>
            </NavLink>
            <NavLink 
                to="/applications" 
                className={({isActive})=> isActive ?
                             'bg-gray-200 text-gray-900 font-semibold  flex items-center gap-3 px-4 py-3 rounded-lg mt-2 mr-3' :
                            'text-gray-700 hover:bg-gray-50 hover:text-gray-600 flex items-center gap-3 px-4 py-3 rounded-lg mt-2 mr-3'}>
                <HiClipboardList className='text-2xl'/>
                <span className='font-medium'>Applications</span>
            </NavLink>
        </div>
    </div>
  )
}

export default Sidebar