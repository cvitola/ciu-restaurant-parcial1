function redireccionar(fuente){
    if(fuente.includes('#')){
        let desglose = fuente.split('#');
        location.href = `../${desglose[0]}.html#${desglose[1]}`
    }else{
        location.href = `../${fuente}.html`
    }
    
}




