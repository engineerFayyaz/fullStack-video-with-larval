import React from "react";

const sizeClasses = {
  txtPoppinsRegular18WhiteA70087: "font-normal font-poppins",
  txtOpenSansRomanExtraBold100: "font-extrabold font-opensans",
  txtOpenSansRomanBold16WhiteA700: "font-bold font-opensans",
  txtNunitoSansRegular14: "font-normal font-nunitosans",
  txtOpenSansRomanBold16Gray100: "font-bold font-opensans",
  txtCatamaranRomanBold32: "font-bold font-catamaran",
  txtOpenSansRomanBold16: "font-bold font-opensans",
  txtOpenSansRomanRegular24: "font-normal font-opensans",
  txtOpenSansRomanBold36: "font-bold font-opensans",
  txtPoppinsBold24WhiteA700: "font-bold font-poppins",
  txtOpenSansRomanRegular20: "font-normal font-opensans",
  txtInterRegular22: "font-inter font-normal",
  txtPoppinsRegular20WhiteA700: "font-normal font-poppins",
  txtOpenSansRomanBold12: "font-bold font-opensans",
  txtPoppinsBlack50: "font-black font-poppins",
  txtOpenSansRomanBold32: "font-bold font-opensans",
  txtOpenSansRomanBold20WhiteA700: "font-bold font-opensans",
  txtPoppinsRegular18: "font-normal font-poppins",
  txtPoppinsBold20: "font-bold font-poppins",
  txtPoppinsRegular18WhiteA70090: "font-normal font-poppins",
  txtOpenSansRomanRegular16: "font-normal font-opensans",
  txtInterBold32: "font-bold font-inter",
  txtOpenSansRomanBold32WhiteA700: "font-bold font-opensans",
  txtPoppinsBold24: "font-bold font-poppins",
  txtPoppinsRegular24: "font-normal font-poppins",
  txtOpenSansRomanRegular16Pink500: "font-normal font-opensans",
  txtOpenSansRomanExtraBold50: "font-extrabold font-opensans",
  txtPoppinsRegular20: "font-normal font-poppins",
  txtOpenSansRomanBold20: "font-bold font-opensans",
  txtOpenSansRomanBold24: "font-bold font-opensans",
  txtNunitoSansSemiBold14: "font-nunitosans font-semibold",
  txtInterRegular18: "font-inter font-normal",
  
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
