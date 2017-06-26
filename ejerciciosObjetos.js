var array=[4,4,5,12];
var num=9;
var arrayNum=[4,4,5,12,num];
var respuesta= arrayNum.reduce(function(valorAnterior, valorActual, indice, vector){
  return valorAnterior*valorActual;
  });
//ejercicio 1 de objetos
function rectangulo(base, altura){
  this.base= base;
  this.altura=altura;
}
  var respuesta= new rectangulo(20, 12);
  var area = respuesta.base * respuesta.altura;
  console.log(area);

// ejercicio2 objeto
function persona(nombre,dia,mes,anioNacimiento){
  this.nombre = nombre;
  this.dia = dia;
  this.mes = mes;
  this.anioNacimiento= anioNacimiento;
}
  var respuesta = new persona("Diana María",10,10,1994);
  var diaEnAnios= respuesta.dia/365;
  var mesEnAnios= respuesta.mes/12;
  var anioTotal=diaEnAnios + mesEnAnios + respuesta.anioNacimiento;
  var edad= 2017-anioTotal;
  edad=parseInt(edad);
  console.log("La edad actual de " + respuesta.nombre+ " es "+edad);

//ejercici3 objetos
function ultimoEjercicio(nombre,edad,pasatiempo){
  this.nombre = nombre;
  this.edad = edad;
  this.pasatiempo = pasatiempo;
}
  var respuesta = new ultimoEjercicio("Diana Maria",22,"Jugar voley");
  nombre = x.nombre;
  console.log("Hola soy "+ respuesta.nombre + " tengo "+ respuesta.edad + " años y me gusta "+ respuesta.pasatiempo);
