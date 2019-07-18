// funcion recursiva para aplicar clase global a todos los elementos
var parfLista = document.querySelectorAll(".cmtRecm");
var lista = document.querySelectorAll(".lista > li > input");

(function (event) {
    event.preventDefault();
    for (j = 0; j < lista.length; j++) {
        lista[j].addEventListener("click", ocultar);
    }
});


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
var ocultar = function () {
    for (i = 0; i < lista.length; i++) {
        if (lista[i].checked == false) {
            parfLista[i].classList.add("oculto");
        } else if (lista[i].checked == true) {
            parfLista[i].classList.remove("oculto");
        }
    }
}
// corriendo funciones
recurAdd("html");
//recurRem("html");