'use strict';

const Document = require('../../domain/Document');
const MongooseDocument = require('../orm/mongoose/schemas/Document');
const DocumentRepository = require('../../domain/DocumentRepository');

function mongooseToDomain(mongooseDocument) {
  return new Document({
    id: mongooseDocument.id,
    ownerId: mongooseDocument.ownerId,
    type: mongooseDocument.type,
    username: mongooseDocument.username,
    password: mongooseDocument.password,
    website: mongooseDocument.website,
    creationDate: mongooseDocument.creationDate,
    updateDate: mongooseDocument.updateDate
  });
}

module.exports = class extends DocumentRepository {

  async persist(document) {
    // Input
    const { ownerId, type, username, password, website } = document;

    // Treatment
    const mongooseDocument = new MongooseDocument({ ownerId, type, username, password, website });
    await mongooseDocument.save();

    // Output
    return mongooseToDomain(mongooseDocument);
  }

  async updateConnectionDocument(document) {
    // Input
    const { username, password, website } = document;

    // Treatment
    const updateDate = new Date();
    const mongooseDocument = await MongooseDocument.findByIdAndUpdate(document.id, { username, password, website, updateDate }, { new: true});

    // Output
    return mongooseToDomain(mongooseDocument);
  }

  async remove(documentId) {
    // Treatment
    return MongooseDocument.findByIdAndDelete(documentId);
  }

  async get(documentId) {
    // Treatment
    const mongooseDocument = await MongooseDocument.findById(documentId);

    // Output
    return mongooseToDomain(mongooseDocument);
  }

  async findByOwner(ownerId) {
    // Treatment
    const mongooseDocuments = await MongooseDocument.find({ ownerId });

    // Output
    return mongooseDocuments.map(mongooseToDomain);
  }

};
