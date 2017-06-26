//ejercicio1
var array=[4,4,5,12];
var num=9;
var arrayNum=[4,4,5,12,num];
var respuesta= arrayNum.reduce(function(valorAnterior, valorActual, indice, vector){
  return valorAnterior*valorActual;
});


//ejercicio 2
function ejercicio2 (celulares,numero){
  //var celulares= [784123123, 355676784,3423543554];
  var respuesta = celulares.filter(function(elemento){
    elemento= elemento.toString();
    numero= numero.toString();
    if(elemento.substr(0,3)==numero || elemento.substr(-3)==numero)
      return true;
    else
      return false;
  });
  return respuesta;
}
console.log("Ejercicio 2 : "+ ejercicio2([784572623,12362632,238217231784],784));



//ejercicio3
var numAleatorios= [7,21,44,80,77,35];
num=7

var respuesta= numAleatorios.forEach(function(element) {
    if(element%num==0){
    console.log("Ejercicio 3: "+element);
    }
});


//ejercicio 4
function arrDobleMasUno(n){
  return n*2+1;
}
var array=[2,5,7,2,3,8,10];
var resultado = array.map(arrDobleMasUno);
console.log("Ejercicio 4: "+resultado);


//ejercicio 5
function gradosFahrenheit(grados){
  return grados*1.8+32;
}
var temperaturas = [12,24,0,100];
var resultado = temperaturas.map(gradosFahrenheit);
console.log("Ejercicio 5 : "+ resultado);



//ejercicio 6
function ejercicio6(array){
array = [1,2,3,4];
array.reduce(function(valorAnterior,valorActual ,indice , vector){
  return valorAnterior * valorActual;
});
  console.log(valorAnterior * valorActual);
}


//ejercicio7

var edad =[20,65,3,5,78];

function verificarEdad (edad){
  var respuesta = edad.filter(function(elemento){
    return elemento > 18;
  });
  return respuesta;
}
var mayoresDeEdad=verificarEdad(edad);
function ejercicio7 (edad){
  var edadFinal= 2017-edad;
  console.log(edadFinal);

}
var resultado1 = mayoresDeEdad.map(ejercicio7);
