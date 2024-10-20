import React from 'react';
import Link from 'next/link';
import { BsFillSendFill, BsTelephoneOutbound } from 'react-icons/bs';
import { BiMessageDetail } from 'react-icons/bi'; 

const Footer = () => {
  return (
    <footer className='mt-16'>
        <div className="container mx-auto px-4">
        <Link href="/" className="font-black text-[#FFD700]">
        King's Hotel
        </Link>
        
        <h4 className='font-semibold text-[40px] py-6'>Contact</h4>

        <div className="flex flex-wrap gap-16 items-center justify-between">
            <div className="flex-1">
                <p>123 Road</p>
                <div className="flex items-center py-4">
                    <BsFillSendFill />
                    <p className="ml-2">codewithari</p>
                </div>
                <div className="flex items-center py-4">
                    <BsTelephoneOutbound />
                    <p className="ml-2">000-000-000</p>
                </div>
                <div className="flex items-center pt-4">
                    <BiMessageDetail />
                    <p className="ml-2">details</p>
                </div>
            </div>
            <div className="flex-1 md:text-right">
              <p className="pb-4">Our Story</p>
              <p className="pb-4">Get in Touch</p>
              <p className="pb-4">Our Privacy Committment</p>
              <p className="pb-4">Terms of Service</p>
              <p>Customer Assistance</p>
            </div>
            <div className="flex-1 md:text-right">
              <p className="pb-4">Dining Experience</p>
              <p className="pb-4">Wellness</p>
              <p className="pb-4">Fitness</p>
              <p className="pb-4">Sports</p>
              <p className="pb-4">Events</p>
            </div>
        </div>
            
        </div>
      
    </footer>
  )
}

export default Footer
