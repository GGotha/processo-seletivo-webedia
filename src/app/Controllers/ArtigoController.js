const { User } = require("../models");
const { Artigo } = require("../models");
const moment = require("moment");
const crypto = require("crypto");

class ArtigoController {
  async create(req, res) {
    const { titulo, mensagem, subtitulo } = req.body;

    const getAllInfoUser = await User.findOne({
      where: { id: req.userId },
      raw: true
    });

    const {
      name: autor,
      id,
      createdAt: data_publicacao,
      updatedAt: data_ultima_atualizacao
    } = getAllInfoUser;

    console.log(getAllInfoUser);

    try {
      const generateTokenPermaLink = crypto.randomBytes(20).toString("hex");

      const addArtigoBD = await Artigo.create({
        id_usuario: id,
        autor,
        titulo,
        subtitulo,
        permalink: generateTokenPermaLink,
        data_publicacao,
        data_ultima_atualizacao
      });
      return res.json({
        status: "success",
        msg: "Artigo criado com sucesso!",
        autor,
        titulo,
        subtitulo,
        mensagem,
        permalink: generateTokenPermaLink,
        data_publicacao,
        data_ultima_atualizacao
      });
    } catch (error) {
      return res.json({ err });
    }
  }

  async delete(req, res) {
    const idArtigo = req.params.id;

    try {
      const getAllInfoUser = await User.findOne({
        where: { id: req.userId },
        raw: true
      });

      //todo mensagem de erro quando usuario tentar apagar o artigo de outro usuario
      const { id: idCliente } = getAllInfoUser;

      const delArtigoById = await Artigo.destroy({
        where: { id_usuario: idCliente, id: idArtigo },
        raw: true
      });

      return res.send({ status: "success", msg: "deletado" });
    } catch (error) {
      return res.send({
        status: "success",
        msg: "Erro ao deletar artigo, tente novamente mais tarde"
      });
    }
  }

  async listById(req, res, next) {
    const idArtigo = req.params.id;

    const getArtigoById = await Artigo.findOne({
      where: { id: idArtigo },
      raw: true
    });

    try {
      const {
        autor,
        titulo,
        subtitulo,
        data_publicacao,
        data_ultima_atualizacao
      } = getArtigoById;

      return res.send({
        status: "success",
        msg: "Artigo Encontrado",
        autor,
        titulo,
        subtitulo,
        data_publicacao,
        data_ultima_atualizacao
      });
    } catch (error) {
      return res.send({
        status: "error",
        msg: "Erro ao procurar artigo, tente novamente mais tarde"
      });
    }
  }

  async listByPermalink(req, res) {
    const id = req.params.id;

    try {
      const getArtigoByPermaLink = await Artigo.findOne({
        where: { permalink: id }
      });
      //todo arrumar mensagem no permalink
      const {
        autor,
        titulo,
        subtitulo,
        data_publicacao,
        data_ultima_atualizacao
      } = getArtigoByPermaLink;

      return res.send({
        status: "success",
        msg: "Artigo encontrado com sucesso",
        autor,
        titulo,
        subtitulo,
        data_publicacao,
        data_ultima_atualizacao
      });
    } catch (error) {
      return res.send({
        status: "error",
        msg: "Erro ao procurar artigo, tente novamente mais tarde"
      });
    }
  }
}

module.exports = new ArtigoController();
