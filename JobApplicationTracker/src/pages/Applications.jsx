import React from 'react'
import { applicationsData } from '../data/applicationsData'
import ApplicationsTable from '../components/ApplicationsTable'

function Applications() {
  return (
    <div className='pt-4 px-6 bg-light-gray min-h-screen'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='text-xl font-semibold text-slate-800'>All Applications</h2>
        <div className='mt-4 bg-white rounded-lg shadow-sm'>
          <ApplicationsTable data={applicationsData} />
        </div>
      </div>
    </div>
  )
}

export default Applications