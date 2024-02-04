import React from 'react'
import { Sidebar } from 'flowbite-react';
  import {HiUser,
HiArrowSmRight,
HiDocumentText,
HiOutlineUserGroup,
HiAnnotation,
HiChartPie,

} from 'react-icons/hi';
import { Link } from 'react-router-dom';

function DashSideBar() {
  return (
    <Sidebar className='w-full md:w-56'>
    <Sidebar.Items>
      <Sidebar.ItemGroup className='flex flex-col gap-1'>
       
          <Link to='/dashboard'>
            <Sidebar.Item
              icon={HiChartPie}
              as='div'
            >
              Dashboard
            </Sidebar.Item>
          </Link>
        
        <Link to='/dashboard'>
          <Sidebar.Item
            icon={HiUser}
z            as='div'
          >
            Profile
          </Sidebar.Item>
        </Link>
        
          <Link to='/dashboard?tab=posts'>
            <Sidebar.Item
              icon={HiDocumentText}
              as='div'
            >
              Posts
            </Sidebar.Item>
          </Link>
        
          <>
            <Link to='/dashboard'>
              <Sidebar.Item
                icon={HiOutlineUserGroup}
                as='div'
              >
                Users
              </Sidebar.Item>
            </Link>
            <Link to='/dashboard'>
              <Sidebar.Item
                icon={HiAnnotation}
                as='div'
              >
                Comments
              </Sidebar.Item>
            </Link>
          </>
        
        <Sidebar.Item
          icon={HiArrowSmRight}
          className='cursor-pointer'
        >
          Sign Out
        </Sidebar.Item>
      </Sidebar.ItemGroup>
    </Sidebar.Items>
  </Sidebar>
  )
}

export default DashSideBar