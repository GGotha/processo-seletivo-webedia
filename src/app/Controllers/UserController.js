const { User } = require("../models");

class UserController {
  async store(req, res) {
    const { name, email, password } = req.body;

    // const criarUsuario = await User.findOne({});

    console.log(req.body);

    if (await User.findOne({ where: { email } })) {
      return res.status(400).json({ error: "Email já cadastrado" });
    }

    try {
      const criarDatabase = await User.create({
        name,
        email,
        password
      });

      return res.send({ criarDatabase });
    } catch (err) {
      console.log(err);
      return res.send({ error: "erro interno" });
    }
  }
}

module.exports = new UserController();
