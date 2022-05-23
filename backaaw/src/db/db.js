const pg = require('pg');
const dotenv = require("dotenv");

//Initialisation de dotenv permettant la lecture en local dans le fichier .env

module.exports = {

    connectDB : function() {
        dotenv.config();
        console.log("connecting to", process.env.POSTGRESQL_ADDON_URI);
        //Initialisation de la config de la base de données
        const pgClient = new pg.Client(process.env.POSTGRESQL_ADDON_URI);
        //Connection à la base de données
        pgClient.connect().then(()=>console.log("conected to databases"));   
        
    },
   
    
};

