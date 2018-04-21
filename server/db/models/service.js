const Sequelize = require('sequelize')
const db = require('../db')

const Service = db.define('service', {
  type: {
    type: Sequelize.STRING,
    allowNull: false
  },
  startTime: {
    type: Sequelize.DATE,
    allowNull: false
  },
  endTime: {
    type: Sequelize.DATE,
    allowNull: false
  },
  //could break up location into mutliple fields as customer base grows
  location: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = Service;
