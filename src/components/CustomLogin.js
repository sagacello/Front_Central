import 'semantic-ui-css/semantic.min.css';
import { Button, Form, Segment } from 'semantic-ui-react';
import { fetchToken } from '../service/auth';


function CustomLogin ({
  formData: { email, password },
  onInputChange,
  // onHandleSubmit,
}) {
  const login = async ()  =>  await fetchToken(email, password);
  return (
  <Form size="large">
    <Segment stacked>
      <Form.Input
        fluid
        icon="user"
        iconPosition="left"
        placeholder="E-mail address"
        name="email"
        value={email}
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
        onClick={async () => await login()}
      >
        Login
      </Button>
    </Segment>
  </Form>
);
  }

export default CustomLogin;
