import React from "react";
import { Message } from "semantic-ui-react";

const CustomMessage = ({ children }) => {
  return <Message>{children}</Message>;
};

export default CustomMessage;
