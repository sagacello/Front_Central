import React, { Component } from 'react';
import  CustomMessage from '../components/CustomMessage';
import  CustomHeader from '../components/CustomHeader';
import  CustomSignUpForm from '../components/CustomSignUpForm';
import { Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class SignUp extends Component {
  state = {
    email: '',
    name: '',
    password: '',
    userName: '',
  };

  handleSubmit = () => {
    const { history } = this.props;
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
            Alaready have account? <Link to="/">Sing In</Link>
          </CustomMessage>
        </Grid.Column>
      </Grid>
    );
  }
}


export default (SignUp);
