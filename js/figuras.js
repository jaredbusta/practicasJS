const PI = Math.PI;

function perimetroCuadrado(lado){
    console.log("El permíetro del cuadrado es: " + lado*4 +" cm");
}
function areaCuadrado(lado){
    console.log("El áera del cuadrado es:" + (Math.pow(lado,2) ) + "cm cuadrados");
}
function perimetroTriangulo(lado1,lado2,base){
    console.log("El perímetro del triángulo es: "+ (lado1 + lado2 + base) + " cm" );
}

function areaTriangulo(base,altura){
    console.log("El área del triángulo es: " + ((base * altura)/2)+ " cm cuadrados");
}

function perimetro_circulo(radio){
    console.log("La circunferencia del círculo es: " + ((2 * PI) * radio)+ " cm");

}
function area_circulo(radio){
    console.log("El área del círculo es: "+ (PI * ( Math.pow(radio,2) )) +" cm cuadrados");
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
