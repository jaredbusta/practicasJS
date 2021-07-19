// analisis de informacion salarios
// limpiar datos, extraer solo los salarios
console.group("Analisis salarial");

    const salariosCol= colombia.map((persona)=>{
        return persona.salary
    });
    /**
     * Regresa la lista ordenada
     * @param {array} lista 
     * @returns {array}
     */
    function ordenaLista(lista){
        const lista_ordenada = lista.sort((a,b)=>{
            return a-b
        });
        return lista_ordenada;
    }

    function is_Pair(num){
        return num % 2 === 0;
    }

    function medianaSalarios(lista){
        const mitad = parseInt(lista.length/2);
        let mediana=0;
        if(is_Pair(lista.length)){
            const _lista = [lista[mitad-1],lista[mitad]];
            mediana = _lista.reduce((a,b)=>{
                return a+b
            })/2;
        }
        else{
            mediana = lista[mitad];
        }
        return mediana;
    }

    /**
     * Calcula la mediana del top 10 de la lista.
     * @param {array} lista 
     */
    function mediana_top10(lista){
        const spliceStart = (lista.length * (90) )/100; // obtiene el 90 % de la lista
        const spliceCount = (lista.length - spliceStart); // calcula el 10 % restante de la lista
        const salariosColTop10 = lista.splice(spliceStart,spliceCount);
        const medianaTop10 =medianaSalarios(salariosColTop10);
       return medianaTop10;
    }


    
    const salario_ordenado = ordenaLista(salariosCol);

    console.log("-----------------");
    console.log(
        {
            "Mediana_TOP_10 ":mediana_top10(salario_ordenado),
            "Mediana ":medianaSalarios(salario_ordenado),
        }
    );
console.groupEnd();