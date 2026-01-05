import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/Admin/Sidebar'
import Navbar from '../../components/Admin/Navbar'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import { getAnnouncements } from '../../utils/localStorage'
import { deleteAnn } from '../../utils/localStorage'

const ManageAnnouncements = () => {
    const navigate = useNavigate()
    const [announcements,setAnnouncements] = useState([]);
    function deleteAnnouncement(id){
      deleteAnn(id)
      //set Announcements ki state ko change karna
      setAnnouncements(prev => (prev.filter(ann => ann.id != id)))
    }
    useEffect(()=>{
      const annnouncementData = getAnnouncements();
      setAnnouncements(annnouncementData);
    },[])
  
  return (
        <div className="bg-[#f7f5e6] w-full h-screen grid grid-cols-[20%_80%]">
            <Sidebar/>
          <div className="bg-[#f7f5e6] w-full h-screen ">
      <Navbar />
      <main className='px-10 py-5'>
        <div className="top flex justify-between items-center">
          <div className="left flex flex-col gap-0 ">
            <h2 className='text-3xl font-bold text-[#333a56]'>Manage Announcements</h2>
          </div>
         

        </div>
        <div className="bottom w-full h-fit p-8 bg-[#52658f] rounded my-5">
            <div className='uppercase font-semibold px-8 py-3 rounded text-[#e8e8e8] flex justify-between text-left bg-[#333a56]'>
                <h4 className='text-left w-1/5'>title</h4>
                <h4 className='text-left w-2/5'>Content</h4>
                <h4 className='text-left w-1/5'>created at</h4>
                <h4 className='text-left w-1/5'>action</h4>
            </div>
        {
          announcements?.length < 1 ?  <p className='text-center mt-5 text-[#e8e8e8]'>No announcements found.</p> :announcements?.map((elem,idx)=> <div  key ={idx} className='capitalize  my-3 px-8 py-3 text-[#e8e8e8] flex justify-between text-left border-b rounded-none '>
                <h4 className='text-left w-1/5'>{elem.title}</h4>
                <h4 className='text-left w-2/5'>{elem.content}</h4>
                <h4 className='text-left w-1/5 overflow-hidden '>{elem.date}</h4>
                <h4 className='text-left w-1/5 overflow-hidden font-semibold'><span className='cursor-pointer  ' onClick={()=>{navigate(`/dashboard/admin/announcements/edit/${elem.id}`)}}>Edit</span> 
                  <span className='text-[#] ml-2 cursor-pointer'
                  onClick={()=>{
                    const a = confirm("Are u sure u want to delete? ");
                    if(a){
                      deleteAnnouncement(elem.id);
                    }
                  }}
                  >Delete</span></h4>
            </div>)

        }
          
           
        </div>
      
      </main>
    </div>
</div>
  )
}

export default ManageAnnouncements