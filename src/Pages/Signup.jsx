import { Button, Label, TextInput } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
        <div className='flex-1'>
        <Link to="/" className=' font-bold dark:text-white text-4xl'>
    <span   className='px-2 py-1 bg-gradient-to-r from-yellow-300  to-orange-400 rounded-lg text-white'>Tech</span>Blogs
  </Link>
  <p className='text-sm mt-5'>
    You can sign up with your email and password or with google.
  </p>
        </div>
        <div className='flex-1'>
          <form className='flex flex-col gap-4'>
            <div className=''>
              <Label value='Your username'>

              </Label>
              
              <TextInput
                  type='text'
                  placeholder='Username'
                  id='username'


               />
            </div>
            <div className=''>
              <Label value='Your Email'>

              </Label>
              
              <TextInput
                  type='email'
                  placeholder='name@company.com'
                  id='email'


               />
            </div>
            <div className=''>
              <Label value='Your Password'>

              </Label>
              
              <TextInput
                  type='password'
                  placeholder='Password'
                  id='password'


               />
            </div>
<Link to={'/sign-in'}>
              <Button gradientDuoTone='purpleToPink' type='submit'>Sign Up</Button>
  
</Link>          </form>
          <div className='flex gap-2 text-sm mt-5'>
            <span>have an account? 
</span>
<Link to='/sign-in' className='text-blue-500'>Sign In</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup