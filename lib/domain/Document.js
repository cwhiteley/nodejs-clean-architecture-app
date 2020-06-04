'use strict';

module.exports = class {

  constructor({ id, ownerId, type = 'CONNECTION', username, password, website, creationDate, updateDate } = {}) {
    this.id = id;
    this.ownerId = ownerId;
    this.type = type;
    this.username = username;
    this.password = password;
    this.website = website;
    this.creationDate = creationDate;
    this.updateDate = updateDate;
  }

};