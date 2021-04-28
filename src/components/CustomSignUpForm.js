import 'semantic-ui-css/semantic.min.css';
import React from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';

function SignUpForm({
  formData: { name, userName, email, password },
  onInputChange,
  onHandleSubmit,
}) {
   return (
  <Form size="large">
    <Segment stacked>
    <Form.Input
        fluid
        placeholder="Name"
        value={name}
        name="name"
        onChange={(e) => onInputChange(e)}
      />
      <Form.Input
        fluid
        placeholder="User Name"
        value={userName}
        name="userName"
        onChange={(e) => onInputChange(e)}
      />
      <Form.Input
        fluid
        placeholder="E-mail address"
        value={email}
        name="email"
        onChange={(e) => onInputChange(e)}
      />
      <Form.Input
        fluid
        placeholder="Password"
        value={password}
        name="password"
        onChange={(e) => onInputChange(e)}
      />

      <Button color="blue" fluid size="large" onClick={async () => await onHandleSubmit()}>
        Register
      </Button>
    </Segment>
  </Form>
);
   }

export default SignUpForm;
