const fs = require('fs');

let listaPorHacer = [];

//Guardar los datos en un json
const guardarDB = () => {

        let data = JSON.stringify(listaPorHacer);

        fs.writeFile('db/data.json', data, (err) => {

            if (err) {
                throw new Error('No se pudo guardar');
            } else {
                console.log('Data guardada');
            }

        })
    }
    //Carga los datos del json al objeto listaPorHacer
const cargarDB = () => {

    try {
        listaPorHacer = require('../db/data.json');
    } catch (error) { //Si no es un json entonces inicializa el arreglo en vacío
        listaPorHacer = [];
    }

}

const crear = (descripcion) => {

    cargarDB();

    let por_hacer = {
        descripcion,
        completado: false
    }

    listaPorHacer.push(por_hacer);

    guardarDB();

    return por_hacer;
}

const getListado = () => {
    cargarDB();
    return listaPorHacer;
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();

    let indice = listaPorHacer.findIndex(tarea => tarea.descripcion === descripcion); //Realiza la busqueda del indice del arreglo donde coincida la descripción

    if (indice >= 0) {
        listaPorHacer[indice].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => {

    cargarDB();

    let nuevoListado = listaPorHacer.filter(tarea => { return tarea.descripcion !== descripcion }); //Realiza la busqueda del indice del arreglo donde coincida la descripción

    if (nuevoListado.length == listaPorHacer.length) {

        return false;
    } else {
        listaPorHacer = nuevoListado;
        guardarDB();
        return true;
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}