import React, { useState, useCallback } from 'react';
import  CustomMessage from '../components/CustomMessage';
import  CustomHeader from '../components/CustomHeader';
import  CustomSignUpForm from '../components/CustomSignUpForm';
import { Grid } from 'semantic-ui-react';
import { Link, useHistory } from 'react-router-dom';
import { fetchSignUp } from '../service/auth';

function SignUp() {
  
  const [formData, setFormData] = useState(new Map());
  const history = useHistory();

  const handleSubmit = async () => {
    const name = formData.get('name');
    const userName = formData.get('userName');
    const email = formData.get('email');
    const password = formData.get('password');
    const registerResponse = await fetchSignUp(name, email, userName, password);
    if (registerResponse === 200) history.push('/login'); 
    history.push('/login'); 
  };

  const handleInputChange = useCallback(({ target: { name, value } }) => {
    setFormData(prevState => {
      return new Map(prevState).set(name, value);
    });
  }, []);

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
