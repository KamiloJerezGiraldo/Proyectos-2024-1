

const readlineSync = require('readline-sync');

let cantidadEmpleados = 0; 
let totalNomina = 0; 
let costoHombres = 0;
let costoMujeres = 0; 
let empleadoMasCostoso = {nombre: "", costo: 0};
let costoSubsidioSecundaria = 0;
let costoPasajesExtranjeros = 0;   

cantidadEmpleados = parseInt(readlineSync.question(`Ingrese la cantidad de empleados: `)); 
if(isNaN(cantidadEmpleados)){
    console.error(`La cantidad de empleados debe ser un valor numerico`); 
}

const subsidioPrimaria = parseFloat(readlineSync.question(`Ingrese el subsidio para estudiantes de primaria: `));
const subsidioSecundaria = parseFloat(readlineSync.question(`Ingrese el subsidio para estudiantes de secundaria: `)); 
const subsidioUniversidad = parseFloat(readlineSync.question(`Ingrese subsidio para estudiantes de universidad: `)); 
const costoVuelo = parseFloat(readlineSync.question(`Ingrese el valor del tiquete aereo: `)); 

for (let i = 1; i <= cantidadEmpleados; i++){
    console.log(`\nEmpleado ${i}:`);
    const salario = parseFloat(readlineSync.question(`Ingrese el salario del empleado: `)); 
    const estrato = parseInt(readlineSync.question(`Ingrese el estrato del empleado (1, 2 o 3): `)); 
    const genero = readlineSync.question(`Género del empleado? (M/F): `).toLowerCase(); 
    const viveZonaRural = readlineSync.question(`El empleado vive en el sector rural? (Si/No): `).toLowerCase(); 
    const extranjero = readlineSync.question(`El empleado es extranjero (Si/No): `).toLowerCase();
    const cantidadHijosPrimaria = parseInt(readlineSync.question(`Ingrese la cantidad de hijos en primaria: `)); 
    const cantidadHijosSecundaria = parseInt(readlineSync.question(`Ingrese la cantidad de hijos en secundaria: `));
    const cantidadHijosUniversidad = parseInt(readlineSync.question(`Ingrese la cantidad de hijos en la Universidad: `)); 

    let subsidioEstrato = 0; 
    if (estrato === 1){
        subsidioEstrato = salario * 0.15; 
    } else if (estrato === 2){
        subsidioEstrato = salario * 0.10;
    } else if (estrato === 3 ){
        subsidioEstrato = salario * 0.05; 
    }

    let subsidioZonaRural = 0;
    if (viveZonaRural === `si`){
        subsidioZonaRural += 35000; 
    }

    if (extranjero === `si`){
        costoPasajesExtranjeros += costoVuelo * 2; 
    }

    subsidioEstrato += cantidadHijosPrimaria * subsidioPrimaria; 
    subsidioEstrato += cantidadHijosSecundaria * subsidioSecundaria; 
    subsidioEstrato += cantidadHijosUniversidad * subsidioUniversidad; 

    const costoTotalEmpleado = salario + subsidioEstrato + subsidioZonaRural + costoPasajesExtranjeros;
    totalNomina += costoTotalEmpleado;  

    if (genero === `m`){
        costoHombres += costoTotalEmpleado; 
    } else if (genero === `f`){
        costoMujeres += costoTotalEmpleado; 
    }

    if (costoTotalEmpleado > empleadoMasCostoso.costo){
        empleadoMasCostoso.nombre = `Empleado ${i}`;
        empleadoMasCostoso.costo = costoTotalEmpleado;
    }
}

costoSubsidioSecundaria = subsidioSecundaria * cantidadEmpleados; 

console.info(`1. El costo total de la nómina es: ${totalNomina}`); 
console.info(`2. El costo de la nómina de los hombres es: ${costoHombres} `);
console.info(`3. El costo de la nómina de las mujeres es: ${costoMujeres}`); 
console.info(`4. El empleado que más dinero le cuesta a la empresa: ${empleadoMasCostoso.nombre} (costo: ${empleadoMasCostoso.costo} )`);
console.info(`5. El costo total de los subsidios para los hijos en secundaria es: ${costoSubsidioSecundaria}`);
console.info(`6. El costo total de los pasajes para empleados extranjeros son: ${costoPasajesExtranjeros}`);