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

  ENV['ember-simple-auth'] = {
    authorizer: 'authorizer:token', // Use the token authorizer
    routeAfterInvalidation: 'login',
    routeAfterAuthentication: 'authenticated.operating-targets',
  };
  ENV['ember-simple-auth-token'] = {
    refreshAccessTokens: true,
    refreshLeeway: 300,
    tokenPropertyName: 'token',
    authorizationHeaderName: 'Authorization',
    authorizationPrefix: 'Bearer ',
    serverTokenRefreshEndpoint: 'http://localhost:3000/refresh-token',
    serverTokenEndpoint: 'http://localhost:3000/api/v1/login',
    serverTokenRefreshModel: 'refresh-token',
  };

  return ENV;
};
