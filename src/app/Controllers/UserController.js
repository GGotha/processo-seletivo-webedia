const { User } = require("../models");
const Joi = require("joi");

class UserController {
  async store(req, res) {
    const { email } = req.body;

    const joiUser = Joi.object().keys({
      name: Joi.string()
        .min(4)
        .max(30)
        .required(),
      email: Joi.string()
        .min(10)
        .required(),
      password: Joi.string()
        .min(8)
        .max(30)
        .required()
    });

    const { value: joi, error } = Joi.validate(req.body, joiUser);
    if (error && error.details) {
      return res.status(400).json({ status: "error", msg: error.message });
    }

    if (await User.findOne({ where: { email } })) {
      return res
        .status(400)
        .json({ status: "error", msg: "Email já cadastrado" });
    }

    try {
      const criarUsuario = await User.create({
        name: joi.name,
        email: joi.email,
        password: joi.password
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
