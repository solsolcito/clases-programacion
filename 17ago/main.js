const calcularnumeros = () => {
    const sol = document.getElementById('numeros').value
    document.numeros = sol
    const arregloconnumeros = sol.split('+')

    let suma = 0;
    for (let index = 0; index < arregloconnumeros.length; index++) {
        suma = Number(arregloconnumeros[index]) + suma;
        
    }
    console.log(suma)
    
    const mostrarDiv = document.getElementById('imprimir')
        mostrarDiv.innerHTML= " resultado " + suma
}
