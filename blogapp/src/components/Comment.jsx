import React from 'react'
import { FaThumbsUp } from 'react-icons/fa';
import { Button, Textarea } from 'flowbite-react';
function Comment() {
  return (
    <div className='flex p-4 border-b dark:border-gray-600 text-sm'>
    <div className='flex-shrink-0 mr-3'>
      <img
        className='w-10 h-10 rounded-full bg-gray-200'
        src='https://i.postimg.cc/m2MHNWxP/profile-Upload.webp'
        alt=''
      />
    </div>
    <div className='flex-1'>
      <div className='flex items-center mb-1'>
        <span className='font-bold mr-1 text-xs truncate'>
          User name :  user
        </span>
    
      </div>
       <>
          <Textarea
            className='mb-2'
          />
          <div className='flex justify-end gap-2 text-xs'>
            <Button
              type='button'
              size='sm'
              gradientDuoTone='purpleToBlue'
            >
              Save
            </Button>
            <Button
              type='button'
              size='sm'
              gradientDuoTone='purpleToBlue'
              outline
            >
              Cancel
            </Button>
          </div>
        </>
     
        <>
          <p className='text-gray-500 pb-2'>Content</p>
          <div className='flex items-center pt-2 text-xs border-t dark:border-gray-700 max-w-fit gap-2'>
            <button
              type='button'
              
              className='text-gray-400 hover:text-blue-500 '
                
                
               
              
            >
              <FaThumbsUp className='text-sm'   />comment likes:6
            </button>
              
                <>
                  <button
                    type='button'
                    className='text-gray-400 hover:text-blue-500'
                  >
                    Edit
                  </button>
                  <button
                    type='button'
                    className='text-gray-400 hover:text-red-500'
                  >
                    Delete
                  </button>
                </>
              
          </div>
        </>
      
    </div>
  </div>
  )
}

export default Comment