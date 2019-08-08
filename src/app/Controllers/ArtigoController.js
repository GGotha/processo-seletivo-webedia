const { User } = require("../models");
const { Artigo } = require("../models");
const moment = require("moment");

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
      const addArtigoBD = await Artigo.create({
        id_usuario: id,
        autor: autor,
        titulo,
        mensagem,
        subtitulo,
        data_publicacao,
        data_ultima_atualizacao
      });
      return res.json({ addArtigoBD });
    } catch (err) {
      return res.json({ err });
    }
  }

  async delete(req, res) {}
}

module.exports = new ArtigoController();
