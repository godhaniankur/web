import React from 'react'
import { MdOutlineMail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { works } from '../assets/navbar';
import { GrLocationPin } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div >
        <div className=' bg-footerUrl bg-cover py-10'>
             <div className='w-11/12 flex flex-col bg-white/75 rounded-md mx-auto'>
               {/* company address  */}
                 <div className='flex max-sm:flex-col justify-around max-sm:px-3 gap-y-3 w-full mt-10 mb-10'>
                 <div>
                        <div className='flex flex-col gap-y-5'>
                            <h1 className='text-lg font-semibold leading-10'>Weblogiance Technologies</h1>
                            <div className='flex flex-col gap-y-2'>
                                <span className='flex items-center gap-x-2'>
                                    <MdOutlineMail size={20} color='white'/>
                                    <p>weblogiance@gmail.com</p>
                                </span>
                                <span className='flex items-center gap-x-2 '>
                                    <p><IoMdCall size={20} color='white'/></p>
                                    <p>+91 98254 94753</p>
                                </span>
                            </div>
                        <div>
                                <h1 className='flex items-center text-lg font-semibold gap-x-2 leading-10'><GrLocationPin size={20} color='white'/>INDIA</h1>
                                <p className=' capitalize text-sm w-[75%] px-5'>C-2 1024 Pragati IT Park near sudama chowk mota varachha surat</p>
                        </div>
                    </div>
                 </div>
                 <div className='flex flex-col gap-y-5'>
                     <div>
                           <h1 className=' text-lg font-semibold'>Company</h1>
                           <div className='flex flex-col gap-y-2 mt-2'>
                                <p>About Us</p>
                                <p>Leadership Team</p>
                                <p>Careeres</p>
                                <p>Contact Us</p>
                           </div>
                     </div>
                     <div>
                          <h1 className=' text-lg font-semibold'>Resources</h1>
                          <div className='flex flex-col gap-y-2 mt-2'>
                              <p>Blogs</p>
                              <p>Portfolio</p>
                          </div>
                     </div>
                 </div>
                 <div>
                      <h1 className=' text-lg font-semibold'>Services</h1>
                       <div className='flex flex-col gap-y-2 mt-2'>
                           {
                               works.map((tech)=>(
                                   <p>{tech}</p>
                               ))
                           }
                       </div>
                 </div>
                 </div>
                 <div className='w-[98%] mx-auto border-gray-700 border mb-5'/>
                    <div className='flex max-sm:flex-col w-full items-center px-10 max-sm:px-3  justify-between p-2'>
                           <div className='flex max-sm:flex-col gap-x-5 gap-y-3 max-sm:mb-2 w-full items-center max-sm:text-sm '>
                                <p>© 2024 Weblogiance Technologies. All Rights Reserved.</p>
                                <p>Terms of Use</p>
                                <p>Privacy Policy</p>
                                <p>Quality Policy</p>
                           </div>
                           <div className='flex gap-x-3 items-center cursor-pointer'>
                                <FaLinkedin  size={30} className=' hover:text-blue-800'/>
                                <FaSquareXTwitter size={30} className=' hover:text-gray-800'/>
                                <FaSquareInstagram size={30} className=' hover:text-orange-900'/>
                           </div>
                    </div>
             </div>
        </div>
    </div>
  )
}

export default Footer