const { User } = require("../models");

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({
      email,
      raw: true
    });

    console.log(user);

    if (!user) {
      return res.status(400).json({ error: "Usuário não encontrado" });
    }

    if (!(await user.compareHash(password))) {
      return res.status(400).json({ error: "Senha inválida" });
    }

    return res.json({ user });
  }
}

module.exports = new SessionController();
