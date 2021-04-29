import React, { Component } from 'react';
import CustomLogin from '../components/CustomLogin';
import { Grid } from 'semantic-ui-react';
import CustomHeader from '../components/CustomHeader';
import { fetchToken } from '../service/auth';

class Login extends Component {
  state = {
    username: '',
    password: '',
  };

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };
  handleSubmit = async () => {
    const { username, password } = this.state;
    const loginResponse = await fetchToken(username, password);
    const { history } = this.props;
    if (loginResponse) history.push('/central')
    else history.push('/login');
  }; 

  render() {
    return (
      <Grid
        textAlign="center"
        style={{ height: '100vh' }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 500 }}>
          <CustomHeader message="Central de Erros" />

          <CustomLogin
            formData={this.state}
            onInputChange={this.handleInputChange}
            onHandleSubmit={this.handleSubmit}
          />
        </Grid.Column>
      </Grid>
    );
  }
}

export default Login;
