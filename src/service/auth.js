import { saveToken } from '../helpers/localStorageHelper';

export async function fetchToken(userName, password) {
    const requestTokenUrl = 'http://localhost:8080/oauth/token'
    const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
    const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;

    const request = {  
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Origin': '',
          'Host': 'api.producthunt.com'
        },
        body: JSON.stringify({
          'client_id': CLIENT_ID,
          'client_secret': CLIENT_SECRET,
          'grant_type': 'password',
          'username' : userName,
          'password': password,
        }),
    };
    try {
        const response = await fetch(requestTokenUrl, request);
        saveToken(response.json());
    }catch(error) {
        console.error(error);
    }
  }
