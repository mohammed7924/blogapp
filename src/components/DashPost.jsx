import { Button, Modal, Table } from 'flowbite-react';
import React from 'react'
import { useState } from 'react';
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import { Link } from 'react-router-dom';

function DashPost() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='table-auto overflow-x-scroll md:mx-auto p-3 scrollbar scrollbar-track-slate-100 scrollbar-thumb-slate-300 dark:scrollbar-track-slate-700 dark:scrollbar-thumb-slate-500'>
      <>
        <Table hoverable className='shadow-md'>
          <Table.Head>
            <Table.HeadCell>Date updated</Table.HeadCell>
            <Table.HeadCell>Post image</Table.HeadCell>
            <Table.HeadCell>Post title</Table.HeadCell>
            <Table.HeadCell>Category</Table.HeadCell>
            <Table.HeadCell>Delete</Table.HeadCell>
            <Table.HeadCell>
              <span>Edit</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className='divide-y'>
            <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
              <Table.Cell>27/12/23
              </Table.Cell>
              <Table.Cell>
                <Link >
                  <img
                  src='https://i.postimg.cc/BQzzrDt8/javascript-logo.png'
                    alt='T'
                    className='w-20 h-10 object-cover bg-gray-500'
                  />
                </Link>
              </Table.Cell>
              
              <Table.Cell>
                <Link
                  className='font-medium text-gray-900 dark:text-white'
                >
                   programming language
                </Link>
              </Table.Cell>
              <Table.Cell>category</Table.Cell>
              <Table.Cell>
                <span
                  onClick={() => {
                    setShowModal(true);
                  }}
                  className='font-medium text-red-500 hover:underline cursor-pointer'
                >
                  Delete
                </span>
              </Table.Cell>
              <Table.Cell>
                <Link
                  className='text-teal-500 hover:underline'

                >
                  <span>Edit</span>
                </Link>
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
              Are you sure you want to delete this post?
            </h3>
            <div className='flex justify-center gap-4'>
              <Button color='failure' >
                Yes, I'm sure
              </Button>
              <Button color='gray' onClick={() => setShowModal(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default DashPost