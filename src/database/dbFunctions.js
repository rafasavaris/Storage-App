import { getDatabase } from './db';

export const initDB = async () => {
  const db = await getDatabase();
  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS produtos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT NOT NULL,
      preco REAL NOT NULL,
      descricao TEXT
    );
  `);
};

export const getProdutos = async () => {
  const db = await getDatabase();
  return await db.getAllAsync('SELECT * FROM produtos;');
};

export const addProduto = async ({ nome, preco, descricao }) => {
  const db = await getDatabase();
  return await db.runAsync(
    'INSERT INTO produtos (nome, preco, descricao) VALUES (?, ?, ?);',
    [nome, preco, descricao || null]
  );
};

export const deleteProduto = async (id) => {
  const db = await getDatabase();
  return await db.runAsync('DELETE FROM produtos WHERE id = ?;', [id]);
};

export const updateProduto = async ({ id, nome, preco, descricao }) => {
  const db = await getDatabase();
  return await db.runAsync(
    `UPDATE produtos
     SET nome = ?, preco = ?, descricao = ?
     WHERE id = ?;`,
    [nome, preco, descricao || null, id]
  );
};