// src/database/db.js
import * as SQLite from 'expo-sqlite';

let dbInstance = null;

export const getDatabase = async () => {
  if (!dbInstance) {
    dbInstance = await SQLite.openDatabaseAsync('produtos.db');
  }
  return dbInstance;
};