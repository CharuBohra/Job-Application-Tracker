import React from 'react'
import { statusCard } from '../data/dummy';
import StatusCard from '../components/StatusCard';

function Dashboard() {
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
    </div>
  )
}

export default Dashboard