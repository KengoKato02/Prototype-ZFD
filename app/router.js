import EmberRouter from '@ember/routing/router';
import config from 'prototype-1/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('login', { path: '' });

  this.route('authenticated', function () {
    this.route('sign-up');
    this.route('dashboard');
    this.route('colleagues');
    this.route('holiday');
    this.route('profile');
    this.route('calendar');
  });
  this.route('login');
});
