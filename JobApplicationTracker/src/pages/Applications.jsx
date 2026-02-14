import React, { useState } from 'react'
import ApplicationsTable from '../components/ApplicationsTable'
import ApplicationModal from '../components/ApplicationModal';
import ConfirmDeleteModal from '../components/ConfirmDeleteModal';
import {IoMdSearch} from 'react-icons/io'
import { useApplicationContext } from '../contexts/ApplicationContext';

function Applications() {
  const {applications,addApplication,editApplication,deleteApplication,sortedApplications} = useApplicationContext();

  const [isModalOpen,setIsModalOpen] = useState(false);
  const [selectedApplication,setSelectedApplication] = useState(null);
  const [isConfirmOpen,setIsConfirmOpen] = useState(false);
  const [applicationToDelete,setApplicationToDelete] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  const processedApplications = sortedApplications
  .filter(app => 
     statusFilter === 'All' || app.status === statusFilter
  )
  .filter(app =>
      app.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.position.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEdit = (application) => {
    setSelectedApplication(application);
    setIsModalOpen(true);
  }

  const confirmDelete = () => {
    deleteApplication(applicationToDelete.id);
    setIsConfirmOpen(false);
    setApplicationToDelete(null);
  }
  const handleDelete = (application) => {
    setIsConfirmOpen(true);
    setApplicationToDelete(application);
  }

 const handleSave = (formData) => {
  if (selectedApplication) {
    // EDIT
    editApplication({ ...selectedApplication, ...formData });
  } else {
     const newApplication = {
      id: applications.length
        ? Math.max(...applications.map(a => a.id)) + 1
        : 1,
      ...formData,
    };

    addApplication(newApplication);
  }

  setIsModalOpen(false);
  setSelectedApplication(null);
};

  return (
    <div className='pt-4 px-6 bg-light-gray min-h-screen'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex justify-between items-center' >
          <h2 className='text-xl font-semibold text-slate-800'>All Applications</h2>
          <div className='flex gap-3 items-center bg-gray-50 p-2 rounded-lg'>
            <div className='relative w-64'>
              <IoMdSearch className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400'/>
              <input 
                type='text'
                placeholder='Search by company or position...'
                className='bg-white border border-gray-300 rounded-xl w-full px-3 py-2 pl-9 transition duration-200 hover:border-gray-400 shadow-sm focus:outline-none '
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <select
              className='bg-white border border-gray-300 rounded-lg px-3 py-2 hover:border-gray-400 focus:outline-none w-32'
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Applied">Applied</option>
              <option value="Interview">Interview</option>
              <option value="Offer">Offer</option>
              <option value="Rejected">Rejected</option>
            </select>
          <button
               className=' px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition'
                onClick={() => {
                  setSelectedApplication(null);
                  setIsModalOpen(true);
                }}
          >
            Add Application
          </button>
          </div>
        </div>
        <div className='mt-4 bg-white rounded-lg shadow-sm'>
          <ApplicationsTable
              data={processedApplications} 
              onEdit={handleEdit}
              onDelete={handleDelete}
              showActions
          />
        </div>
      </div>
      <ApplicationModal
          key={selectedApplication?.id || "new"}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          initialData={selectedApplication}
          onSave={handleSave}
      />
      <ConfirmDeleteModal
          isOpen={isConfirmOpen}
          application={applicationToDelete}
          onCancel={() => {
            setIsConfirmOpen(false);
          }}
          onConfirm={confirmDelete}
      />
    </div>
  )
}

export default Applications