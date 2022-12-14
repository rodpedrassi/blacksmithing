import { ResultSetHeader, RowDataPacket } from 'mysql2';
import connection from './connection';
import { Product } from '../types/index';

const createProduct = async (name: string, amount: string) => {
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products(name, amount) VALUE (?, ?)',
    [name, amount],
  );
    
  const newProduct = {
    id: insertId,
    name,
    amount,
  };
    
  return newProduct;
};

const findAllProducts = async () => {
  const [result] = await connection.execute<RowDataPacket[] & Product[]>(
    'SELECT * FROM Trybesmith.products ORDER BY id',
  );
  return result;
};

export default { createProduct, findAllProducts };

//   async findOne(id: number) {
//     const [[result]] = await connection.execute<IProduct[]>(
//       'SELECT * FROM products WHERE id = ?',
//       [id],
//     );

//     return result;
//   }

//   async update(id: number, name: string, price: number) {
//     const [result] = await connection.execute<ResultSetHeader>(
//       `UPDATE products 
//              SET name = ?,
//                  price = ?
//            WHERE id = ?`,
//       [name, price, id],
//     );
//   }

//   async delete(id: number) {
//     await connection.execute<ResultSetHeader>(
//       `DELETE FROM products 
//            WHERE id = ?`,
//       [id],
//     );
//   }