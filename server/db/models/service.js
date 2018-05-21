const Sequelize = require('sequelize')
const db = require('../db')

const Service = db.define('service', {
  type: {
    type: Sequelize.STRING,
    allowNull: false
  },
  date: {
    type: Sequelize.DATE,
    allowNull: false
  },
  location: {
    type: Sequelize.STRING,
    allowNull: false
  },
  note: {
    type: Sequelize.TEXT
  }
})

module.exports = Service;
