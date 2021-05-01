import React from 'react';
import { Header } from 'semantic-ui-react';

const CustomHeader = ({ message }) => {
  return (
    <Header as="h2" color="blue" textAlign="center">
      {message}
    </Header>
  );
};

export default CustomHeader;
