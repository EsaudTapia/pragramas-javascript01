const buscarform = document.querySelector("#usuarios-form");
const username= document.querySelector("#txtBuscador");
const TbUsuariosList = document.querySelector("#TbUserList");
const reiniciar=document.querySelector("#btnReiniciar");


const getAllUsuarios= async () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=> response.json())
    .then((data)=>{
        TbUsuariosList.innerHTML = "";
        TbUsuariosList.innerHTML = data.map(
            //tabla de usuarios
            (usuario) => `  <tr>
                                <td>${usuario.id}</td>
                                <td>${usuario.name}</td>
                                <td>${usuario.username}</td>
                                <td>${usuario.email}</td>
                            </tr>`
        ).join("");
        


        console.log(data)
    })
    
   
}

window.onload= getAllUsuarios;


const buscarUsuario = (username) => {
    //determine, cuantos años, cuantos meses y cuantos días han pasado desde que nació.
    const url = `https://jsonplaceholder.typicode.com/users?username=${username}`;
    
    fetch(url)
    .then((response)=> response.json())
    .then((data)=>{
        TbUsuariosList.innerHTML = "";
        TbUsuariosList.innerHTML = data.map(
            //tabla de usuarios
            (usuario) => `  <tr>
                                <td>${usuario.id}</td>
                                <td>${usuario.name}</td>
                                <td>${usuario.username}</td>
                                <td>${usuario.email}</td>
                            </tr>`
        ).join("");
        })
}

const buscarPorfillter= (username)=>{
    
    const url = `https://jsonplaceholder.typicode.com/users`;
    fetch(url)
    .then((response)=> response.json())
    .then((data)=>{
        const result = data.filter((usuario)=> usuario.username === username);
        TbUsuariosList.innerHTML = "";
        TbUsuariosList.innerHTML = result.map(
            //tabla de usuarios
            ({id,name,username,email}) => `  <tr>
                                <td>${id}</td>
                                <td>${name}</td>
                                <td>${username}</td>
                                <td>${email}</td>
                            </tr>`
        ).join("");
    })        

}


//buscarporcoincidencias en el username
const buscarPorCoincidencias = (username) => {
    
    const url = `https://jsonplaceholder.typicode.com/users`;
    
    fetch(url)
    .then((response)=> response.json())
    .then((data)=>{
        const result = data.filter((usuario)=> usuario.username.includes(username));
        TbUsuariosList.innerHTML = "";
        TbUsuariosList.innerHTML = result.map(
            //tabla de usuarios
            ({id,name,username,email}) => `  <tr>
                                <td>${id}</td>
                                <td>${name}</td>
                                <td>${username}</td>
                                <td>${email}</td>
                            </tr>`
        ).join("");
        })
}

buscarform.onsubmit=(event)=>{
    event.preventDefault(); //para que no se haga envio
    const re=buscarPorCoincidencias(username.value);    
    buscarform.reset();
}




reiniciar.onclick=()=>{
    getAllUsuarios();
}