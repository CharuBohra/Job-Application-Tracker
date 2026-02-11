import React from 'react'

function ConfirmDeleteModal({isOpen,onCancel,application,onConfirm}) {
  if(!isOpen) return null;
  
    return (
    <div className='fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50'>
        <div className=' bg-white rounded-lg shadow-lg w-96 p-6 '>
            <h2 className='text-xl font-semibold text-slate-800 mb-4'>Confirm Delete</h2>
            <p className='text-gray-700 mb-6'>
                Are you sure you want to delete
                <span className='font-semibold'> {application.company} </span>
                application? This action cannot be undone.
            </p>
            <div className='flex justify-end gap-3'>
                <button
                    className='px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition'
                    onClick={onCancel}
                >
                    Cancel
                </button>
                <button
                    className='px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition'
                    onClick={onConfirm}
                >
                    Delete
                </button>
            </div>
        </div>
    </div>
   )
}

export default ConfirmDeleteModal