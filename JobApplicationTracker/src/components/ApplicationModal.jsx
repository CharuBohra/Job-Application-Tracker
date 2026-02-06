import React from 'react'
import { useState } from 'react'
import { FaPencilAlt } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';


function ApplicationModal({ isOpen, onClose,initialData,onSave}) {
 const [formData,setFormData] =useState({
    company: initialData ? initialData.company : '',
    position: initialData ? initialData.position : '',
    status: initialData ? initialData.status : 'Applied',
    dateApplied: initialData ? initialData.dateApplied : '',
 });


  if(!isOpen) return null;


  return (
    <div>
        <div className='fixed inset-0 bg-black bg-opacity-200 flex items-center justify-center z-50'>
            <div className='bg-white rounded-xl shadow-xl w-[420px] p-6'>
                <h2 className='text-xl font-semibold mb-5 text-slate-800'>
                    {initialData ? 'Edit Application' : 'Add Application'}
                </h2>
                <div className='mb-4'>
                    <label className='block text-sm font-medium text-gray-700 mb-1'>Company:</label>
                    <input
                       type='text'
                       className='w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
                       value={formData.company}
                       onChange={(e) => setFormData({...formData, company: e.target.value})}
                   />
                </div>
                <div className='mb-4'>
                    <label className='block text-sm font-medium text-gray-700 mb-1'>Position:</label>
                    <input
                       type='text'
                       className='w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
                       value={formData.position}
                       onChange={(e) => setFormData({...formData, position: e.target.value})}
                   />
                </div>
                <div className='mb-4'>
                    <label className='block text-sm font-medium text-gray-700 mb-1'>Status:</label>
                    <select
                       className='w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
                       value={formData.status}
                       onChange={(e) => setFormData({...formData, status: e.target.value})}
                    >
                      <option value="Applied">Applied</option>
                      <option value="Interview">Interview</option>
                      <option value="Offer">Offer</option>
                      <option value="Rejected">Rejected</option>
                    </select>
                </div>
                <div className='mb-4'>
                    <label className='block text-sm font-medium text-gray-700 mb-1'>Date Applied:</label>
                    <input
                       type='date'
                       className='w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
                       value={formData.dateApplied}
                          onChange={(e) => setFormData({...formData, dateApplied: e.target.value})}
                   />
                </div>
                <div className='flex gap-3 mt-4 justify-end'>
                    <button
                    className='px-5 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition'
                    onClick={() => onSave(formData)}
                >
                    {initialData ? 'Save Changes' : 'Add Application'}
                </button>
                <button
                    className='px-5 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition'
                    onClick={onClose}
                >
                    Close
                </button>
                </div>

            </div>
        </div>
    </div>
  )
}

export default ApplicationModal