import React, { Component } from 'react';
import  CustomMessage from '../components/CustomMessage';
import  CustomHeader from '../components/CustomHeader';
import  CustomSignUpForm from '../components/CustomSignUpForm';
import { Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { fetchSignUp } from '../service/auth';

class SignUp extends Component {
  state = {
    email: '',
    name: '',
    password: '',
    userName: '',
  };

  handleSubmit = async () => {
    const { history } = this.props;
    const { name, email, userName, password } = this.state;
    const registerResponse = await fetchSignUp(name, email, userName, password);
    if (registerResponse === 200) history.push('/login'); 
    history.push('/login'); 
  };

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    return (
      <Grid
        textAlign="center"
        style={{ height: '100vh' }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <CustomHeader message="Central de Erros" />
          <CustomSignUpForm
            formData={this.state}
            onInputChange={this.handleInputChange}
            onHandleSubmit={this.handleSubmit}
          />
          <CustomMessage>
            Alaready have account? <Link to="/login">Sing In</Link>
          </CustomMessage>
        </Grid.Column>
      </Grid>
    );
  }
}


export default (SignUp);
