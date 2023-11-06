import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-[3px]" };
const variants = {
  fill: {
    pink_500: "bg-blue-600 text-white-A700",
    purple_A100: "bg-blue-600 shadow-bs text-white-A700",
  },
};
const sizes = { xs: "p-[7px]", sm: "p-[11px]", md: "p-[18px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  customBackgroundColor = "",
  ...restProps
}) => {
  return (
    <button
    className={`${className} ${(shape && shapes[shape]) || ""} ${
      (size && sizes[size]) || ""
    } ${(variant && variants[variant]?.[color]) || ""}`}
    style={{ backgroundColor: customBackgroundColor }} // Apply custom background color
    {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm", "md"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["pink_500", "purple_A100"]),
};

export { Button };
