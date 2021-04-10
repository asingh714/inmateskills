require("dotenv").config();

const localPg = {
  host: "localhost",
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  ssl: true
};
const productionDbConnection = process.env.DATABASE_URL || localPg;

module.exports = {
  development: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: "./data/prisonerskills.db3"
    },
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done);
      }
    }
  },
  production: {
    client: "pg",
    connection: productionDbConnection,
    connectionString: process.env.DATABASE_URL,
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
    migrations: {
      directory: "./data/migrations"
    },
    // seeds: {
    //   directory: "./data/seeds"
    // },
    dialect: "postgres",
    dialectOptions: {
      ssl: true,
    },
  }
};
