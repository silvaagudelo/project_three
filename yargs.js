const nombre = {
    demand: true,
    alias: 'n'
}

const matematicas = {
    demand: true,
    alias: 'm'
}

const ingles = {
    demand: true,
    alias: 'i'
}

const programacion = {
    demand: true,
    alias: 'p'
}

const creacion= {
    nombre,
    matematicas,
    ingles,
    programacion
}

const muestraEst = {
    nombre,
}

const actualizaEst={
    nombre,
    asignatura : {
        demand:true,
        alias: "a"
    },
    calificacion : {
        demand : "true",
        alias : "c"
    }
}

const EliminaEst = {
    nombre,
}

const argv = require("yargs")
            .command("crear","crear un estudiante",creacion)
            .command("mostrarEst","Muestra un estudiante espefico",muestraEst)
            .command("actualizaest","Actualizar un la nota de un estudiante",actualizaEst)
            .command("eliminaest","Eliminar un estudiante",EliminaEst)
            .command("promedio","Consultar el promedio de un estudiante",muestraEst)
            .argv;

module.exports={
    argv
};