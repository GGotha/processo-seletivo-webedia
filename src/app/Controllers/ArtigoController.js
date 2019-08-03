const { User } = require("../models");
const { Artigo } = require("../models");

class ArtigoController {
  async create(req, res) {
    const { autor, titulo, subtitulo, mensagem } = req.body;

    const getIdCliente = await User.findOne({
      where: { name: autor },
      raw: true
    });

    if (!(await User.findOne({ where: { name: autor } }))) {
      return res
        .status(400)
        .json({ error: "Usuario não existe, por favor crie um conta" });
    }

    console.log(titulo);

    if (!(await titulo) === null || undefined || "") {
      return res.send({ error: "titulo não pode estar vazio" });
    }

    const {
      id: idcliente,
      createdAt: data_publicacao,
      updatedAt: data_ultima_atualizacao
    } = getIdCliente;

    // if (idcliente === null) {
    //   return res
    //     .status(400)
    //     .json({ error: "Usuário não existe, por favor crie uma conta" });
    // }
    try {
      const artigoDB = await Artigo.create({
        id_usuario: idcliente,
        autor,
        titulo,
        subtitulo,
        mensagem,
        data_publicacao,
        data_ultima_atualizacao
      });
      return res.send({
        status: "success",
        autor,
        titulo,
        subtitulo,
        mensagem,
        data_publicacao,
        data_ultima_atualizacao
      });
    } catch (err) {
      return res
        .status(400)
        .json({ status: error, msg: "Erro ao inserir dados" });
    }
  }
}

module.exports = new ArtigoController();
