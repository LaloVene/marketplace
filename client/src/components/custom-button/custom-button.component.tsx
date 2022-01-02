import React from "react";
import { CustomButtonContainer } from "./custom-button.styles";

const CustomButton: React.FC<any> = ({ children, ...props }: any) => (
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

export default CustomButton;
