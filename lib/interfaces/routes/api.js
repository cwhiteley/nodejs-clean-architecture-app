'use strict';

const ApiController = require('../controllers/ApiController');

module.exports = {
  name: 'hello',
  version: '1.0.0',
  register: async (server) => {

    server.route([
      {
        method: 'GET',
        path: '/',
        handler: ApiController.getInfo,
        options: {
          description: 'Get API information',
          tags: ['api'],
        },
      },
    ]);
  }
};