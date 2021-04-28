import { saveToken } from '../helpers/localStorageHelper';

export async function fetchToken(userName, password) {
    const requestTokenUrl = 'http://localhost:8080/oauth/token'
    // const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
    // const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;

    const request = {  
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Basic ' + Buffer.from('admin:admin').toString('base64')
        },
        body: 'grant_type=password'
          + '&username=' + userName
          + '&password=' + password,
    };
    try {
        const response = await fetch(requestTokenUrl, request);
        const { access_token } = await response.json();
        if (access_token) {
          alert('Login efetuado com sucesso!')
          saveToken(access_token);
          return access_token;
        } else {
          alert('Usuário ou senha inválidos!')
        }
    }catch(error) {
        console.error(error);
    }
  }

  export async function fetchSignUp(name, email, userName, password) {
    const signUpNewUserUrl = 'http://localhost:8080/v1/users'
    // const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
    // const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;

    const request = {  
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "name": name,
          "email": email,
          "userName": userName,
          "password": password
      })
    };
    try {
        const response = await fetch(signUpNewUserUrl, request);
        if (response.status === 200) {
          alert('Usuário cadastrado com sucesso!')
          return response.status;
        } else {
          alert('Erro no cadastro!')
        }
    }catch(error) {
        console.error(error);
    }
  }
