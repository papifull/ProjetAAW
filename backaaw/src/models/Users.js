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
function User ({
    idUser, 
    firstName, 
    lastName
  }) {
      this.idUser = idUser;
      this.firstName = firstName;
      this.lastName = lastName;
  };
const pgClient = new pg.Client(process.env.POSTGRESQL_ADDON_URI);
pgClient.connect().then(()=>console.log("conected to databases")); 
pgClient.query(createTableText, [], (err, res) => {
    if (err) {
      throw err
    }
}) 
// add a createUser method to the prototype
User.prototype.createUser = async function() {

    try {
        const { rows } = await pgClient.query(
            `INSERT INTO users(firstName, lastName) 
            VALUES ($1, $2)`,
            [ this.firstName, this.lastName]
        );
        return rows; 
    } catch (error) {
        throw error;
    }
};
// get all users 
User.prototype.getUsers = async function() {

    try {
        const { rows } = await pgClient.query(
            `SELECT * FROM  users`
        );
        console.log(rows)
        return rows; 
    } catch (error) {
        throw error;
    }
};
module.exports = User;