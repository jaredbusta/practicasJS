// obtiene los valores de la mitad de una lista ordenada

const lista2 = [100,200,500,400000000,43,10];
const mitadLista = parseInt(lista2.length/2);

function esPar(numero){
    return numero % 2 === 0 ? true : false ;
}
function calcularMediana(lista){
    lista = lista.sort(function(a,b){
        return a-b;
    });
    
    let mediana =0;
    if( esPar(lista.length) ){
        const elemento1 = lista[mitadLista -1];
        const elemento2 = lista[mitadLista];
        const listaMitad =[elemento1, elemento2];
        
        mediana = listaMitad.reduce(function(suma=0,siguiente){
            return suma + siguiente
        })/2;

    }else{
        mediana = lista[mitadLista];
    }
    console.log( {mediana});  
}
console.group("Mediana");
    calcularMediana(lista2);
console.groupEnd();