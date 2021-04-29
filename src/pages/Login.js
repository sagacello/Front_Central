import React, { Component } from 'react';
import CustomLogin from '../components/CustomLogin';
import { Grid } from 'semantic-ui-react';
import CustomHeader from '../components/CustomHeader';

class Login extends Component {
  state = {
    userName: '',
    password: '',
  };

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };
  handleSubmit = () => {
    const { history } = this.props;
    history.push('/central');
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
