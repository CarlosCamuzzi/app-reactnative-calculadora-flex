import * as SQLite from 'expo-sqlite';

const Database = {
  getConnection: () => {
    const db = SQLite.openDatabase('fuel_manager.db');

    db.transaction((tx) => {
      tx.executeSql('CREATE TABLE IF NOT EXISTES gastos' +
        '(id INTEGER PRIMARY KEY NOT NULL,' +
        'tipo INTEGER NOT NULL, data TEXT NOT NULL,' +
        'preco REAL NOT NULL, valor REAL NOT NULL, odometro REAL NOT NULL);');
    });
    
    const ExecuteQuery = (sql, params = []) => {
      new Promise((resolve, reject) => {
        db.transaction((trans) => {
          trans.executeSql(
            sql,
            params,
            (__, results) => {
              resolve(results);
            },
            (error) => {
              reject(error);
            }
          );
        });
      });
      return ExecuteQuery;
    }  
  }
}



export default Database;