
//const idioma = localStorage.getItem("idioma");
const html = document.documentElement;


    if(idioma == "es"){
        html.setAttribute("lang", "es");
    }



    else if(idioma == "en"){
        html.setAttribute("lang", "en");
    }


console.log(html);
