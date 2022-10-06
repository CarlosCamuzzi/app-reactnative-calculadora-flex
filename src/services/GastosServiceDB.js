import Database from './DBServices';

const DB_EXEC = Database.getConnection();

export const getGastos = async () => {
  let results = await DB_EXEC('SELECT * FROM gastos');
  //console.log(results);
  return results.rows._array;
}

export const insertGastos = async (param) => {
  let results = await DB_EXEC('INSERT INTO gastos' +
    '(tipo, data, preco, valor, odometro) VALUES(?,?,?,?,?);',
    [param.tipo, param.data, param.preco, param.valor, param.odometro]);
  return results.rowsAffected;
}