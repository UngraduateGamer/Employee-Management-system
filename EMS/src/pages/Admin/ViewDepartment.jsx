import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/Admin/Sidebar'
import Navbar from '../../components/Admin/Navbar'
import { useNavigate } from 'react-router'
import { deleteDepartment, getDepartments } from '../../utils/localStorage'

const ViewDepartment = () => {
  const navigate = useNavigate()
  const [departments, setDepartments] = useState([]);
 const [show, setShow] = useState(false);
const [selectedDept, setSelectedDept] = useState(null);

  // department ka data fetch kro 
  useEffect(() => {
    const departmentData = getDepartments();
    setDepartments(departmentData);
  }, [])

  return (
    <div className=" bg-[#f7f5e6] w-full h-screen grid grid-cols-[20%_80%]">
      <Sidebar />
      <div className="bg-[#f7f5e6] w-full h-screen ">
        <Navbar />
        <main className=' px-10 py-5 h-[90%] relative '>
          <div className="top flex justify-between items-center">
            <div className="left flex flex-col gap-0 ">
              <h2 className='text-3xl font-bold text-[#333a56]'>View Departments</h2>
            </div>


          </div>
          <div className="bottom w-full h-fit p-8 bg-[#52658f] rounded my-5">
            <div className='uppercase font-semibold px-8 py-3 rounded text-[#e8e8e8] flex justify-between text-left bg-[#333a56]'>
              <h4 className='text-left w-1/2'>Department name</h4>
              <h4 className='text-left w-1/2'>action</h4>

            </div>
            <div className='max-h-100 overflow-y-auto  '>

            {
              departments?.length < 1 ? <p className='text-center mt-5 text-[#e8e8e8]'>No department found.</p> : departments?.map((elem, idx) => (
                <div key={idx} className='capitalize   my-3 px-8 py-3 text-[#e8e8e8] flex justify-between text-left border-b rounded-none ' >
                  <h4 className='text-left w-1/2'>{elem?.data}</h4>
                  <h4 className='text-left w-1/2 overflow-hidden font-semibold'><span className='cursor-pointer  ' onClick={() => { navigate(`/dashboard/admin/departments/edit/${elem.id}`) }}>Edit</span> <span className='text-[#] ml-2 cursor-pointer'  onClick={() => {
    setSelectedDept(elem);
    setShow(true);
  }}>Delete</span></h4>
                   <div className={`${show ? "flex" : "hidden"} absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 items-center justify-center `}>
                    <div className="bg-[#e8e8e8] p-6 rounded shadow-md w-80">
                      <p className="text-[#333a56] text-center text-xl mb-4 font-semibold">
                        Are you sure you want to delete this department?
                      </p>

                      <div className="flex justify-between">
                        <button
                          className="bg-[#333a56] text-[#e8e8e8] active:scale-95 px-4 py-1 rounded"
                          onClick={() => {
                            deleteDepartment(selectedDept.id)
                            // delete ke bad popup ko hide krna hain
                            setShow(!show);
                            // state change for immidialtely rendering ui
                            setDepartments(prev=>prev.filter(dep => dep.id != selectedDept.id));
                          }}
                        >
                          Yes
                        </button>

                        <button
                          className="bg-[#52658f] text-[#e8e8e8] active:scale-95 px-4 py-1 rounded"
                          onClick={() => { setShow(!show) }}
                        >
                          No
                        </button>
                      </div>
                    </div>
                  </div>




                 
                </div>
              ))
            }
</div>


          </div>

        </main>
      </div>
    </div>
  )
}

export default ViewDepartment