import { render } from '@testing-library/react';
import React from 'react';
import { Message } from 'semantic-ui-react';

const CustomMessage = ({ children }) => {
  render();
  return(
    <Message>
        { children }
      </Message>
  )}

export default CustomMessage;