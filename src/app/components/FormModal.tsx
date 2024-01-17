import React, { useContext, useState, FormEvent} from 'react';
import nodemailer from 'nodemailer';
import type { NextApiRequest, NextApiResponse } from 'next';
import Ctx from '../contexts/ctx';

export default function FormModal() {

  const {handleCloseModal, handleOpenModal, isModalOpen, setModalOpen} = useContext(Ctx)

  const [formData, setFormData] = useState({name: "", phone: "", email: "", message: ""})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true)
    const response = await fetch('/api/route', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if(response.ok){
      setIsSubmitting(false)
      setIsSubmitted(true)
    }

    // handle the response
  };

  const handleBackdropClick = (e:React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (e.target === e.currentTarget) {
        handleCloseModal();
        }
      };

  return (
    <div className={`fixed z-10 inset-0 overflow-y-auto ${!isModalOpen && 'hidden'}`}>
      <div className="flex items-center justify-center h-screen md:max-h-screen py-4 px-4 text-center sm:block sm:p-0">
        <div onClick={handleBackdropClick} className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
        {/* Modal Panel */}
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
        <div className="inline-block align-bottom bg-gray-900 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle md:w-9/12 pb-10 mx-5">
          <div className="bg-gray-900 px-4 pt-5 pb-4 p-6 w-full">
            <div className=" w-full flex flex-col items-end">
            <div className="bg-gray-900 px-4 py-3 ">
            <button onClick={handleCloseModal} className="mt-3 rounded-md border border-gray-300 px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
              X
            </button>
          </div>
              <div className="text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
              {!isSubmitted ? (
                <>
                  <h3 className="text-4xl leading-6 font-medium text-white text-center pt-5 pb-10" id="modal-title">Contact</h3>
                  <div className="mt-2">
                    {/* Your Form Here */}
                    <form className="flex w-full gap-8 flex-wrap" onSubmit={handleSubmit}>
                      {/* Form fields */}
                      <div className="w-full md:w-5/12">
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" id="name" value={formData.name} required placeholder="John Doe" className="my-2 p-2 border border-gray-300 text-black rounded-md w-full" onChange={handleInputChange} />
                      </div>
                      <div className="w-full md:w-5/12">
                        <label htmlFor="phone">Phone:</label>
                        <input type="text" name="phone" id="phone" value={formData.phone} placeholder="(888) 888-8888" className="my-2 p-2 border border-gray-300 text-black rounded-md w-full" onChange={handleInputChange}/>
                      </div>
                      <div className="w-full md:w-8/12">
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" id="email" value={formData.email} required placeholder="johndoe@gmail.com" className="my-2 p-2 border border-gray-300 text-black rounded-md w-full" onChange={handleInputChange}/>
                      </div>
                      <div className="w-full">
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" value={formData.message} placeholder="Tell me something good!" className="my-2 p-2 border border-gray-300 text-black rounded-md w-full"onChange={handleInputChange}></textarea>
                      </div>
  
                      <button type="submit" className="px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600 mx-auto w-9/12 md:w-4/12">{isSubmitting ? 'Sending...' : "Send" }</button>
                    </form>
                  </div>
                </>
              )
              : (
                <>
                <h2 className="mb-10">Form Submission Successful</h2>
                <h3>Thank you for contacting me! I will be in touch soon!</h3>
                </>
              )
              
              }

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
