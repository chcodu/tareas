const descripcion = {
    alias: 'd'
}
const completado = {
    alias: 'c',
    default: true
}


let argv = require('yargs')
    .command('listar', 'Muestra todas las tareas por hacer', {
        descripcion
    })
    .command('crear', 'Crea una nueva tarea', {
        descripcion,
        completado
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borrar una tarea', {
        descripcion,
        completado
    })
    .help()
    .argv;


module.exports = {
    argv
}