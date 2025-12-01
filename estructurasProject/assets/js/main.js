/**
 * Estructuras de Control simples
 */
const edad = 20;

if (edad >= 18) {
    document.getElementById("test").innerHTML = 'Eres mayor de edad.';
}
/**
 * Estructuras de control dobles 
 * Ejemplo #1
 */

if (edad >= 18) {
    document.getElementById('test').innerHTML = 'Eres mayor de edad.';
}

else {
    document.getElementById('test').innerHTML = 'Eres menor de edad.';
}

/**
 * Ejemplo #2
 */
const hora = new Date().getHours();
let saludo;

if (hora < 18) {
    saludo = 'Buenas tardes.';
}

else {
    saludo = 'Buenas noches.';
}
document.getElementById('test2').innerHTML = `<br>${saludo}`;

/**
 * Estructura de control multiple
 */
const dia = new Date().getDay();
let diaSemana;
switch (dia) {
    case 0:
        diaSemana = 'Domingo';
        break;
    case 1:
        diaSemana = 'lunes';
        break;
    case 2:
        diaSemana = 'martes';
        break;
    case 3:
        diaSemana = 'miercoles';
        break;
    case 4:
        diaSemana = 'jueves';
        break;
    case 5:
        diaSemana = 'viernes';
        break;
    case 6:
        diaSemana = 'sabado';
        break;
    default:
        diaSemana = 'Dia no Valido';
}
document.getElementById('test3').innerHTML = `<br>Hoy es ${diaSemana}`;
