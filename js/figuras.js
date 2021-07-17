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


function altura_triangulo_isosceles( lado1, lado2, lado3){
    let altura =0;
    let lados = [ lado1, lado2, lado3]; // valores desordenados
    lados.sort(); // ordenacion ascendente pos 0 y 1 son lados, posicion 2 es la base
    // valida que ningun lado sea 0 y que solo un lado sea diferente
    if(!lados.includes(0) && lados.some( (val,i)=> lados.indexOf(val) != i ) && lados[0]!=lados[2]   ){ // existe un elemento repetido
        let repetido =  lados.filter((l,i)=>lados.indexOf(l)!==i  ); // filtra los repetidos
        // identifica los lados y la base
        let lado = repetido[0];
        let base  = lados[0] !== lado ? lados[0] : lados[2]; // operador ternario para definir la base del triangulo
        altura = Math.sqrt(  Math.pow(lado,2) -  Math.pow( ( base / 2  ), 2   ) ) ; // operacion de altura
    }
    return altura;
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


function cuadradoCalcularPerimetro(){
    const lado = document.getElementById("input_cuadrado").value;
    const perimetro = perimetroCuadrado(lado);
    alert(perimetro);
    
}
function cuadradoCalcularArea(){
    const lado = document.getElementById("input_cuadrado").value;
    const perimetro = areaCuadrado(lado);
    alert(perimetro);
}
function trianguloPerimetro(){
    const lado1 = document.getElementById("input_lado_1_trinagulo").value;
    const lado2 = document.getElementById("input_lado_2_trinagulo").value;
    const lado3 = document.getElementById("input_lado_3_trinagulo").value;
    const perimetro = perimetroTriangulo( parseFloat(lado1) , parseFloat(lado2),parseFloat(lado3));
    alert(perimetro);
}
function trianguloArea(){
    const base = document.getElementById("input_base_trinagulo").value;
    const alto = document.getElementById("input_alto_trinagulo").value;
    const area = areaTriangulo( parseFloat(base) , parseFloat(alto));
    alert(area);
}
function calculaPerimetroCirculo(){
    const radio = document.getElementById("input_radio_circulo").value;
    const perimetro = perimetro_circulo(parseFloat(radio));
    alert(perimetro);
}
function calculaAreaCirculo(){
    const radio = document.getElementById("input_radio_circulo").value;
    const area = area_circulo(parseFloat(radio));
    alert(area);
}

function calcularAlturaTrianguloIsosceles(){
    const lado1= document.getElementById("input_lado_1_trinagulo_isosceles").value;
    const lado2= document.getElementById("input_lado_2_trinagulo_isosceles").value;
    const lado3= document.getElementById("input_lado_3_trinagulo_isosceles").value;
    const altura = altura_triangulo_isosceles(lado1,lado2,lado3);
    if(altura>0){
        alert("la altura es: " + altura);
    }else{
        alert("Los lados: ["+  lado1+", "+ lado2 +" y "+  lado3    + "] no cumplen con las características de un triángulo isósceles");
    }
    
}
