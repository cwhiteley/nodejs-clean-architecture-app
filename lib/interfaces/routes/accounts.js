'use strict';

const AccountsController = require('../controllers/AccountsController');

module.exports = {
  name: 'accounts',
  version: '1.0.0',
  register: async (server) => {

    server.route([
      {
        method: 'POST',
        path: '/accounts',
        handler: AccountsController.register,
        options: {
          description: 'Create an account for a user',
          tags: ['api'],
        },
      },
    ]);
  }
};