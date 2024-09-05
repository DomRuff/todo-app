import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {

  if (!isOpen) return null;


  return (

    // Display the modal
    <div className="fixed inset-0 flex items-center justify-center z-50">

      {/* Display the background overlay and closing functionality*/}
      <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}>

      </div>
        
      {/* Display the modal content */}
      <div className="bg-white rounded-lg shadow-lg p-6 z-10">
        {children}

        {/* Display the close button */}
        <div className='flex justify-end mt-4'>
          <button
            onClick={onClose}
            className="mt-4 bg-red-500 hover:bg-red-600 text-white rounded-lg px-4 py-2"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;