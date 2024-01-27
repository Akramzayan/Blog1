import React from 'react'
import { FaFacebook } from "react-icons/fa6";
import { FiTwitter } from "react-icons/fi";
import { FcReddit } from "react-icons/fc";
import { FaWhatsapp } from "react-icons/fa";




const SocialShareButtons = ({url,title}) => {
  return (
    <div className='w-full flex justify-between'>
      <a target='_blank'rel='noreferrer' href="https://www.facebook.com">
        <FaFacebook className='text-[#3b5998] w-12 h-auto'/>
      </a>
      <a target='_blank'rel='noreferrer' href={`https://twitter.com/intent/tweet?url=${url}`} >
        <FiTwitter className='text-[#00acee] w-12 h-auto'/>
      </a>
      <a target='_blank'rel='noreferrer' href={`https://www.reddit.com/submit?url=${url}&title=${title}`}>
        <FcReddit className='text-red-200 w-12 h-auto'/>
      </a>
      <a target='_blank'rel='noreferrer' href={`hhtps://api.whatsapp.com/send/?text=${url}`}>
        <FaWhatsapp className='text-[#25D366] w-12 h-auto'/>
      </a>
    </div>
  )
}

export default SocialShareButtons
