import React from 'react'
import frontImage from '../assets/image/home2.png'
import Servicesofcompany from '../components/Servicesofcompany'

const Home = () => {
  return (
    <div>
         <div>
                <div className=' relative  mt-20'>
                    <div >
                          <img src={frontImage} alt="" className=' w-screen object-cover ' />
                          <div className=' absolute top-[40%] left-[50%] -translate-x-[50%] translate-y-0 w-full '>
                             <div className='bg-gray-500/80  text-lg text-center font-medium py-2 px-4 rounded-md uppercase w-full'>Improve YOUR Business in CLOUD SERVICES ?</div> 
                          <div className='flex items-center  justify-center w-full '>
                              <button className=" mt-2 text-lg bg-orange-400  text-white font-medium rounded-md bg-black-400 p-2">
                                Book an Appointment
                              </button>
                          </div>
                          </div>
                    </div>
                </div>
                <Servicesofcompany/>
         </div>
    </div>
  )
}

export default Home