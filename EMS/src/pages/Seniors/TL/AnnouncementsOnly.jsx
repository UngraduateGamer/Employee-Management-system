import React, { useEffect, useState } from 'react'
import Sidebar from '../../../components/Seniors/SideBar';
import Navbar from '../../../components/Seniors/Navbar';
import { getAnnouncements } from '../../../utils/localStorage';

const AnnouncementsOnly = () => {
    const [announcements ,setAnnouncements]= useState([]);
    useEffect(()=>{
        // fetch only admin announcements
        let announcementData = getAnnouncements().filter(ann => ann.role == 'admin');
        setAnnouncements(announcementData);
    },[])
    return (
        <div className="bg-[#f7f5e6] w-full h-screen grid grid-cols-[20%_80%]">
            <Sidebar />
            <div className="bg-[#f7f5e6] w-full h-screen ">
                <Navbar />
                <main className='px-10 py-5'>
                    <div className="top flex justify-between items-center">
                        <div className="left flex flex-col w-full gap-0 ">
                            <h2 className='text-3xl font-bold text-[#333a56]'>Announcements</h2>
                            {/* <div className="msg py-4 w-full px-3 my-4 rounded bg-[#52658f] text-[#e8e8e8]">
                                Clocked in successfully.    
                            </div> */}
                            
                        </div>


                    </div>
                    <div className="bottom w-full h-fit p-8 bg-[#52658f] rounded my-5 text-[#e8e8e8]">
                                
                            <h2 className='text-lg mb-3 bg-[#333a56] p-3 rounded'>All Announcement (created by admin)</h2>


                        {
                            announcements?.length < 1 ? <p className='text-center mt-5 text-[#e8e8e8]'>No announcements found.</p> : announcements.map((elem,idx)=>(
                                <div key={idx} className='flex flex-col gap-1 bg-[#f7f5e6] text-[#333a56] rounded mb-3 p-3 '>
                                <h2 className='text-2xl font-semibold capitalize'>{elem?.title}</h2>
                          <p className='text-sm'>{elem?.date}</p>
                          <p>{elem?.content}</p>
                                </div>
                            ))
                        }
                          

                      

                        
                    </div>

                </main>
            </div>
        </div>
    )
}

export default AnnouncementsOnly