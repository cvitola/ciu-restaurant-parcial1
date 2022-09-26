const nombre = document.querySelector('#name');
const apellido = document.querySelector('#surname');
const consulta = document.querySelector('#consulta')
const error = document.querySelector("#error");

const btnEnviar = document.querySelector('#enviar');
btnEnviar.addEventListener("click", function(event){
    event.preventDefault();
    error.innerHTML = '';
    let issue = '';
    if(nombre.value === ""){
        issue = "El nombre debe ser completado."
    }
    
    if(apellido.value ===""){
        issue+="El apellido debe ser completado."
    }
    
    if(consulta.value === ""){
        issue +="La consulta no puede estar vacia."
    }

    if(issue === ""){
        error.innerHTML = "<p>Se envian los datos</p>";
        
    }else{
        issue.split(".").forEach( (i) => {
            error.innerHTML += `<p>${i}</p>`
        })
        
    }
    issue=""

})

const btnCancelar = document.querySelector('#cancelar');
btnCancelar.addEventListener("click", function(event) {
    event.preventDefault();
    nombre.value = '';
    apellido.value = '';
    consulta.value = '';
    error.innerHTML = '';
})