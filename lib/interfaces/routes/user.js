'use strict';

const UserController = require('../controllers/UserController');

module.exports = {
  name: 'users',
  version: '1.0.0',
  register: async (server) => {

    server.route([
      {
        method: 'GET',
        path: '/user',
        handler: UserController.getInfo,
        options: {
          auth: 'oauth-jwt',
          description: 'Get connected user information',
          tags: ['api'],
        },
      },
      {
        method: 'GET',
        path: '/user/documents',
        handler: UserController.getDocuments,
        options: {
          auth: 'oauth-jwt',
          description: 'Get connected user secured documents',
          tags: ['api'],
        },
      },
      {
        method: 'POST',
        path: '/user/documents',
        handler: UserController.addDocument,
        options: {
          auth: 'oauth-jwt',
          description: 'Add a new document',
          tags: ['api'],
        },
      },
      {
        method: 'GET',
        path: '/user/documents/{id}',
        handler: UserController.getDocumentDetails,
        options: {
          auth: 'oauth-jwt',
          description: 'Get the connected user document details',
          tags: ['api'],
        },
      },
      {
        method: 'PATCH',
        path: '/user/documents/{id}',
        handler: UserController.editDocument,
        options: {
          auth: 'oauth-jwt',
          description: 'Edit an existing document',
          tags: ['api'],
        },
      },
      {
        method: 'DELETE',
        path: '/user/documents/{id}',
        handler: UserController.removeDocument,
        options: {
          auth: 'oauth-jwt',
          description: 'Add a new document',
          tags: ['api'],
        },
      },
    ]);
  }
};