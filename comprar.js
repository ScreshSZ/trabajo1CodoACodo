const btnComprar = document.querySelector(".btnComprar");
const btnBorrar = document.querySelector(".btnBorrar");
const pagar = document.querySelector(".pagar")
const categoria = document.querySelector(".categoria")
const cantidad = document.querySelector(".cantidad")
const ticket = 200



let total = 0

btnComprar.addEventListener("click", ()=>{


    if(categoria.value === "Estudiante"){
        total = (ticket * cantidad.value) - ((cantidad.value * ticket) / 100 * 80);
    }else if (categoria.value === "Trainee"){
        total = (ticket * cantidad.value) - (cantidad.value * ticket) / 100 * 50;
    }else if(categoria.value === "Junior"){
        total = (ticket * cantidad.value) - (cantidad.value * ticket) / 100 * 15;
    }

    pagar.textContent = total

})

btnBorrar.addEventListener("click", ()=>{
    total = 0

    pagar.textContent = total

})