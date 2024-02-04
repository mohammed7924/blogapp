import React from 'react'
import DashComment from '../components/DashComment'
import DashPost from '../components/DashPost'
import DashProfile from '../components/DashProfile'
import DashSideBar from '../components/DashSideBar'
import DashBoardComp from '../components/DashBoardComp'
import DashUsers from '../components/DashUsers'

DashBoardComp
function Dashboard() {
  return (
    <div className='min-h-screen flex flex-col md:flex-row'>
      <div className='md:w-56'>
        {/* Sidebar */}
        <DashSideBar />
      </div>
      {/* profile... */}
      <DashProfile />
      {/* posts... */}
      <DashPost />
      {/* users */}
       <DashUsers />
      {/* comments  */}
      <DashComment />
      {/* dashboard comp */}
      <DashBoardComp />
    </div>
  )
}

export default Dashboard