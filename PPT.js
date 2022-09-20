const formPPT = document.querySelector("#PPT-form");
const answerDivPPT = document.querySelector("#Ganador");
const eleccionesvs= document.querySelector("#elecciones-vs");

const PcOpcion= ()=>{
    const opciones = ["piedra", "papel", "tijera"];
    const random = Math.floor(Math.random()*3);
    return opciones[random];

}

const comparar= ( seleccion)=>{
    opcionPC = PcOpcion();    
    eleccionesvs.innerHTML = "";
    eleccionesvs.innerHTML =  ` <h4>Se escojio </h4>  <h4> Tu: ${seleccion}  -  PC: ${opcionPC} </h4>`;

    if (opcionPC == seleccion){
        return "Empate";
    }else if (opcionPC == "piedra" && seleccion == "papel"){
        return "Ganaste";
    }else if (opcionPC == "piedra" && seleccion == "tijera"){
        return "Perdiste";
    }else if (opcionPC == "papel" && seleccion == "piedra"){
        return "Perdiste";
    }else if (opcionPC == "papel" && seleccion == "tijera"){
        return "Ganaste";
    }else if (opcionPC == "tijera" && seleccion == "piedra"){
        return "Ganaste";
    }else if (opcionPC == "tijera" && seleccion == "papel"){
        return "Perdiste";
    }
}

formPPT.onsubmit= (event)=>{

event.preventDefault(); //para que no se haga envio
//traer el valor seleccionado
const seleccion = document.querySelector('input[name="opciones"]:checked').value;
const Resultado= comparar(seleccion);
answerDivPPT.innerHTML = "";
answerDivPPT.innerHTML =  `<h4>${Resultado} </h4>`


}

