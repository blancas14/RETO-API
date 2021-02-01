'use strict'
const db=require("../db.js");
module.exports.list = (event, context, callback) => {       
    
    db.peliculas.findAll().then(pelicula=>{
        const response = {
            statusCode: 200,
            body: JSON.stringify({
                pelicula:pelicula
            })
        };

        callback(null, response);
    });
}