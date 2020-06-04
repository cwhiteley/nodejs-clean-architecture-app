'use strict';

const RegisterUser = require('../../application/use_cases/RegisterUser');

module.exports = {

  async register(request, h) {

    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Input
    const { firstName, lastName, email, password } = request.payload;

    // Treatment
    await RegisterUser(firstName, lastName, email, password, serviceLocator);

    // Output
    return h.response().created();
  },

};