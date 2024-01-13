import React, { useState } from 'react';

interface ModalProps {
    isOpen: boolean,
    onClose: () => void
}

export default function FormModal({ isOpen, onClose }:ModalProps) {
    const handleBackdropClick = (e:React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      };

  return (
    <div className={`fixed z-10 inset-0 overflow-y-auto ${!isOpen && 'hidden'}`}>
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div onClick={handleBackdropClick} className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
        {/* Modal Panel */}
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
        <div className="inline-block align-bottom bg-gray-900 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle md:w-9/12">
          <div className="bg-gray-900 px-4 pt-5 pb-4 sm:p-6 sm:pb-4 w-full">
            <div className="sm:flex sm:items-start w-full">
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                <h3 className="text-4xl leading-6 font-medium text-white text-center py-10" id="modal-title">Contact</h3>
                <div className="mt-2">
                  {/* Your Form Here */}
                  <form className="flex w-full gap-8 flex-wrap">
                    {/* Form fields */}
                    <input type="text" required placeholder="Your Name" className="my-2 p-2 border border-gray-300 rounded-md w-full md:w-4/12" />
                    <input type="text" placeholder="Your Phone" className="my-2 p-2 border border-gray-300 rounded-md w-full md:w-4/12" />
                    <input type="email" required placeholder="Your Email" className="my-2 p-2 border border-gray-300 rounded-md w-full w-6/12" />
                    <textarea placeholder="Your Message" className="my-2 p-2 border border-gray-300 rounded-md w-full"></textarea>
                    <button type="submit" className="px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600 mx-auto w-9/12 md:w-4/12">Send</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-900 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button onClick={onClose} className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
