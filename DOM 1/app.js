console.log("<<<<<<<< Ejercicio 1.1 >>>>>>>>");

/* 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme */

console.log(document.querySelector(".showme").value);


console.log("<<<<<<<< Ejercicio 1.2 >>>>>>>>");
/* 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado */

console.log(document.querySelector("#pillado"));


console.log("<<<<<<<< Ejercicio 1.3 >>>>>>>>");
/* 1.3 Usa querySelector para mostrar por consola todos los p */


console.log(document.querySelectorAll("p"));


console.log("<<<<<<<< Ejercicio 1.4 >>>>>>>>");
/* 1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon */


console.log(document.querySelectorAll(".pokemon"));



console.log("<<<<<<<< Ejercicio 1.5 >>>>>>>>");
/* 1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo 
data-function="testMe". */


console.log(document.querySelectorAll("[data-function='testMe']")); // No se puede usar el mismo tipo de comillas



console.log("<<<<<<<< Ejercicio 1.6 >>>>>>>>");
/* 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
data-function="testMe". */

console.log(document.querySelectorAll("[data-function='testMe']")[3]);  // No se puede usar el mismo tipo de comillas