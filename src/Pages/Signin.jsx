import React from 'react'
import OAuth from '../components/OAuth'
import { Link } from 'react-router-dom'
import {  Button, Label,  TextInput } from 'flowbite-react'

function Signin() {
  return (
    <div className='min-h-screen mt-20'>
    <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
      {/* left */}
      <div className='flex-1'>
        <Link to='/' className='font-bold dark:text-white text-4xl'>
          <span className='px-2 py-1 bg-gradient-to-r from- from-yellow-300  to-orange-400 rounded-lg text-white'>
            Tech
          </span>
          Blogs
        </Link>
        <p className='text-sm mt-5'>
          This is a demo project. You can sign in with your email and password
          or with Google.
        </p>
      </div>
      {/* right */}

      <div className='flex-1'>
        <form className='flex flex-col gap-4' >
          <div>
            <Label value='Your email' />
            <TextInput
              type='email'
              placeholder='name@company.com'
              id='email'
            />
          </div>
          <div>
            <Label value='Your password' />
            <TextInput
              type='password'
              placeholder='**********'
              id='password'
            />
          </div>
         <Link to={'/'}>
            <Button
              gradientDuoTone='purpleToPink'
              type='submit'
            >
               
                <>
                </>
               
                Sign In
              
            </Button>
         </Link>
          <OAuth />
        </form>
        <div className='flex gap-2 text-sm mt-5'>
          <span>Dont Have an account?</span>
          <Link to='/sign-up' className='text-blue-500'>
            Sign Up
          </Link>
        </div>
          
      </div>
    </div>
  </div>

  )
}

export default Signin