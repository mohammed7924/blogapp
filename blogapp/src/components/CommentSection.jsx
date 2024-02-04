import React from 'react'
import {  Button,  Textarea } from 'flowbite-react';
import { Link } from 'react-router-dom';
import Comment from './Comment';

function CommentSection() {
  return (
    <div className='max-w-2xl mx-auto w-full p-3'>
   
      <div className='flex items-center gap-1 my-5 text-gray-500 text-sm'>
        <p>Signed in as:</p>
        <img
          className='h-5 w-5 object-cover rounded-full'
          src='https://i.postimg.cc/m2MHNWxP/profile-Upload.webp'
          alt=''
        />
        <Link
          to={'/dashboard'}
          className='text-xs text-cyan-600 hover:underline'
        >
         Username
        </Link>
      </div>
   
      
    
      <form
        className='border border-teal-500 rounded-md p-3'
      >
        <Textarea
          placeholder='Add a comment...'
          rows='3'
          maxLength='200'
          
        />
        <div className='flex justify-between items-center mt-5'>
          <p className='text-gray-500 text-xs'>
            200 characters remaining
          </p>
          <Button outline gradientDuoTone='purpleToBlue' type='submit'>
            Submit
          </Button>
        </div>
        
      </form>

   
        <div className='text-sm my-5 flex items-center gap-1'>
          <p>Comments</p>
          <div className='border border-gray-400 py-1 px-2 rounded-sm'>
            7<p></p>
          </div>
        </div>
          <Comment
           
              
            
          />
        
      
    
   
    
  </div>
  )
}

export default CommentSection