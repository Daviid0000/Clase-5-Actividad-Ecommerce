import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  'ecomerce', 
  'root', 
  '', 
    {
      host: 'localhost',
      dialect: "mysql"
    }
  );

export const connectDB = async () => {
  await sequelize.sync()
    .then(() => {
      console.log("Connected to the database");
    })
    .catch((err) => {
      console.log("Unable to connect to the database", err);
    });
};
