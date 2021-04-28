import { saveToken } from '../helpers/localStorageHelper';

export async function fetchToken(userName, password) {
  console.log(userName, password);
    const requestTokenUrl = 'http://localhost:8080/oauth/token'
    // const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
    // const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;

    const request = {  
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Basic ' + Buffer.from('jow:jowjow').toString('base64')
        },
        body: 'grant_type=password'
          + '&username=' + userName
          + '&password=' + password,
    };
    try {
        const response = await fetch(requestTokenUrl, request);
        const { access_token } = await response.json();
        console.log(access_token);
        saveToken(access_token);
    }catch(error) {
        console.error(error);
    }
  }
