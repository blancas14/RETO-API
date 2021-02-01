
'use strict'
const fetch = require('node-fetch');

module.exports.getPersona =async (event, context, callback) => {
    const id=event.pathParameters.id;
    const res = await fetch("https://swapi.py4e.com/api/people/"+id+"/");
    const people = await res.json();
    
    
    const personaje={       
        nombre : people.name,
        altura : people.height,
        masa : people.mass,
        color_cabello : people.hair_color,
        color_ojos : people.eye_color,
        anio_nacimiento : people.birth_year,
        genero : people.gender,
        planeta_origen : people.homeworld,
        peliculas : people.films,
        especies : people.species,
        vehiculos : people.vehicles,
        naves_estelares : people.starships,
        creado : people.created,
        editado : people.edited,
        url : people.url               
     };         

    const response = {
        statusCode: 200,
        body: JSON.stringify(personaje)
    };
    callback(null, response);
};
module.exports.getFilm =async (event, context, callback) => {
    const id=event.pathParameters.id;
    const res = await fetch("https://swapi.py4e.com/api/films/"+id+"/");
    const film = await res.json();
    
    const pelicula={ 
        titulo : film.title,
        episodio_id : film.episode_id,
        rastreo_apertura : film.opening_crawl,
        director : film.director,
        productor : film.producer,
        fecha_lanzamiento : film.release_date,
        personajes : film.characters,   
        planetas : film.planets,
        naves_estelares : film.starships,
        vehiculos : film.vehicles,
        especies : film.species,
        creado : film.created,
        editado : film.edited,
        url : film.url 
    };
    
    const response = {
        statusCode: 200,
        body: JSON.stringify(film)
    };

    callback(null, response);   
};

