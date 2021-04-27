import 'semantic-ui-css/semantic.min.css';
import React from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';

const CustomLogin = ({
  formData: { email, password },
  onInputChange,
  onHandleSubmit,
}) => (
  <Form size="large">
    <Segment stacked>
      <Form.Input
        fluid
        icon="user"
        iconPosition="left"
        placeholder="E-mail address"
        name="email"
        valeu={email}
        onChange={(e) => onInputChange(e)}
      />
      <Form.Input
        fluid
        icon="lock"
        iconPosition="left"
        placeholder="Password"
        type="password"
        name="password"
        valeu={password}
        onChange={(e) => onInputChange(e)}
      />

      <Button
        color="blue"
        fluid
        size="large"
        onClick={onHandleSubmit}
      >
        Login
      </Button>
    </Segment>
  </Form>
);

export default CustomLogin;
