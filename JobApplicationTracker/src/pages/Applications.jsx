import React, { useState } from 'react'
import { applicationsData } from '../data/applicationsData'
import ApplicationsTable from '../components/ApplicationsTable'
import ApplicationModal from '../components/ApplicationModal';

function Applications() {
  const [applications,setApplications] = useState(applicationsData);
  const [isModalOpen,setIsModalOpen] = useState(false);
  const [isEditMode,setIsEditMode] = useState(false);
  const [selectedApplication,setSelectedApplication] = useState(null);
  const [isConfirmOpen,setIsConfirmOpen] = useState(false);
  const [applicationToDelete,setApplicationToDelete] = useState(null);

  const handleEdit = (application) => {
    setIsEditMode(true);
    setSelectedApplication(application);
    setIsModalOpen(true);
  }

  const handleDelete = (application) => {
    setApplicationToDelete(application);
    setIsConfirmOpen(true);
  }

  const handleSave = (formData) => {
    if (isEditMode) {
      setApplications(applications.map(app => app.id === selectedApplication.id ? { ...app, ...formData } : app));
    } else {
      const newApplication = {
        id: applications.length + 1,
        ...formData
      };
      setApplications([...applications, newApplication]);
    }
    setIsModalOpen(false);
    setSelectedApplication(null);
    setIsEditMode(false);
  }

  return (
    <div className='pt-4 px-6 bg-light-gray min-h-screen'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex justify-between items-center' >
          <h2 className='text-xl font-semibold text-slate-800'>All Applications</h2>
          <button
               className='mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition'
                onClick={() => {
                  setIsEditMode(false);
                  setSelectedApplication(null);
                  setIsModalOpen(true);
                }}
          >
            Add Application
          </button>
        </div>
        <div className='mt-4 bg-white rounded-lg shadow-sm'>
          <ApplicationsTable
              data={applications} 
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
          initialData={isEditMode ? selectedApplication : null}
          onSave={handleSave}
      />
    </div>
  )
}

export default Applications