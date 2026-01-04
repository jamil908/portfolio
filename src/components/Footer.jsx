import React from 'react'
import { FaFacebook, FaGithubSquare, FaInstagram } from 'react-icons/fa'
import { FcContacts } from 'react-icons/fc'
import { LiaLinkedin } from 'react-icons/lia'
import { MdEmail } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='max-w-[1300px] mx-auto items-center text-center  p-6 md:p-20 text-sm md:text-lg mt-12'>
      <div className='space-y-4 items-center'>
        <h3 className='text-2xl text-gray-200 font-semibold'>Jamil Hossain</h3> <div className='flex items-center justify-center text-gray-200 w-fit mx-auto'>
          <span><FcContacts /></span>
          <a href="https://wa.me/8801781142856" target="_blank" rel="noopener noreferrer" className="ml-2 hover:underline">
            Contact: +8801781142856
          </a>
        </div>

        <div className='flex items-center text-gray-200 w-fit mx-auto'>
          <span><MdEmail /></span>
          <a href="mailto:jamilhossainrafi@gmail.com" className="ml-2 hover:underline">
            Email:jamilhossainrafi@gmail.com
          </a>
        </div>
      </div>
      <div className=' mx-auto w-fit flex text-center items-center gap-6 text-gray-400 text-4xl'>

        <Link to='https://github.com/jamil908'><FaGithubSquare className='text-blue-500' /></Link>
        <Link to='https://www.instagram.com/capatain_rafi/profilecard/?igsh=enQ4ZTJydW5lODg2'><FaInstagram className=' text-pink-500' /></Link>
        <Link to='https://www.linkedin.com/in/jamil-hossain-rafi-86780633b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'><LiaLinkedin className='text-blue-500' /></Link>
        <Link to='https://www.facebook.com/md.shaksaadi?mibextid=ZbWKwL'><FaFacebook className='text-blue-500' /></Link>

      </div>

    </div>




  )
}

export default Footer