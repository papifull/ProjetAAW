const pg = require('pg');
const dotenv = require("dotenv");
dotenv.config();
var createTableText = `
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  firstName Varchar(20),
  lastName Varchar(20)
);
`;

module.exports = {
    connectDB : function() {
        //console.log("connecting to", process.env.POSTGRESQL_ADDON_URI);
        //Initialisation de la config de la base de données
        const pgClient = new pg.Client(process.env.POSTGRESQL_ADDON_URI);
        //Connection à la base de données
        pgClient.connect().then(()=>console.log("conected to databases")); 
        pgClient.query(createTableText, [], (err, res) => {
            if (err) {
              throw err
            }else {
                console.log(res.rows[0])
            }
        }) 
    },  
};

