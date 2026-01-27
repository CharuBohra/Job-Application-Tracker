import React from 'react'
import { statusCard } from '../data/dummy';
import StatusCard from '../components/StatusCard';
import { applicationsData } from '../data/applicationsData';
import ApplicationsTable from '../components/ApplicationsTable';
import { Link } from 'react-router-dom';

function Dashboard() {
    const recentApplications = applicationsData.slice(0, 5);
  return (
    <div className='pt-4 px-6 bg-light-gray min-h-screen'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-start'>
            {statusCard.map((item)=>(
                <StatusCard
                    key={item.id}
                    {...item}
                />
            ))}
        </div>
        <div className='mt-8 max-w-7xl mx-auto'>
             <div className='flex justify-between items-center mb-4'>
                <h2 className='text-xl font-semibold text-slate-800'>Recent Applications</h2>
                <Link to="/applications" className='text-blue-600 hover:underline font-medium'>View All</Link>
            </div>
             <div className='mt-4 bg-white rounded-lg shadow-sm'>
                {/* Additional dashboard content can go here */}
                <ApplicationsTable data={recentApplications} />
            
            </div>
        </div>
    </div>
  )
}

export default Dashboard