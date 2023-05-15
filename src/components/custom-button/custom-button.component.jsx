import React from "react";
import { CustomButtonContainer } from "./custom-button.styles";
// import "./custom-button.styles.scss";

const Button = ({ children, ...props }) => {
  return <CustomButtonContainer {...props}>{children}</CustomButtonContainer>;
};

export default Button;
