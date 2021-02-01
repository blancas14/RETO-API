
'use strict'

const db=require("../db.js");

module.exports.create = (event, context, callback) => {
    
    const datetime = new Date().toISOString();
    const pelicula = JSON.parse(event.body);

    const params = {                    
            titulo : pelicula.title,
            episodio_id : pelicula.episode_id,
            rastreo_apertura : pelicula.opening_crawl,
            director : pelicula.director,
            productor : pelicula.producer,
            fecha_lanzamiento : pelicula.release_date,
            personajes : pelicula.characters,   
            planetas : pelicula.planets,
            naves_estelares : pelicula.starships,
            vehiculos : pelicula.vehicles,
            especies : pelicula.species,
            creado : datetime,
            editado : datetime,
            url : pelicula.url         
    };
    
    db.peliculas.create({
        pelicula:params

    }).then(pel=>{
        return callback(null,{
            statusCode:200,
            body:JSON.stringify({
                pelicula:pel
            })
        })
    });
    
}