const { User } = require("../models");

class UserController {
  async store(req, res) {
    const { name, email, password } = req.body;

    if (await User.findOne({ where: { email } })) {
      return res
        .status(400)
        .json({ status: "error", msg: "Email já cadastrado" });
    }

    try {
      const criarUsuario = await User.create({
        name,
        email,
        password
      });

      return res.send({
        status: "success",
        msg: "Usuário criado"
      });
    } catch (err) {
      return res.send({ status: "error", msg: "erro interno" });
    }
  }
}

module.exports = new UserController();
