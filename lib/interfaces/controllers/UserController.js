'use strict';

const Document = require('../../domain/Document');

module.exports = {

  async getInfo(request, h) {

    // Context
    const { environment, serviceLocator } = request.server.app;

    // Input
    const userId = request.auth.credentials.uid;

    // Treatment
    const user = await serviceLocator.userRepository.get(userId);

    // Output
    return {
      id: user.id,
      object: 'user',
      data: {
        'first_name': user.firstName,
        'last_name': user.lastName,
        'email': user.email,
        'status': user.status,
      },
      links: {
        'self': `${environment.server.url}/user`,
        'documents': `${environment.server.url}/user/documents`,
      }
    };
  },

  async getDocuments(request, h) {

    // Context
    const { environment, serviceLocator } = request.server.app;

    // Input
    const userId = request.auth.credentials.uid;

    // Treatment
    const documents = await serviceLocator.documentRepository.findByOwner(userId);

    // Output
    return documents.map(document => {
      return {
        id: document.id,
        object: 'document',
        data: {
          'type': document.type,
          'username': document.username,
          'password': document.password,
          'website': document.website,
        },
        links: {
          'self': `${environment.server.url}/user/documents/${document.id}`,
        }
      };
    });
  },

  async addDocument(request, h) {

    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Input
    const userId = request.auth.credentials.uid;
    const { username, password, website } = request.payload;

    // Treatment
    const document = new Document({ ownerId: userId, username, password, website });
    await serviceLocator.documentRepository.persist(document);

    // Output
    return h.response().created();
  },

  async getDocumentDetails(request, h) {

    // Context
    const { environment, serviceLocator } = request.server.app;

    // Input
    const documentId = request.params.id;

    // Treatment
    const document = await serviceLocator.documentRepository.get(documentId);

    // Output
    return {
      id: document.id,
      object: 'document',
      data: {
        'type': document.type,
        'username': document.username,
        'password': document.password,
        'website': document.website,
      },
      links: {
        'self': `${environment.server.url}/user/documents/${document.id}`,
      }
    };
  },

  async editDocument(request, h) {

    // Context
    const { environment, serviceLocator } = request.server.app;

    // Input
    const documentId = request.params.id;
    const { username, password, website } = request.payload;

    // Treatment
    let document = await serviceLocator.documentRepository.get(documentId);
    if (username) document.username = username;
    if (password) document.password = password;
    if (website) document.website = website;
    document = await serviceLocator.documentRepository.updateConnectionDocument(document);

    // Output
    return {
      id: document.id,
      object: 'document',
      data: {
        'type': document.type,
        'username': document.username,
        'password': document.password,
        'website': document.website,
      },
      links: {
        'self': `${environment.server.url}/user/documents/${document.id}`,
      }
    };
  },

  async removeDocument(request, h) {

    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Input
    const documentId = request.params.id;

    // Treatment
    await serviceLocator.documentRepository.remove(documentId);

    // Output
    return h.response();
  },

};
