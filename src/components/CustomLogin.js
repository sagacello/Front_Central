import 'semantic-ui-css/semantic.min.css';
import React from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';

const CustomLogin = ({
  formData: { userName, password },
  onInputChange,
  onHandleSubmit,
}) => (
  <Form size="large">
    <Segment stacked>
      <Form.Input
        fluid
        icon="user"
        iconPosition="left"
        placeholder="Username"
        name="userName"
        value={userName}
        onChange={(e) => onInputChange(e)}
      />
      <Form.Input
        fluid
        icon="lock"
        iconPosition="left"
        placeholder="Password"
        type="password"
        name="password"
        value={password}
        onChange={(e) => onInputChange(e)}
      />

      <Button
        color="blue"
        fluid
        size="large"
        onClick={async () => await onHandleSubmit()}
      >
        Login
      </Button>
    </Segment>
  </Form>
);

export default CustomLogin;
