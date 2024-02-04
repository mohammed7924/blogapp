import React from 'react'
import CallToAction from '../components/CallToAction';
import PostCard from '../components/PostCard';
import { Button, Spinner } from 'flowbite-react';
import { Link } from 'react-router-dom';
import CommentSection from '../components/CommentSection';

function Post() {
  return (
    <main className='p-3 flex flex-col max-w-6xl mx-auto min-h-screen'>
    <h1 className='text-3xl mt-10 p-3 text-center font-serif max-w-2xl mx-auto lg:text-4xl'>
     post title
    </h1>
    <Link
      to={'/search'}
      className='self-center mt-5'
    >
      <Button color='gray' pill size='xs'>
        post &category
      </Button>
    </Link>
    <img
      src='https://i.postimg.cc/BQzzrDt8/javascript-logo.png'
      alt=''
      className='mt-10 p-3 max-h-[600px] w-full object-cover'
    />
    <div className='flex justify-between p-3 border-b border-slate-500 mx-auto w-full max-w-2xl text-xs'>
      <span>Date</span>
      <span className='italic'>
     mins read
      </span>
    </div>
    <div
      className='p-3 max-w-2xl mx-auto w-full post-content'
       
    >post content </div>
    <div className='max-w-4xl mx-auto w-full'>
      <CallToAction />
    </div>
    <CommentSection postId='post id' />

    <div className='flex flex-col justify-center items-center mb-5'>
      <h1 className='text-xl mt-5'>Recent articles</h1>
      <div className='flex flex-wrap gap-5 mt-5 justify-center'>
        <PostCard />
      </div>
    </div>
  </main>
  )
}

export default Post