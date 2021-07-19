// Obtiene el valor que se repite con mas frecuencia
const lista3=[1,2,3,1,2,3,4,2,2,2,1];
function calcularModa(lista){
    const lista3Count = {};
    // recorre la lista
    lista.map(function(elemento){
        if(lista3Count[elemento]){ lista3Count[elemento] += 1; }
        else{     lista3Count[elemento] = 1; }
    });    
    // convertir lista3Count a arreglo
    let  lista3Array = Object.entries(lista3Count);    
    // ordenar los elementos de lista3Count en order ascendente
    lista3Array=  lista3Array.sort(function(valorAcumulado,nuevoValor){
        return valorAcumulado[1] - nuevoValor[1]
    });
    
    const moda = lista3Array[lista3Array.length-1]; // obtiene el ultimo elemento
    console.log({"Moda": moda[1] });
    return moda[1];
}
console.group("Moda");
    calcularModa(lista3);
console.groupEnd();






