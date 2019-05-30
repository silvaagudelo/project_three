/**
 *  Definición de variables
 * */
const { writeFile, readFileSync } = require("fs");
const filename = "listado.json";
const ok = "Archivo creado con exito"
let listadoEstudiantes = [];

const crear = (estudiante)=>{
    listar();
    let est={
        nombre: estudiante.nombre,
        matematicas: estudiante.matematicas,
        ingles:estudiante.ingles,
        programacion: estudiante.programacion
    };
    if (!listadoEstudiantes.find(nom => nom.nombre == estudiante.nombre)){
        listadoEstudiantes.push(est);
        guardar(listadoEstudiantes);
    }else{
        console.log("Lo siento, no he podido realizar la creación del alumno porqu este ya existe");
    }
};

const guardar=()=>{
    let datos= JSON.stringify(listadoEstudiantes);
    writeFile(filename,datos,(err)=>{
        if (err) throw err;
        console.log(ok);
    });
};

/**
 * Función encargada de leer el archivo listado.json
 */
const listar=()=>{
    try{
        listadoEstudiantes =  JSON.parse(readFileSync("listado.json"));
    }catch(ex){
        listadoEstudiantes=[];
    }
};

/**
 * Función encagada de listar toda la información cargada en listadoEstudiantes
 */
const mostrar = () =>{
    listar();
    console.log("Notas del estudiante \n");
    listadoEstudiantes.forEach(est => {
        console.log("Alumno:" + est.nombre);
        console.log("notas:")
        console.log(" matematicas: " + est.matematicas);
        console.log(" inglés: " + est.ingles);
        console.log(" programación: " + est.programacion + "\n");
    });
};

/**
 * Función encargada de mostrar un estudiante en especifico
 * @param {Nombre del usuario a consultar} nom 
 */
const mostrarEst = (nom) => {
    if (!nom){ 
        console.log("Por indique el estudiante a consultar");
    }else{
        listar();
        let est = listadoEstudiantes.find(buscar => buscar.nombre == nom);
        if (!est){
            console.log("Alumno no existe");
        }else{
            console.log("Alumno:" + est.nombre);
            console.log("notas:")
            console.log(" matematicas: " + est.matematicas);
            console.log(" inglés: " + est.ingles);
            console.log(" programación: " + est.programacion + "\n");
        }
    }
};

/**
 * Función encargada de obtener los alumnos que ganan matemáticas 
 * */
const ganaM =() =>{
    listar();
    let ganan = listadoEstudiantes.filter(mat => mat.matematicas >= 3);
    if (ganan.length == 0){
        console.log("Ningún estudiante ha ganado la materia \n");
    }else{
        console.log("Los siguientes van ganando la materia que se describe");
        ganan.forEach(est =>{
            console.log("Alumno:" + est.nombre);
            console.log("notas:")
            console.log(" matematicas: " + est.matematicas);
        })
        
    }
};

/**
 * función encargada de obtener el promedio de los estudiantes 
 * @param {Nombre del usuario a consultar} nom 
 * */
const promedioEst= (nom)=>{
    if (!nom){ 
        console.log("Por indique el estudiante a consultar");
    }else{
        listar();
        let est = listadoEstudiantes.find(buscar => buscar.nombre == nom);
        if (!est){
            console.log("Alumno no existe");
        }else{
            console.log("el promedio del alumno " + est.nombre + " es igual a " + (est.matematicas+est.ingles+est.programacion)/3);
        }
    }
}

/**
 * Función encargada de obtener los alumnos que tienen promedio superio a 3 
 * */
const promedioSup = ()=>{
    listar();
    let estudiantes = listadoEstudiantes.filter(filter => (filter.matematicas+filter.ingles+filter.programacion)/3 >= 3);
    console.log("A continuación se detallan los alumnos que tienen promedio mayor a 3");
    estudiantes.forEach(est => {
        console.log("- " + est.nombre);
    });
}

const actualizar = (data)=>{
    
}

/**
 * Exposición de los métodos
 * */
module.exports = {
    crear,
    mostrar,
    mostrarEst,
    ganaM,
    promedioEst,
    promedioSup
}