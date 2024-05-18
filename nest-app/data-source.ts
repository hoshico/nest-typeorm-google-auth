import { config } from 'dotenv';
import { DataSource } from 'typeorm';

// 環境変数のロード
const env = process.env.NODE_ENV || 'development';
config({ path: `.env.${env}` });

export default new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: ['src/entities/*.ts'],
  migrations: ['src/migrations/*.ts'],
});
