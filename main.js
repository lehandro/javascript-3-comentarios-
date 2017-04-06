// var a = 1
// var b = 2

// if (false){
//     console.log('esto no se va a imprimir')
// }

// if (true){
//     console.log('esto si se va a imprimir')
// }

// if (a>b){ //false
//     console.log('a efectivamente es mayor que b, esto es falso y nunca se va a ejecutar')
// }

// if (a<b){//true
//     console.log('a es menos que b')
// }

// if(1==1){
//     console.log('1 es igual a 1')
// }

// if (1<=1){

// }

/**
 * menos que < // 1<4
 * mayor que > // 4>2
 * menor o igual que <=  //1<==4
 * mayor o igual que >= //4>==4
 * igual (o semejante) == //"1" ==1 //true
 * exactamente igual === //"1" ===1 //false
 * distinto != // 1 != 'hola' // true
 * MUY distinto !== // "1" !==1 // true
 */

// var edad = 17
// if(edad >= 18){
//     alert('puedes pasar! , eres lo sudicientemente grande')
// }else{
//     alert('eres muy joven!, te vas a disney.com')
// }


/**
 * contruir una aplicacion que le pida el nombre al usuario, tambien que le pida la edad,
 cuantos años le gustaria tener
 el programa debe indicarle al usuario cuantos años tienen que pasar o
 en cuanto tiene que rejuvenecer.
 */

var nombre = prompt("Ingresa tu Nombre")
var edad = prompt ("Ingresa tu Edad  " + nombre)
var masedad = prompt ("Cuantos años deseas tener?")
years = Math.abs(Number (edad)-Number (masedad))
if (edad < masedad){
    alert("Aun te falta  " + years + "  años  " + nombre)
}
else{
    alert("te pasaste en  " + years + "  años  " + nombre)
}
