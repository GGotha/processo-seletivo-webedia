const { User } = require("../models");
const bcrypt = require("bcryptjs");

class UserController {
  async store(req, res) {
    const { name, email, password } = req.body;

    if (await User.findOne({ where: { email } })) {
      return res.status(400).json({ error: "Email já cadastrado" });
    }

    // const password_hash = await bcrypt.hash(password, 8);

    try {
      const criarUsuario = await User.create({
        name,
        email,
        password
      });

      console.log("usuario cadastrado");

      return res.send({ criarUsuario });
    } catch (err) {
      console.log(err);
      return res.send({ error: "erro interno" });
    }
  }
}

module.exports = new UserController();
