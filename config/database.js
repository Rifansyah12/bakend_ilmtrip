import { Sequelize } from "sequelize";

const db = new Sequelize('ilm_trip', 'postgres', 'Rakkha-17', {
  host: '82.29.197.69',
  dialect: 'postgres', // Menggunakan PostgreSQL
  logging: false, // Opsional: Untuk mematikan log SQL
});

export default db;
