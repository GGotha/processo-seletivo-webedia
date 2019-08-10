const request = require("supertest");

const app = require("../../src/server");
const truncate = require("../utils/truncate");

const { User } = require("../../src/app/models");

describe("Autenticar", () => {
  beforeEach(async () => {
    await truncate();
  });

  it("Deve ser possível autenticar com informações válidas", async () => {
    const user = await User.create({
      name: "Gustavo",
      email: "clashgustavo1@gmail.com",
      password: "webedia"
    });

    const response = await request(app)
      .post("/")
      .send({ email: "clashgustavo1@gmail.com", password: "webedia" });
    expect(response.status).toBe(200);
  });

  it("Nao deve ser possivel autenticar com informações inválidas", async () => {
    const user = await User.create({
      name: "Gustavo",
      email: "clashgustavo1@gmail.com",
      password: "webedia"
    });

    const response = await request(app)
      .post("/")
      .send({ email: "clashgustavo1@gmail.com", password: "errorerror" });
    expect(response.status).toBe(400);
  });

  it("Deve retornar o token jwt quando se autenticar", async () => {
    const user = await User.create({
      name: "Gustavo",
      email: "clashgustavo1@gmail.com",
      password: "webedia"
    });

    const response = await request(app)
      .post("/")
      .send({ email: "clashgustavo1@gmail.com", password: "webedia" });
    expect(response.body).toHaveProperty("token");
  });
});
