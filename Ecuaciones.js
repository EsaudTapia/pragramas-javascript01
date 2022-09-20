const form = document.querySelector("#calcular-form");
const input_a = document.querySelector("#a");
const input_b = document.querySelector("#b");
const input_c = document.querySelector("#c");
const answerDiv = document.querySelector("#resultado");

let x1, x2;

const determinante= (a, b, c) => {
    return Math.pow(b,2) - 4*a*c;
}

const calcularRaizImaginaria = (a,b,c) => {
    const parteReal = -b/(2*a);
    const parteImaginaria = Math.sqrt(-determinante(a,b,c))/(2*a);
    return parteReal + " + " + parteImaginaria + "i";
}



form.onsubmit= (event)=>{
    event.preventDefault(); //para que no se haga envio
    const a = parseFloat( input_a.value);   
    const b = parseFloat(input_b.value);
    const c = parseFloat( input_c.value);

    const determinanteR =determinante(a,b,c);

    if (determinanteR>0){
        x1 = (-b + Math.sqrt(determinanteR))/(2*a);
        x2 = (-b - Math.sqrt(determinanteR))/(2*a);
        answerDiv.innerHTML = "";
        answerDiv.innerHTML =  `<h4>x1 = </h4> <h4>${x1} </h4> <br/> <h4>x2 = </h4> <h4>${x2} </h4>`;
        console.log("x1 = " + x1);
        console.log("x2 = " + x2);

    }else if (determinanteR == 0){    
        x1 = (-b + Math.sqrt(determinanteR))/(2*a); 
        answerDiv.innerHTML = "";
        answerDiv.innerHTML =  `<h4>x1 = x2 = </h4> <h4>${x1} </h4>`
        
    }else if (determinanteR < 0){
        respuesta = calcularRaizImaginaria(a,b,c);
        answerDiv.innerHTML = "";
        answerDiv.innerHTML =  `<h4>Raiz Imaginaria:</h4> <h4>${respuesta} </h4>`
    
    
    
    console.log(respuesta);
      
    }else{
        answerDiv.innerHTML = "";
        answerDiv.innerHTML =  `<h4>No se puede calcular </h4>`
       
    }





    
       

};



