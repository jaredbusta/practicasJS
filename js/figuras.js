const array=[1,2,3,4,5,6,7];
// const mitad = Number.half(array.length);
// const mitad = Number(array.length)/2; // 3.5
const mitad =  array.length/2;//NaN
// const mitad = array[50%];//syntaxis error


console.log(mitad);

const PI = Math.PI;

function perimetroCuadrado(lado){
    console.log("El permíetro del cuadrado es: " + lado*4 +" cm");
    return lado * 4;
}
function areaCuadrado(lado){
    console.log("El áera del cuadrado es:" + (Math.pow(lado,2) ) + "cm cuadrados");
    return Math.pow(lado,2);
}
function perimetroTriangulo(lado1,lado2,base){
    console.log("El perímetro del triángulo es: "+ (lado1 + lado2 + base) + " cm" );
    return (lado1 + lado2 + base);
}

function areaTriangulo(base,altura){
    console.log("El área del triángulo es: " + ((base * altura)/2)+ " cm cuadrados");
    return ((base*altura)/2);
}

function perimetro_circulo(radio){
    console.log("La circunferencia del círculo es: " + ((2 * PI) * radio)+ " cm");
    return ((2 * PI) * radio);
}
function area_circulo(radio){
    console.log("El área del círculo es: "+ (PI * ( Math.pow(radio,2) )) +" cm cuadrados");
    return (PI * ( Math.pow(radio,2) ));
}



//===================================================
let lado_cuadado =5;

console.group("Cuadrado");
    perimetroCuadrado(lado_cuadado);
    areaCuadrado(lado_cuadado);
console.groupEnd();

console.group("Triángulo");
    let triangulo_lado1=5;
    let triangulo_lado2=5;
    let triangulo_base=5;
    let triangulo_altura =6;
    perimetroTriangulo(triangulo_lado1,triangulo_lado2,triangulo_base);
    areaTriangulo(triangulo_base,triangulo_altura);
console.groupEnd();

console.group("Círculo");
    let radio =5;
    perimetro_circulo(radio);
    area_circulo(radio);
console.groupEnd();


// listener de botones
function cuadradoCalcularPerimetro(){
    const lado = document.getElementById("input_cuadrado").value;
    const perimetro = perimetroCuadrado(lado);
    alert(perimetro);
    
}
function cuadradoCalcularArea(){

}
