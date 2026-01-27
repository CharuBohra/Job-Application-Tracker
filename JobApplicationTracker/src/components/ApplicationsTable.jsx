import React from 'react'

function ApplicationsTable({data}) {
  return (
    <div className='overflow-hidden'>
      <table className='w-full table-auto'>
        <thead className='bg-gray-50 border-b border-gray-200'>
          <tr className='text-left border-b border-gray-300 px-6 py-4'>
            <th className='px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500 border-r last:border-r-0'>Company</th>
            <th className='px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500 border-r last:border-r-0'>Position</th>
            <th className='px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500 border-r last:border-r-0'>Status</th>
            <th className='px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500 border-r last:border-r-0'>Date Applied</th>
          </tr>
        </thead>
        <tbody className='text-gray-700 '>
          {data.map((application) => (
            <tr key={application.id} className='border-b border-gray-200 hover:bg-gray-50 transition'>
              <td className='px-6 py-4 border-r last:border-r-0'>{application.company}</td>
              <td className='px-6 py-4 border-r last:border-r-0'>{application.position}</td>
              <td className='px-6 py-4 border-r last:border-r-0'>{application.status}</td>
              <td className='px-6 py-4 border-r last:border-r-0'>{application.dateApplied}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ApplicationsTable