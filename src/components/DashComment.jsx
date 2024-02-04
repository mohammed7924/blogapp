import React, { useState } from 'react'
import { Modal, Table, Button } from 'flowbite-react';
import { HiOutlineExclamationCircle } from 'react-icons/hi';

function DashComment() {
    const [showModal, setShowModal] = useState(false);
  return (
    <div className='table-auto overflow-x-scroll md:mx-auto p-3 scrollbar scrollbar-track-slate-100 scrollbar-thumb-slate-300 dark:scrollbar-track-slate-700 dark:scrollbar-thumb-slate-500'>
      {/* {currentUser.isAdmin && comments.length > 0 ? ( */}
        <>
          <Table hoverable className='shadow-md'>
            <Table.Head>
              <Table.HeadCell>Date updated</Table.HeadCell>
              <Table.HeadCell>Comment content</Table.HeadCell>
              <Table.HeadCell> likes</Table.HeadCell>
              <Table.HeadCell>PostId</Table.HeadCell>
              <Table.HeadCell>UserId</Table.HeadCell>
              <Table.HeadCell>Delete</Table.HeadCell>
            </Table.Head>
            
              <Table.Body className='divide-y' >
                <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
                  <Table.Cell>30/1/24
                  </Table.Cell>
                  <Table.Cell>java Script</Table.Cell>
                  <Table.Cell>7</Table.Cell>
                  <Table.Cell>234</Table.Cell>
                  <Table.Cell>#32</Table.Cell>
                  <Table.Cell>
                    <span style={{color:'red'}}
                    onClick={() => {
                      setShowModal(true);
                      // setPostIdToDelete(post._id);
                    }}
                      classNamessName='font-medium  hover:underline cursor-pointer'
                    >
                      Delete
                    </span>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            
          </Table>
          
            <button
              className='w-full text-teal-500 self-center text-sm py-7'
            >
              Show more
            </button>
        
        </>
      

      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        popup
        size='md'
      >
        <Modal.Header />
        <Modal.Body>
          <div className='text-center'>
            <HiOutlineExclamationCircle className='h-14 w-14 text-gray-400 dark:text-gray-200 mb-4 mx-auto' />
            <h3 className='mb-5 text-lg text-gray-500 dark:text-gray-400'>
              Are you sure you want to delete this comment?
            </h3>
            <div className='flex justify-center gap-4'>
              <Button color='failure' >
                Yes, I'm sure
              </Button>
              <Button color='gray' >
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default DashComment