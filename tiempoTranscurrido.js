const tiempoForm = document.querySelector("#tiempo-form");
const fechaNacimiento= document.querySelector("#fechanac");
const answerDivTTranscurrido = document.querySelector("#tiempo-transcurrido");

const calcularTiempoTranscurrido = (fechaNacimiento) => {
    //determine, cuantos años, cuantos meses y cuantos días han pasado desde que nació.
    const fechaNacimientoDate = new Date(fechaNacimiento);
    const fechaActual = new Date();
    const tiempoTranscurrido = fechaActual - fechaNacimientoDate;
    const tiempoTranscurridoDate = new Date(tiempoTranscurrido);
    const anios = tiempoTranscurridoDate.getUTCFullYear() - 1970;
    const meses = tiempoTranscurridoDate.getUTCMonth();
    const dias = tiempoTranscurridoDate.getUTCDate() - 1;
   
    answerDivTTranscurrido.innerHTML = "";
    answerDivTTranscurrido.innerHTML =  `<h4>  Han pasado ${anios} años, ${meses} meses y ${dias} días desde que naciste. </h4>`;
    return `Han pasado ${anios} años, ${meses} meses y ${dias} días desde que naciste.`;


    
    

    
}


tiempoForm.onsubmit= (event)=>{

    event.preventDefault(); //para que no se haga envio
    const re=calcularTiempoTranscurrido(fechaNacimiento.value);
    console.log(re);
    tiempoForm.reset();
}


