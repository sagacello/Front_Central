import 'semantic-ui-css/semantic.min.css';
import { Button, Form, Segment } from 'semantic-ui-react';


function CustomLogin ({
  formData: { username, password },
  onInputChange,
  onHandleSubmit,
}) {
  return (
  <Form size="large">
    <Segment stacked>
      <Form.Input
        fluid
        icon="user"
        iconPosition="left"
        placeholder="Username"
        name="username"
        value={username}
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
  }

export default CustomLogin;
