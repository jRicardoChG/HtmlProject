/*   ESTE CODIGO SE IGNORA DADO QUE SE VAN A USAR SUBCLASES CSS
// creo vectores con los elementos a añadir eventos
var parfLista = document.querySelectorAll(".cmtRecm");
var lista = document.querySelectorAll(".lista > li > input");
   
// añado los eventos click a los juegos recomendados
function eventos() {
    for (j = 0; j < lista.length; j++) {
        lista[j].addEventListener("click", ocultar);
    }
};


function ocultar() {
    for (i = 0; i < lista.length; i++) {
        if (lista[i].checked == false) {
            parfLista[i].classList.add("oculto");
        } else if (lista[i].checked == true) {
            parfLista[i].classList.remove("oculto");
        }
    }
}


*/

// funcion recursiva para aplicar clase global a todos los elementos
function recurAdd(tag) {
    var temp = document.querySelector(tag);
    temp.classList.add("global");
    if (!temp.children.length > 0) {
        return;
    } else {
        for (var i = 0; i < temp.children.length; i++) {
            recurAdd(tag + ">" + ":nth-child(" + Number(i + 1) + ")");
        }
    }
    return;
}

// funcion recursiva para quitarlas
function recurRem(tag) {
    var temp = document.querySelector(tag);
    temp.classList.remove("global");
    if (!temp.children.length > 0) {
        return;
    } else {
        for (var i = 0; i < temp.children.length; i++) {
            recurRem(tag + ">" + ":nth-child(" + Number(i + 1) + ")");
        }
    }
    return;
}

// Banner Manual con javacript //
var marginBackup = 0;
var banner = document.querySelector(".banner");
var btnDer = document.querySelector("#btnDerBanner");
var btnIzq = document.querySelector("#btnIzqBanner");
var imagenes = document.querySelector(".imgsDiv");

btnDer.addEventListener("mouseover",quitarAnimBanner);
btnDer.addEventListener("mouseout",ponerAnimBanner);

btnIzq.addEventListener("mouseover",function(){quitarAnimBanner(marginBackup)});

function quitarAnimBanner()
{
    var animado = document.querySelector(".imgsDiv > div");
    var animadoEstilo = getComputedStyle(animado);
    var margenActual = Number(animadoEstilo.getPropertyValue("margin-left").slice(0,-2));
    animado.style.webkitAnimationPlayState = "paused";
    var imagen = document.querySelectorAll(".imgsBanner")[0];
    var imagenTamano = Number(getComputedStyle(imagen).getPropertyValue("width").slice(0,-2));
    var keyframe = 0;
    /* identificando keyframes del archivo estilos*/
    var pagEstilos = document.styleSheets[0];
    debugger;
    for(i=0;i<pagEstilos.cssRules.length;i++)
    {
        if(pagEstilos.cssRules[i].type == window.CSSRule.WEBKIT_KEYFRAMES_RULE)
        {
            debugger;
            keyframe = pagEstilos[0].cssRules[i];
        }
    }

    /*if(Math.abs(margenActual)>0 && Math.abs(margenActual)<Math.abs(imagenTamano*1))
    {
        animado.style.animation = "otro 20s alternate infinite";
        animado.style.marginLeft = "0px";
        return "0px";
    }
    else if(Math.abs(margenActual)>Math.abs(imagenTamano*1) && Math.abs(margenActual)<Math.abs(imagenTamano*2))
    {
        animado.style.animation = "otro 20s alternate infinite";
        animado.style.marginLeft = "-" + Math.abs(imagenTamano)*1 + "px";
        marginBackup = "-" + Math.abs(imagenTamano)*1 + "px";
        return;
    }
    else if(Math.abs(margenActual)>Math.abs(imagenTamano*2) && Math.abs(margenActual)<Math.abs(imagenTamano*3))
    {
        animado.style.animation = "otro 20s alternate infinite";
        animado.style.marginLeft = "-" + Math.abs(imagenTamano)*2 + "px";
        marginBackup = "-" + Math.abs(imagenTamano)*2 + "px";
        return;
    }
    else if(Math.abs(margenActual)>Math.abs(imagenTamano*3) && Math.abs(margenActual)<Math.abs(imagenTamano*4))
    {
        animado.style.animation = "otro 20s alternate infinite";
        animado.style.marginLeft = "-" + Math.abs(imagenTamano)*3 + "px";
        marginBackup = "-" + Math.abs(imagenTamano)*3 + "px";
        return;
    }
    else if(Math.abs(margenActual)>Math.abs(imagenTamano*4) && Math.abs(margenActual)<Math.abs(imagenTamano*5))
    {
        animado.style.animation = "otro 20s alternate infinite";
        animado.style.marginLeft = "-" + Math.abs(imagenTamano)*4 + "px";
        marginBackup = "-" + Math.abs(imagenTamano)*4 + "px";
        return;
    }*/


} 

function ponerAnimBanner(parametro)
{
    var animado = document.querySelector(".imgsDiv > div");
    var animadoEstilo = getComputedStyle(animado);
    var margenActual = animadoEstilo.getPropertyValue("margin-left");
    animado.style.animation = "algo 20s infinite alternate";
}

// corriendo funciones
//window.onload = recurAdd("html");
//window.onload = eventos();
//recurRem("html");