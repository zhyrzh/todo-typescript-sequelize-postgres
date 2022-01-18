import { Sequelize, Options } from "sequelize";
const customDbLogger = (message: string): void => {
  console.log(message);
};

const dbOptions: Options = {
  host: "localhost",
  port: 5432,
  database: "todo_app_ts_sqlize_db",
  dialect: "postgres",
  username: "postgres",
  password: "sjcs2012AdminRhyz",
  logging: customDbLogger,
  pool: {
    max: 3,
    acquire: 3000,
  },
};

const sequleize = new Sequelize(dbOptions);

async function connectDB() {
  // sequleize
  //   .authenticate()
  //   .then(() => {
  //     console.log("Database connection successful");
  //   })
  //   .catch((error) => {
  //     console.log(`Database authentication failed - Error: `, error);
  //     process.exit(1);
  //   });
  try {
    await sequleize.authenticate();
    console.log("Database connection successful");
    return sequleize;
  } catch (error) {
    console.log(`Database authentication failed - Error: `, error);
    process.exit(1);
  }
}

export { connectDB, sequleize };
