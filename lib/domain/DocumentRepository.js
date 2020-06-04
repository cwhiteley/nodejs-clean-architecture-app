'use strict';

module.exports = class {

  persist(document) {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
  }

  updateConnectionDocument(document) {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
  }

  remove(documentId) {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
  }

  get(documentId) {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
  }

  findByOwner(ownerId) {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
  }

};
