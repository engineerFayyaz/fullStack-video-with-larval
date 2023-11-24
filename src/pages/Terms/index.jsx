import React, { useState } from "react";
import Modal from "react-modal";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header1 from "components/Header1";

const Terms = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [isChecked, setChecked] = useState(false);
  const handleCheckboxChange = () => {
    setChecked(!isChecked);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleAcceptTerms = () => {
    closeModal();
  };

  const Heading = {
    textAlign: "center",
    color: " black",
    fontSize: "25px",
  };

  const Para = {
    fontSize: "17px",
    marginTop: "10px",
    lineHeight: "10px",
    color: "white",
  };
  const LastButton = {
    backgroundColor: "Blue",
    borderRadius: "18px",
    padding: "15px",
    color: "white",
  };

  const terms = {
    with: "20%",
    color: "white",
    margin: "0 auto",
    fontFamily: "fantasy",
  };
  const colorback = {
    background: "black",
    height: "515px",
  };
  return (
    <>
      <div className="bg-gray-900 flex flex-col font-opensans gap-[31px] items-center justify-start mx-auto p-2 shadow-bs1 w-full">
        <Header1 className="flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel="Terms and Conditions Modal"
          className="modal"
          overlayClassName="overlay"
        ></Modal>
      </div>
      <div style={colorback} className="container-fluid bg-black">
        <div className="flex md:flex-col  flex-row md:gap-10 items-start justify-between max-w-[1171px]  mx-auto md:px-5 w-full">
          <img
            class=" md:h-auto md:mt-0  object-cover"
            src="images/logo.png"
            alt="whatsappimage"
            loading="lazy"
          ></img>

          <div
            className="p-5 flex flex-col  items-center justify-start w-[40%]"
            style={Heading}
          >
            <div style={terms}>
              {" "}
              <h2>Terms and Conditions</h2>
            </div>{" "}
            <br />
            <div>
              <p style={Para}>
                <b>
                  Please Accept the Terms and Conditions and Sign the Given
                  Documents.
                </b>
              </p>
              <br />
              <ul style={Para}>
                <li>
                  <Link
                    to="/Files/community_guidelines.docx"
                    target="_blank"
                    download
                  >
                    <Button variant="link">
                      <b>Community Guidelines</b>
                    </Button>
                  </Link>
                  <br />
                </li>
                <li>
                  <Link
                    to="/Files/MediaAgreementOBTVjotform.docx"
                    target="_blank"
                    download
                  >
                    <Button variant="link">
                      <b>Media Agreement OBTV jotform</b>
                      <br />
                    </Button>
                  </Link>
                  <br />
                </li>
                <li>
                  <Link
                    to="/Files/Obtvpaidagreement (1).docx"
                    target="_blank"
                    download
                  >
                    <Button variant="link">
                      <b>OBTV Paid Agreement</b>
                    </Button>
                  </Link>
                  <br />
                </li>
                <li>
                  <Link
                    to="/Files/Submitting_Content.docx"
                    target="_blank"
                    download
                  >
                    <Button variant="link">
                      <b>Submitting Content</b>
                    </Button>
                  </Link>
                  <br />
                </li>
                <li>
                  <Link to="/Files/trademark.docx" target="_blank" download>
                    <Button variant="link">
                      <b>Trademark</b>
                    </Button>
                  </Link>
                  <br />
                </li>
              </ul>
              <div>
                <label className="d-flex">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                  />
                  Checkbox Label
                <p style={{color:"white",fontSize:"15px"}}>Checkbox is {isChecked ? "checked" : "unchecked"}.</p>

                </label>

              </div>
              <Button
                className="cursor-pointer font-semibold min-w-[257px] ml-3 md:ml-[0] mr-6 mt-6 text-[22px] text-center sm:text-lg md:text-xl"
                shape="round"
                color="purple_A100"
                size="md"
                variant="fill"
                onClick={handleAcceptTerms}
              >
                <h4 style={LastButton}> Accept Terms</h4>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Terms;
