"use strict";

// const fecha = new Date(1658181121068);
// console.log(fecha)
//nos devuelve la fecha
// console.log(fecha.getDate());
//no de devuelve el dia, 
// console.log(fecha.getDay());
//el años actual menos 1900
// console.log(fecha.getYear())

// console.log(Date.now())

const addZeros = n => {
    if(n.toString().length < 2) return "0".concat(n);
    return n;
}


const actualizarHora = ()=>{
    const time = new Date();
    let hora = addZeros(time.getHours());
    let minutos = addZeros(time.getMinutes());
    let segundos = addZeros(time.getSeconds());
    document.querySelector(".hora").textContent = hora;
    document.querySelector(".minutos").textContent = minutos;
    document.querySelector(".segundos").textContent = segundos;

}

actualizarHora();

setInterval(actualizarHora, 1000);