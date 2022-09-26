const tooglear = (item,sacar,poner) => {
    item.classList.toggle(sacar);
    item.classList.toggle(poner);
}
const cambiarModo = () => {
    const img = btnAlternar.children;
    const flag = img[0].src.includes("moon") ? true : false;
    if(flag){
       
        const estilosBody = document.querySelectorAll('.light_mood_body');
        estilosBody.forEach( (element) => {
            tooglear(element,"light_mood_body", "dark_mood_body"); 
        })
        const estilosFooter = document.querySelectorAll('.light_mood_varius');
        estilosFooter.forEach( (element) => {
            tooglear(element, "light_mood_varius", "dark_mood_varius")
        })
        
        img[0].src = "assets/sunny.png";
    } else{
        const estilosBody = document.querySelectorAll('.dark_mood_body');
        estilosBody.forEach( (element) => {
            tooglear(element,"dark_mood_body", "light_mood_body"); 
        })
        const estilosFooter = document.querySelectorAll('.dark_mood_varius');
      
        estilosFooter.forEach( (element) => {
            tooglear(element, "dark_mood_varius", "light_mood_varius")
        })
        img[0].src = "assets/moon.png";
    }



}
const btnAlternar = document.querySelector('#alternarColores');
btnAlternar.addEventListener("click", cambiarModo);