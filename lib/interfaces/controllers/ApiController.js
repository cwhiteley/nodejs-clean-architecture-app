'use strict';

const SayHello = require('../../application/use_cases/SayHello');

module.exports = {

  getInfo() {
    const environment = process.env.NODE_ENV || 'development';
    const host = process.env.HOST || 'http://localhost:3000';

    return {
      environment,
      host,
      routes: {
        root: `${host}/`,
        accounts: `${host}/accounts`,
        oauth: {
          token: `${host}/oauth/token`,
        },
        user: {
          documents: `${host}/user/documents`
        },
      }
    };
  },

};