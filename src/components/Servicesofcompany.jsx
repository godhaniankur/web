import React from 'react'
import { serviceInfo } from '../assets/homeinfo'

const Servicesofcompany = () => {
  return (
    <div>
        <div>
            <div className=' w-11/12 mx-auto m-10'>
                 <h1 className=' text-4xl text-center font-bold text-[#2f36bade]'>OUR COMPANY SERVICE</h1>
                 <div className=' grid grid-cols-1 lg:grid-cols-4 gap-y-3 gap-x-3 mt-5 mb-3'>
                       {
                           serviceInfo.map((data)=>(
                              <div className='flex flex-col w-full text-center items-center justify-center mx-auto bg-white p-2 rounded-md border hover:border-dotted hover:bg-blue-500/20 transition-all duration-300 gap-y-3'>
                                   <span><data.icon size={45} color='orange'/></span>
                                   <h1 className=' text-xl w-full font-medium'>{data.header}</h1>
                              </div>
                           ))
                       }
                 </div>
            </div>
        </div>
    </div>
  )
}

export default Servicesofcompany