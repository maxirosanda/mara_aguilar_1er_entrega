const calcularImc = () => {
    
    let agregar = prompt ("¿Quieres conocer tu IMC? (si, no)")
    let nombre
    let peso
    let altura
    let imcCalculado

    while (agregar === "si"){
        nombre = prompt ("Ingresa el nombre")
        peso = prompt ("Ingresa el peso")
        altura = prompt ("Ingresa la altura")
    
        imcCalculado = peso / (altura * altura)

        alert ("El IMC es " + imcCalculado)


        if (imcCalculado < 18.5) {
            alert ("IMC Abajo de lo recomendado");
        }
    
        if (imcCalculado >= 18.6) {
        
            if (imcCalculado < 25){
                
            alert ("IMC está dentro del intervalo normal");
    
            }
        }
    
        if (imcCalculado >= 26) {
            
            if (imcCalculado < 30){
                
            alert ("IMC considerado como sobrepeso");
    
            }
        }
    
        if (imcCalculado >= 31) {
            alert ("IMC considerado como obesidad");
        }

        agregar = prompt ("¿Quieres conocer el IMC de alguien más? (si, no)")


    }

}

calcularImc()