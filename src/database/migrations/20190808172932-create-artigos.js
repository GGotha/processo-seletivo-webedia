"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("artigos", {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      id_usuario: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      autor: {
        allowNull: false,
        type: Sequelize.STRING
      },
      titulo: {
        allowNull: false,
        type: Sequelize.STRING
      },
      subtitulo: {
        allowNull: false,
        type: Sequelize.STRING
      },
      mensagem: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      permalink: {
        allowNull: false,
        type: Sequelize.STRING
      },
      data_publicacao: {
        allowNull: false,
        type: Sequelize.DATE
      },
      data_ultima_atualizacao: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("artigos");
  }
};
