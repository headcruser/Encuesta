
const config_db = require('../config/DBconection');
const connection = config_db();
const QUERY = 'SELECT id,opcion,voto FROM lenguajes';

let encuestaModel = {};

encuestaModel.all =(callback)=>
{
  if(connection)
  {
    connection.query(QUERY,(err,rows)=>{
      if(err){
        throw err;
      }else{
        callback(null,rows);
      }
    })
  }
};

module.exports = encuestaModel;
