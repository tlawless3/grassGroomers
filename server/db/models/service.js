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
  location: {
    type: Sequelize.STRING,
    allowNull: false
  }
})
