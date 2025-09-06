import * as SQLite from 'expo-sqlite';

let db = null;

export const getDatabase = async () => {
  if (!db) {
    db = await SQLite.openDatabaseAsync('produtos.db');
  }
  return db;
};