// // app/authenticators/sample.js
// import Base from 'ember-simple-auth/authenticators/base';

// export default class SampleAuthenticator extends Base {
//   async authenticate(credentials) {
//     const { email, password } = credentials;

//     if (email === 'example@example.com' && password === 'password') {
//       const authenticationData = {
//         access_token: '123',
//       };
//       return authenticationData;
//     } else {
//       throw new Error('Invalid login');
//     }
//   }
//   restore() {
//     return Promise.Resolve({ access_token: '123' });
//   }
// }
