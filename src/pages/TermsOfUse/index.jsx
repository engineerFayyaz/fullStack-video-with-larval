import React from "react";

import { Text } from "components";
import Header from "components/Header";

const TermsOfUse = () => {
  return (
    <>
      <div className="bg-gray-900 flex flex-col items-center justify-start mx-auto p-2 shadow-bs1 w-full">
        <Header className="flex md:flex-col flex-row font-opensans md:gap-5 items-center justify-center md:px-5 w-full" />
        <div className="flex flex-col font-opensans items-center justify-start mt-[53px] md:px-5 ">
          <Text
            className="md:text-3xl sm:text-[28px] text-[32px] text-gray-100"
            size="txtOpenSansRomanBold32"
          >
            Terms of Use
          </Text>
        </div>
        <Text
          className="mb-[49px] mt-8 pl-5 pr-5 text-white-A700 text-md"
          size="txtPoppinsRegular20WhiteA700"
        >
          <>
            <div
              style={{
                color: "#888888",
                fontSize: "14px",
                fontWeight: "bold",
                letterSpacing: "1px",
                fontFamily: "roboto",
                marginBottom: "20px",
              }}
            >
              <b className="text-lg mb-2">Use Guidelines</b>
              <p>
                Welcome to OurBrandTV! These Terms of Use ("Terms") govern your
                access and use of our website, located at https://ourbrandtv.com
                ("Website")
              </p>
              <br />
              <p>
                By using our Website, you agree to comply with and be bound by
                these Terms. If you do not agree with these Terms, please do not
                use the Website.
              </p>
            </div>

            <div
              style={{
                color: "#888888",
                fontSize: "14px",
                fontWeight: "bold",
                letterSpacing: "1px",
                fontFamily: "roboto",
                marginBottom: "20px",
              }}
            >
              <b className="text-lg mb-2">1.Acceptance of Terms</b>
              <p>
                By using the Website, you acknowledge that you have read,
                understood, and agree to be bound by these Terms. OurBrandTV
                reserves the right to modify, amend, or update these Terms at
                any time without prior notice. It is your responsibility to
                review these Terms regularly to ensure you are aware of any
                changes.
              </p>
              <br />
            </div>

            <div
              style={{
                color: "#888888",
                fontSize: "14px",
                fontWeight: "bold",
                letterSpacing: "1px",
                fontFamily: "roboto",
                marginBottom: "20px",
              }}
            >
              <b className="text-lg mb-2">2. Contact Us</b>
              <p>
              If you have any questions or concerns about these Terms of Use, please contact us at contact@ourbrandtv.com.
              </p>
              <br />
              
            </div>
          </>
        </Text>
      </div>
    </>
  );
};

export default TermsOfUse;
