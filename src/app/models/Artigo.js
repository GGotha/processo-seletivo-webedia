const sequelizePaginate = require("sequelize-paginate");

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

  sequelizePaginate.paginate(Artigo);

  return Artigo;
};
