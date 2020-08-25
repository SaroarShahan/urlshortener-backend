const { Sequelize, DataTypes } = require('sequelize');

const CONNECTION_STRING =
  process.env.DATABASE ||
  'postgres://shahan:shahan13456@localhost:5432/urlshortener';

const db = new Sequelize(CONNECTION_STRING);

const User = db.define('User', {
  name: {
    type: DataTypes.TEXT,
  } ,
  email: {
    type: DataTypes.TEXT,
    unique: true
  },
  password: {
    type: DataTypes.TEXT,
  }
});

const Url = db.define('Url', {
  url: DataTypes.TEXT,
  hash: DataTypes.TEXT,
});

module.exports = {
  db,
  User,
  Url,
};
