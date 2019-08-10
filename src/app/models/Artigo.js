const withPagination = require("sequelize-simple-pagination");

module.exports = (sequelize, DataTypes) => {
  const Artigo = sequelize.define(
    "Artigo",
    {
      autor: DataTypes.STRING,
      titulo: DataTypes.STRING,
      subtitulo: DataTypes.STRING,
      mensagem: DataTypes.TEXT,
      permalink: DataTypes.STRING,
      id_usuario: DataTypes.INTEGER,
      data_publicacao: DataTypes.DATE,
      data_ultima_atualizacao: DataTypes.DATE
    },

    {
      tableName: "artigos",
      timestamps: false
    }
  );

  const options = {
    methodName: "paginate",
    primaryKey: "id"
  };

  withPagination(options)(Artigo);

  return Artigo;
};
