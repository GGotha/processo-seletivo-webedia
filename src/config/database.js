module.exports = {
  host: process.env.HOST,
  username: process.env.USER,
  password: process.env.PASS,
  database: process.env.DATABASE,
  dialect: "mysql",
  operatorAliases: false,
  logging: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
};
