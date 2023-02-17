const { DataTypes } = require('sequelize');
const {Sequelize, sequelize} = require('./db');

// TODO - define the Musician model
let Musician = sequelize.define("Musician", {
    musicianName: DataTypes.STRING,
    musicianInstrument: DataTypes.STRING,
});

module.exports = {
    Musician
};