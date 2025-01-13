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
            <h3 className='text-2xl text-gray-200 font-semibold'>Jamil Hossain</h3>
            <div className='flex items-center justify-center  w-fit mx-auto'><span><FcContacts></FcContacts></span><p>contact : 01781142856</p></div>
            <div className='flex items-center w-fit mx-auto'><span><MdEmail></MdEmail></span><p>email : md3711451@gmail.com</p></div>
            <div className=' mx-auto w-fit flex text-center items-center gap-6 text-gray-400 text-4xl'>
               
                <Link to='https://github.com/jamil908'><FaGithubSquare /></Link>
                <Link to='https://www.instagram.com/capatain_rafi/profilecard/?igsh=enQ4ZTJydW5lODg2'><FaInstagram /></Link>
                <Link to='https://www.linkedin.com/in/jamil-hossain-rafi-86780633b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'><LiaLinkedin /></Link>
                <Link to='https://www.facebook.com/md.shaksaadi?mibextid=ZbWKwL'><FaFacebook /></Link>
              
            </div>

        </div>

       
        
    </div>
  )
}

export default Footer