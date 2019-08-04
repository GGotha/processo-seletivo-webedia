const { User } = require("../models");

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({
      where: { email },
      raw: true
    });

    console.log(user);

    if (!user) {
      return res.status(400).json({ error: "Usuário não encontrado" });
    }

    if (!(await user.checkPassword(password))) {
      return res.status(400).json({ error: "Senha inválida" });
    }

    return res
      .status(200)
      .json({ status: "success", msg: "Login efetuado com sucesso" });
  }
}

module.exports = new SessionController();
