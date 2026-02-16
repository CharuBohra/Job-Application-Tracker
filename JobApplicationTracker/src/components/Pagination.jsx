import React from 'react'

function Pagination({currentPage,totalPages,setCurrentPage}) {

    const handlePrev = () =>{
        if(currentPage > 1){
            setCurrentPage(currentPage-1);
        }
    };
    const handleNext = ()=>{
        if(currentPage<totalPages){
            setCurrentPage(currentPage+1);
        }
    };
    const handlePageClick = (page)=>{
        setCurrentPage(page);
    }

  return (
    <div className='flex justify-end items-center gap-2 mt-4'>
        <button 
            type="submit"
            onClick={handlePrev}
            className='bg-gray-50 border border-gray-300 rounded-md px-2 py-1 hover:border-gray-400 focus:outline-none '
        >
            Prev
        </button>
        {
            Array.from({length:totalPages},(_,index)=>{
                const page = index+1;
                return (
                    <button
                       key={page}
                       onClick={()=>handlePageClick(page)}
                       className={`bg-gray-50 border border-gray-300 rounded-md px-2 py-1 hover:border-gray-400 focus:outline-none 
                                ${page === currentPage ? "bg-gray-200 text-black" : "bg-white"}`}
                    >
                        {page}
                    </button>
                )
            })
        }
        <button 
            type="submit"
            onClick={handleNext}
            className='bg-gray-50 border border-gray-300 rounded-md px-2 py-1 hover:border-gray-400 focus:outline-none'
        >
            Next
        </button>
    </div>
  )
}

export default Pagination