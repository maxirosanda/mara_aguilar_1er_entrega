const pacientes = [
    {
        curp:1,
        nombre: "Maria",
        apellido:"Lopez",
        direccion:"barcala 8754",
        localidad:"Ramos Mejia",
        tel:125345342525,
        consultas:[
            {
                fecha: "12/07/2023",
                hora:"12:00",
                anotaciones:"jdhgosiag dsfiosfjsoi dsioisdjoi djifsipfj",
                altura:1.8,
                peso:88,
                imcCalculado:23
            },
            {
                fecha: "14/08/2023 12:00hs",
                anotaciones:"jdhgosiag dsfiosfjsoi dsioisdjoi djifsipfj",
                peso:80,
                altura:1.80,
                imcCalculado:22
            }
        ]

    }
]

const pedirDatos = () =>{
    let nuevoPaciente = confirm("Usted es nuevo paciente")

    if(nuevoPaciente){
        const curp = prompt("Ingrese su curp")
        const nombre = prompt("Ingrese su nombre")
        const apellido = prompt("Ingrese su apellido")
        const direccion = prompt("Ingrese su direccion")
        const localidad = prompt("Ingrese su localidad")
        const tel = prompt("Ingrese su telefono")
        
        const paciente = {
            curp,
            nombre,
            apellido,
            direccion,
            localidad,
            tel,
            consultas:[]
        }
        pacientes.push(paciente)
        alert("paciente agregado a la base de datos")
    }else{
        alert("paciente ya registrado")
    }
}
const calcularImc = () =>{
    let iniciarCalculo = confirm("¿Quieres conocer tu IMC?")

    if(iniciarCalculo){
        const curp = prompt("Ingresa su curp")
        const peso = parseFloat(prompt("Ingresa el peso")) 
        const altura = parseFloat( prompt("Ingresa la altura"))
        const imcCalculado = peso / (altura * altura)
        alert ("El IMC es " + imcCalculado)
    
        if (imcCalculado < 18.5) {
            alert ("IMC Abajo de lo recomendado");
        } else if (imcCalculado >= 18.6 && imcCalculado < 25 ) {   
            alert ("IMC está dentro del intervalo normal");
        } else if (imcCalculado >= 26 && imcCalculado < 30) {    
            alert ("IMC considerado como sobrepeso");
        } else {
            alert ("IMC considerado como obesidad");
        }
        const anotaciones = prompt("Ingrese una anotacion")
        const fecha = new Date().toLocaleString()
        const consulta = {
            fecha,
            peso,
            altura,
            anotaciones,
            imcCalculado
        }
        const paciente = pacientes.find(paciente => paciente.curp == curp)
        paciente.consultas.push(consulta)
        alert("Gracias por elegirnos")
        console.log(pacientes)
    }
}

let iniciarConsulta = confirm("quiere iniciar una consulta")
while(iniciarConsulta){
    pedirDatos()
    calcularImc()
    iniciarConsulta = confirm("quiere iniciar una consulta")
}





