import React from 'react'

function StatusCard({title,icon,count,iconColor,iconBgColor}) {
  return (
    <div className="w-full flex flex-col items-start p-4 bg-white rounded-lg shadow-md space-y-1 hover:shadow-lg transition-shadow duration-300">
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${iconBgColor} ${iconColor} text-3xl mb-2`}>
            {icon}
        </div>
        <div className="space-y-2 mt-2 p-2">
            <p className="text-2xl font-semibold text-gray-800">{count}</p>
            <h3 className="text-lg font-medium text-gray-600">{title}</h3>
        </div>
    </div>
  )
}

export default StatusCard