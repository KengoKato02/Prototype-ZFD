import Service from '@ember/service';
import { inject as service } from '@ember/service';

export default Service.extend({
  session: service(),

  authenticate() {
    // Simulate a successful authentication by setting a fake token
    const fakeToken = 'yourFakeToken123';
    this.session.set('data.authenticated.token', fakeToken);
  },

  invalidate() {
    // Simulate logging out by removing the fake token
    this.session.set('data.authenticated.token', null);
  },
});
