import Database from './DBServices';

const DB_EXEC = Database.getConnection();

export const getGastos = async () => {
  let results = await DB_EXEC('SELECT * FROM gastos;');
  // console.log(results); // TESTE OK
  return results.rows._array;
}

export const insertGastos = async (param) => {
  let results = await DB_EXEC('INSERT INTO gastos' +
    '(tipo, data, preco, valor, odometro) VALUES(?,?,?,?,?);',
    [param.tipo, param.data, param.preco, param.valor, param.odometro]);
  return results.rowsAffected;
}

export const updateGastos = async (param) => {
  let results = await DB_EXEC('UPDATE gastos SET tipo=?, data=?,' +
    'preco=?, valor=?, odometro=? WHERE id=?;', [param.tipo, param.data, param.preco, param.valor, param.odometro, param.id]);
  return results.rowsAffected;
}

export const deleteGastos = async (id) => {
  let results = await DB_EXEC('DELETE FROM gastos WHERE id=?;', [id]);
  return results.rowsAffected;
}
