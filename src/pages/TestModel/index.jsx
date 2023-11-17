import React, { useState } from 'react';
import Modal from 'react-modal';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header1 from 'components/Header1';

const TestModel = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleAcceptTerms = () => {
    closeModal();
  };

  return (
    <>
      <div className='bg-gray-900 flex flex-col font-opensans gap-[31px] items-center justify-start mx-auto p-2 shadow-bs1 w-full'>
        <Header1 className='flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full' />
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
              <p>Please accept the terms and conditions and sign the given documents.</p>
              <ul>
                <li>
                  <Link to="/Files/community_guidelines.docx" target="_blank" download>
                    <Button variant="link">Community Guidelines</Button>
                  </Link>
                </li>
                <li>
                  <Link to="/Files/MediaAgreementOBTVjotform.docx" target="_blank" download>
                    <Button variant="link">Media Agreement OBTV jotform</Button>
                  </Link>
                </li>
                <li>
                  <Link to="/Files/Obtvpaidagreement (1).docx" target="_blank" download>
                    <Button variant="link">OBTV Paid Agreement</Button>
                  </Link>
                </li>
                <li>
                  <Link to="/Files/Submitting_Content.docx" target="_blank" download>
                    <Button variant="link">Submitting Content</Button>
                  </Link>
                </li>
                <li>
                  <Link to="/Files/trademark.docx" target="_blank" download>
                    <Button variant="link">Trademark</Button>
                  </Link>
                </li>
              </ul>
              <Button
                className="cursor-pointer font-semibold min-w-[257px] ml-3 md:ml-[0] mr-6 mt-6 text-[22px] text-center sm:text-lg md:text-xl"
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
      </div>
    </>
  );
};

export default TestModel;
