'use strict';

const environment = require('./environment');
const JwtAccessTokenManager = require('../security/JwtAccessTokenManager');
const UserSerializer = require('../../interfaces/serializers/UserSerializer');
const DocumentRepositoryMongo = require('../repositories/DocumentRepositoryMongo');
const UserRepositorySql = require('../repositories/UserRepositorySql');

function buildBeans() {

  const beans = {
    accessTokenManager: new JwtAccessTokenManager(),
    documentRepository: new DocumentRepositoryMongo(),
    userSerializer: new UserSerializer(),
    userRepository: new UserRepositorySql(),
  };

  if (environment === 'test') {
    // …
  }

  return beans;
}

module.exports = buildBeans();
