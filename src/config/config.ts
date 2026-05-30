import dotenv from 'dotenv';
dotenv.config();
const _config = {
  port: process.env.PORT || 3000,
  dbUri: process.env.DB_URI || 'mongodb://localhost:27017/myapp',
  nodeEnv: process.env.NODE_ENV || 'development',
};

export default Object.freeze(_config);
