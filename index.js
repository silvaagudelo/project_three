const {argv} = require("./yargs");
const funciones = require("./funciones");
switch (argv._[0]) {
    case "crear":
        funciones.crear(argv);
        break;
    case "mostrar":
        funciones.mostrar();
        break;
    case "mostrarEst":
        funciones.mostrarEst(argv.nombre);
        break;
    case "mostrarganaM":
        funciones.ganaM();
    case "promedio":
        funciones.promedioEst(argv.nombre);
        break;
    case "promedioSuperior":
            funciones.promedioSup();
        break;
    case "actualizarNota":
        funciones.Actualizar(argv);
        break;
    default:
        break;
}