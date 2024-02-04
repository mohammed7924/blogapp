import { Button } from 'flowbite-react'
import React from 'react'
import { AiFillGoogleCircle } from 'react-icons/ai';

Button
function OAuth() {
  return (
    <div>
        <Button type='button' gradientDuoTone='pinkToOrange'>
        <AiFillGoogleCircle className='w-6 h-6 mr-2'/>
        Continue with Google
    </Button>
    </div>
  )
}

export default OAuth