// app/authenticators/sample.js
import Base from 'ember-simple-auth/authenticators/base';

export default class TokenAuthenticator extends Base {
  async authenticate(credentials) {
    const { email, password } = credentials;

    if (email === 'kengok@gmail.com' && password === 'password') {
      const authenticationData = {
        access_token: '123',
      };
      return authenticationData;
    } else {
      throw new Error('Invalid login');
    }

    //  try {
    //   // Make a request to your API's login route
    //   const response = await fetch('http://localhost:3000/auth/login', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //       email: email,
    //       password: password,
    //     }),
    //   });

    //   if (!response.ok) {
    //     // If the server returns an error, throw an error
    //     throw new Error('Invalid login');
    //   }

    //   // Parse the response and return the authentication data
    //   const authenticationData = await response.json();
    //   return authenticationData;
    // } catch (error) {
    //   // Catch any network or server errors
    //   throw new Error('Authentication failed');
    // }
  }

  restore() {
    return Promise.Resolve({ access_token: '123' });
  }
}
