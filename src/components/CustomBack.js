import React from 'react';
import { Button } from 'semantic-ui-react';

const CustomBack = ({ toLogin }) => (
  <Button.Group>
    <Button
      icon="left chevron"
      content="voltar"
      inverted color='blue'
      onClick={toLogin}
    />
  </Button.Group>
);

export default CustomBack;
