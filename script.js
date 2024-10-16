//definicion de una funcion
/*
function hello(){
    console.log('Hola clase');
    console.log('5IV7');

}

//lamada a la funcion 
hello();
hello();
hello();
hello();
hello();
*/

//retorno de la funcion
/*
function hello(){
    return 'Hola Clase';

}

const result = hello()

console.log(result);
*/

//funcion que retorna otra funcion
/*
function hello(){
    return function (){
        return 'hola soy la funcion 2';

    }
}

console.log(hello()())
*/
//funcion con parametros
/*
function add(x){
    console.log(x);
}
add(5)
*/
/*
function add(x,y){
    if(y===undefined){
        y=0;
    }
    console.log(x+y);
}
add(5,undefined)

//control de error en multiparametros
function add(x,y){
    if(y===undefined){
        y=0;
    }
    console.log(x+y);
}
add(5,undefined)

//parametro de tipo cadena
function add(name){
    console.log('Hola '+name);
}
add("Clase JS")

//objetos
const user = {

    nombre:'Jali Sarai',
    apellidop:'Mendez',
    apellidom:'Castro',
    edad:17,
    direccion :{
        calle:'Nicolas Bravo',
        no:598,
        colonia:'Navarrete',
        delegacion:'Los pinos'
    },
    amigos:['Raul','Maria'],
    activo:true
}
*/
//consola nombre apellidop, apellidom
//alert activo
//consola edad
//alert calle no colonia delegacion
//consola amigos
function ej(){
    const user = {

        nombre:'Jali Sarai',
        apellidop:'Mendez',
        apellidom:'Castro',
        edad:17,
        direccion :{
            calle:'Nicolas Bravo',
            no:598,
            colonia:'Navarrete',
            delegacion:'Los pinos'
        },
        amigos:['Raul','Maria'],
        activo:true
    }
    console.log(user);

}
ej();