import jwt from 'jsonwebtoken';
import path from 'path';
import dotenv from 'dotenv';

const __dirname = path.resolve();
dotenv.config({ path: path.join(__dirname, '.env') });

// console.log(process.env);

const getUserToken = (userId) => {
  const token = jwt.sign({ userId }, process.env.SECRET_KEY, {
    expiresIn: '30d',
  });
  return token;
};

export default getUserToken;
