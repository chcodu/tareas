const argv = require('./config/yargs').argv;
const porHacer = require('./porHacer/porHacer');
const color = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        let listado = porHacer.getListado();

        for (let tarea of listado) {
            console.log('===== POR HACER ====='.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('======================='.green);

        }

        break;
    case 'crear':

        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'actualizar':

        let actualizo = porHacer.actualizar(argv.descripcion, argv.completado);

        if (actualizo) {
            console.log('Registro actualizado');

        } else {
            console.log('No se actualizó');

        }

        break;

    case "borrar":

        let borrar = porHacer.borrar(argv.descripcion);
        if (borrar) {
            console.log('Registro Borrado');

        } else {
            console.log('Registro No Borrado');
        }
        break;

    default:
        console.log('Comando no reconocido');
        break;
}