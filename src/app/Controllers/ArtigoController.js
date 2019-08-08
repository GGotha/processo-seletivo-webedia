const { User } = require("../models");
const { Artigo } = require("../models");
const moment = require("moment");
const crypto = require("crypto");
const Joi = require("joi");
const fs = require("fs");

class ArtigoController {
  async create(req, res) {
    const joiArtigo = Joi.object().keys({
      titulo: Joi.string()
        .min(5)
        .max(70)
        .required(),
      mensagem: Joi.string()
        .min(5)
        .required(),
      subtitulo: Joi.string()
        .min(5)
        .max(70)
        .required()
    });

    const { value: joi, error } = Joi.validate(req.body, joiArtigo);
    if (error && error.details) {
      return res.status(400).json({ status: "error", msg: error.message });
    }

    const getAllInfoUser = await User.findOne({
      where: { id: req.userId },
      raw: true
    });

    const { name: autor, id } = getAllInfoUser;

    try {
      const generateTokenPermaLink = crypto.randomBytes(20).toString("hex");

      const addArtigoBD = await Artigo.create({
        id_usuario: id,
        autor,
        titulo: joi.titulo,
        subtitulo: joi.subtitulo,
        mensagem: joi.mensagem,
        permalink: generateTokenPermaLink,
        data_publicacao: moment(),
        data_ultima_atualizacao: moment()
      });
      return res.json({
        status: "success",
        msg: "Artigo criado com sucesso!",
        autor,
        titulo: joi.titulo,
        subtitulo: joi.subtitulo,
        mensagem: joi.mensagem,
        permalink: generateTokenPermaLink,
        data_publicacao: moment(),
        data_ultima_atualizacao: moment()
      });
    } catch (error) {
      console.log(error);
      return res.json({ error });
    }
  }

  async delete(req, res) {
    const idArtigo = req.params.id;

    try {
      const getAllInfoUser = await User.findOne({
        where: { id: req.userId },
        raw: true
      });

      const { id: idCliente } = getAllInfoUser;

      const delArtigoById = await Artigo.destroy({
        where: { id_usuario: idCliente, id: idArtigo },
        raw: true
      });

      if (delArtigoById === 0) {
        return res.send({
          status: "error",
          msg: "Você não pode deletar um artigo inexistente ou de outra pessoa"
        });
      } else {
        return res.send({
          status: "success",
          msg: "Artigo deletado com sucesso"
        });
      }
    } catch (error) {
      return res.send({
        status: "error",
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
        mensagem,
        permalink,
        data_publicacao,
        data_ultima_atualizacao
      } = getArtigoById;

      return res.send({
        status: "success",
        msg: "Artigo Encontrado",
        autor,
        titulo,
        subtitulo,
        mensagem,
        permalink,
        data_publicacao,
        data_ultima_atualizacao
      });
    } catch (error) {
      return res.send({
        status: "error",
        msg: "Erro ao encontrar artigo, tente novamente mais tarde"
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
        mensagem,
        data_publicacao,
        data_ultima_atualizacao
      } = getArtigoByPermaLink;

      return res.send({
        status: "success",
        msg: "Artigo encontrado com sucesso",
        autor,
        titulo,
        subtitulo,
        mensagem,
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
