import React, { useState } from 'react';
import  CustomMessage from '../components/CustomMessage';
import  CustomHeader from '../components/CustomHeader';
import  CustomSignUpForm from '../components/CustomSignUpForm';
import { Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { fetchSignUp } from '../service/auth';

function SignUp() {
  
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    password: '',
    userName: '',
  });

  const handleSubmit = async () => {
    const { history } = this.props;
    const { name, email, userName, password } = this.state;
    const registerResponse = await fetchSignUp(name, email, userName, password);
    if (registerResponse === 200) history.push('/login'); 
    history.push('/login'); 
  };

  const handleInputChange = ({ target: { name, value } }) => {
    setFormData({ [name]: value });
  };

    return (
      <Grid
        textAlign="center"
        style={{ height: '100vh' }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <CustomHeader message="Central de Erros" />
          <CustomSignUpForm
            formData={formData}
            onInputChange={handleInputChange}
            onHandleSubmit={handleSubmit}
          />
          <CustomMessage>
            Alaready have account? <Link to="/login">Sing In</Link>
          </CustomMessage>
        </Grid.Column>
      </Grid>
    );
}


export default (SignUp);
