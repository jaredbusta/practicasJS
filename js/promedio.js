// Suma los elementos de una lista y los divide entre la cantidad de items dentro de la lista
const lista1=[ 100,200,300,500 ];

function calcularPromedio(lista){
    lbl_lista_promedio = document.getElementById("lista_promedio");
    // lbl_lista_promedio.innerHTML=lista.join(",");
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return (valorAcumulado + nuevoElemento)
        }
    ); 
    const promedio = sumaLista /lista.length;
    // let lbl_promedio = document.getElementById("promedio");
    // lbl_promedio.innerHTML=promedio;
    console.log({promedio});
    return promedio;
}
console.group("promedio");
    calcularPromedio(lista1);
console.groupEnd();
