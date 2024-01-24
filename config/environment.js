'use strict';

module.exports = function (environment) {
  const ENV = {
    modulePrefix: 'prototype-1',
    environment,
    rootURL: '/',
    locationType: 'history',
    EmberENV: {
      EXTEND_PROTOTYPES: false,
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  // ENV['ember-simple-auth'] = {
  //   authorizer: 'authorizer:token', // Use the token authorizer
  //   // routeAfterInvalidation: 'login',
  //   routeAfterAuthentication: 'authenticated.calendar',
  // };
  ENV['ember-simple-auth-token'] = {
    serverTokenEndpoint: 'http://localhost:3000/auth/login', // Your API login route
    identificationField: 'email', // API property used to identify a user
    tokenPropertyName: 'token', // Property name in the API response for the token
    refreshLeeway: 300, // Time in seconds before the token expires to refresh it (optional)
    refreshAccessTokens: true, // Whether to refresh access tokens (optional)
  };

  return ENV;
};
