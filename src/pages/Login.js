import React, { useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import CustomLogin from '../components/CustomLogin';
import { Grid } from 'semantic-ui-react';
import CustomHeader from '../components/CustomHeader';
import { fetchToken } from '../service/auth';

function Login() {
  const history = useHistory();
  const [formData, setFormData] = useState(new Map());

  const handleInputChange = useCallback(({ target: { name, value } }) => {
    setFormData(prevState => {
      return new Map(prevState).set(name, value);
    });
  }, []);

  const handleSubmit = async () => {
    const userName = formData.get('userName');
    const password = formData.get('password');
    const loginResponse = await fetchToken(userName, password);
    if (loginResponse) return history.push('/central')
    history.push('/');
  }; 

    return (
      <Grid
        textAlign="center"
        style={{ height: '100vh' }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 500 }}>
          <CustomHeader message="Central de Erros" />

          <CustomLogin
            formData={formData}
            onInputChange={handleInputChange}
            onHandleSubmit={handleSubmit}
          />
        </Grid.Column>
      </Grid>
    );
  }

export default Login;
