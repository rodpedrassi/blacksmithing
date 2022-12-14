import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { Users } from '../types/index';

const createUser = async (user: Users) => {
  const { username, vocation, level, password } = user;
  await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users(username, vocation, level, password) VALUES (?, ?, ?, ?);',
    [username, vocation, level, password],
  );
};

export default { createUser };