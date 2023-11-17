import React, { useState } from 'react';
import Modal from 'react-modal';
import { Button } from 'components';

const TestModel = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleAcceptTerms = () => {
    // Add logic for accepting terms
    // You can redirect or perform any other actions here
    closeModal(); // Close the modal after accepting terms
  };

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      contentLabel="Terms and Conditions Modal"
      className="modal"
      overlayClassName="overlay"
    >
      <div className="p-5">
        <h2>Terms and Conditions</h2>
        <div>
          <p>I accept the given terms and conditions and will email you after the sign of agreement.</p>
          <ul>
            <li>
              <a href="/path/to/file1.docx" download>File 1</a>
            </li>
            <li>
              <a href="/path/to/file2.docx" download>File 2</a>
            </li>
            <li>
              <a href="/path/to/file3.docx" download>File 3</a>
            </li>
            <li>
              <a href="/path/to/file4.docx" download>File 4</a>
            </li>
          </ul>
          <Button
            className="cursor-pointer font-semibold min-w-[257px] mt-3 text-[22px] text-center sm:text-lg md:text-xl"
            shape="round"
            color="purple_A100"
            size="md"
            variant="fill"
            onClick={handleAcceptTerms}
          >
            Accept Terms
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default TestModel;
