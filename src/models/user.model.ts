import { ResultSetHeader, RowDataPacket } from 'mysql2';
import connection from './connection';
import { Users } from '../types/index';

const createUser = async (user: Users) => {
  const { username, vocation, level, password } = user;
  await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users(username, vocation, level, password) VALUES (?, ?, ?, ?);',
    [username, vocation, level, password],
  );
};

async function findUserByUsername(user: Users): Promise<Users> {
  const [result] = await connection.execute<RowDataPacket[]>(
    'SELECT * FROM Trybesmith.users WHERE username = ?',
    [user.username],
  );
  const [newResult] = result as Users[];
  return newResult;
}

export default { createUser, findUserByUsername };