
function ingresarMensaje (mensaje) {
    let string = prompt(mensaje).toLowerCase()
        return string;

}

function ingresarNum (mensaje) {
    let numero = Number(prompt(mensaje))
    while (isNaN(numero)) {
        alert(`Se debe ingresar un numero`)
        numero = Number(prompt(mensaje))
    }
    return numero;
}

alert(`CONVERSOR DE MEDIDAS`)

let unidad 
do {
unidad = ingresarNum(`Ingresa el tipo de medida a convertir.\n    1  Longitud.\n     2  Superficie(proximamente).\n     3  Volumen(proximamente).\n     4  Peso(proximamente).\n     5  SALIR.`)

switch (unidad) {
    
        case 1:
                let medida
                do {
                    medida = ingresarNum(`Ingresa la unidad de medida a convertir.\n    1  milimetros.\n     2  pulgadas.\n     3  pies.\n     4  yardas.\n     5  ATRAS.`) 
                    
                    switch (medida){
                                
                                case 1:
                                    let milimetros = ingresarNum(`Ingresa la cantidad de milimetros a convertir.`)
                                    let deseadam = ingresarNum(`Ingresa la unidad de medida deseada.\n     1  pulgadas.\n     2  pies.\n     3  yardas.\n     5  ATRAS.`)
                                    
                                        if (deseadam == 1) {
                                            let resultado = milimetros / 25.4
                                            alert(`${milimetros} milimetros son ${resultado.toFixed(2)} pulgadas`)
                                        } else if (deseadam == 2) {
                                            let resultado = milimetros / 304.8
                                            alert(`${milimetros} milimetros son ${resultado.toFixed(2)} pies`)
                                        } else if (deseadam == 3) {
                                            let resultado = milimetros / 914.4
                                            alert(`${milimetros} milimetros son ${resultado.toFixed(2)} yardas`)
                                        } else if (deseadam == 5) {
                                            break
                                        }else {
                                            alert(`La opcion no es valida`)
                                            
                                        }
                                    
                                    break
                                
                                case 2:
                                    let pulgadas = ingresarNum(`Ingresa la cantdad de milimetros a convertir.`)
                                    let deseadap = ingresarNum(`Ingresa la unidad de medida deseada.\n     1  milimetros.\n     2  pies.\n     3  yardas.\n     5  ATRAS.`)
                                    
                                        if (deseadap == 1) {
                                            let resultado = pulgadas * 25.4
                                            alert(`${pulgadas} pulgadas son ${resultado.toFixed(2)} milimetros`)
                                        } else if (deseadap == 2) {
                                            let resultado = pulgadas / 12
                                            alert(`${pulgadas} pulgadas son ${resultado.toFixed(2)} pies`)
                                        } else if (deseadap == 3) {
                                            let resultado = pulgadas / 36
                                            alert(`${pulgadas} pulgadas son ${resultado.toFixed(2)} yardas`)
                                        } else if (deseadap == 5) {
                                            break
                                        }else {
                                            alert(`La opcion no es valida`)
                                            
                                        }
                                    
                                    break
                                
                                case 3:
                                    let pies = ingresarNum(`Ingresa la cantidad de pies a convertir.`)
                                    let deseadaf = ingresarNum(`Ingresa la unidad de medida deseada.\n     1  milimetros.\n     2  pulgadas.\n     3  yardas.\n     5  ATRAS.`)
                                    
                                        if (deseadaf == 1) {
                                            let resultado = pies * 304.8
                                            alert(`${pies} pies son ${resultado.toFixed(2)} milimetros`)
                                        } else if (deseadaf == 2) {
                                            let resultado = pies * 12
                                            alert(`${pies} pies son ${resultado.toFixed(2)} pulgadas`)
                                        } else if (deseadaf == 3) {
                                            let resultado = pies / 3
                                            alert(`${pies} pies son ${resultado.toFixed(2)} yardas`)
                                        } else if (deseadaf == 5) {
                                            break
                                        }else {
                                            alert(`La opcion no es valida`)
                                            
                                        }
                                    
                                    break
                                
                                case 4:
                                    let yardas = ingresarNum(`Ingresa la cantidad de yardas a convertir.`)
                                    let deseaday = ingresarNum(`Ingresa la unidad de medida deseada.\n     1  milimetros.\n     2  pulgadas.\n     3  pies.\n     5  ATRAS.`)
                                    
                                        if (deseaday == 1) {
                                            let resultado = yardas * 914.4
                                            alert(`${yardas} yardas son ${resultado.toFixed(2)} milimetros`)
                                        } else if (deseaday == 2) {
                                            let resultado = yardas * 36
                                            alert(`${yardas} yardas son ${resultado.toFixed(2)} pulgadas`)
                                        } else if (deseaday == 3) {
                                            let resultado = yardas * 3
                                            alert(`${yardas} yardas son ${resultado.toFixed(2)} pies`)
                                        } else if (deseaday == 5) {
                                            break
                                        }else {
                                            alert(`La opcion no es valida`)
                                            
                                        }
                                    break
                                
                                case 5:
                                    break
                                
                                default :
                                    alert(`La opcion no es valida`)
                                    
                    }
                }while(medida != 5)
                
            break

        case 2:
            alert(`Esta opcion no esta disponible`)
            break

        case 3:
            alert(`Esta opcion no esta disponible`)
            break

        case 4:
            alert(`Esta opcion no esta disponible`)
            break

        case 5:
            alert(`Gracias por usar el programa`)
            break

        default:
            alert(`La opcion no es valida`)
            break

    }
}    while(unidad != 5)
