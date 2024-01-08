// import JSONAPIAdapter from '@ember-data/adapter/json-api';
// import { service } from '@ember/service';
// import { tracked } from 'tracked-built-ins';

// export default class ApplicationAdapter extends JSONAPIAdapter {
//   @service session;

//   @tracked
//   get headers() {
//     if (this.session.isAuthenticated) {
//       return {
//         Authorization: `Bearer ${this.session.data.authenticated.token}`,
//       };
//     } else {
//       return {};
//     }
//   }

//   handleResponse(status) {
//     if (status === 401 && this.session.isAuthenticated) {
//       this.session.invalidate();
//     }
//     return super.handleResponse(...arguments);
//   }
// }
