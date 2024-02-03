import React, { useState } from 'react'
import { stables } from '../constants'
import {HiOutlineCamera} from "react-icons/hi"

import {createPortal} from 'react-dom'
import CropEasy from './crop/cropEasy'






const ProfilePicture = ({avatar}) => {
  const [photo,setPhoto] = useState(null) 

  const [openCrop,setOpenCrop] = useState(false)
  const handleFileChange =(e) => {
    const file = e.target.files[0];
    setPhoto({url : URL.createObjectURL(file),file});
    setOpenCrop(true)

  }
  return (
    <>
    {openCrop && createPortal(<CropEasy photo={photo} setOpenCrop={setOpenCrop}/>,document.getElementById('portal')) } 
    <div className='w-full flex items-center gap-x-4'> 
      <div className='relative h-20 w-20 rounded-full outline outline-offset-2 outline-1 lutline-primary overflow-hidden '>
        <label htmlFor="profilePicture" className='cursor-pointer absolute inset-0 rounded-full bg-transparent'>
               {avatar ? (
                <img src={stables.UPLOAD_FOLDER_BASE_URL + avatar} alt="profile" className='w-full h-full object-cover' />
               ) : (
                <div className='w-fullh-full bg-blue-50/50 flex justify-center items-center'>
                    <HiOutlineCamera className='w-7 h-auto text-primary'/>
                </div>
               )}
            <input type="file" className='sr-only' id='profilePicture' onChange={handleFileChange}/>{/*sr-only == hidden*/}
        </label>
      </div>
      <button type='button' className='border bored-red-500 rounded-lg px-4 py-2 text-red-500'>
        Delete
      </button>
    </div>
    </>
    
  )
}

export default ProfilePicture
