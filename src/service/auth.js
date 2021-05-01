import { saveToken, getToken } from '../helpers/localStorageHelper';

export async function fetchToken(userName, password) {
    const requestTokenUrl = 'https://central-errors-events.herokuapp.com/oauth/token';
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
    const signUpNewUserUrl = 'https://central-errors-events.herokuapp.com/v1/users';

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
          return response.status;
        } else {
          alert('Erro no cadastro!')
        }
    }catch(error) {
        console.error(error);
    }
  }

   export async function fetchEventById(id) {
    const baseUrl = `https://central-errors-events.herokuapp.com/v1/events/${id}`;
    const token = getToken();
    console.log(token);
    const request = {  
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        },
    };
    try {
        const response = await fetch(baseUrl, request);
        if (response.status === 200) {
          return response.status;
        } else {
          alert('Erro na busca!')
        }
    }catch(error) {
        console.error(error);
    }
  } 

   export async function fetchEvents() {
    const baseUrl = 'https://central-errors-events.herokuapp.com/v1/events';
    const token = getToken();
    console.log(token);
    const request = {  
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        },
    };
    try {
        const response = await fetch(baseUrl, request);
        if (response.status === 200) {
          return response.status;
        } else {
          alert('Erro na busca!')
        }
    }catch(error) {
        console.error(error);
    }
  } 
