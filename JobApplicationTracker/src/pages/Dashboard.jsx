import React from 'react'
import { statusCard } from '../data/dummy';
import StatusCard from '../components/StatusCard';

function Dashboard() {
  return (
    <div className='px-6 bg-light-gray dark:bg-secondary-dark-bg min-h-screen'>
        <div className='flex flex-wrap gap-6 justify-items-start'>
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