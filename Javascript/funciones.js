// funcion recursiva para aplicar clase global a todos los elementos

function recurAdd(tag)
{
    debugger;
    var temp = document.querySelector(tag);
    temp.classList.add("global");
    if(!temp.children.length>0)
    {
        return;
    }
    else
    {
        for(var i=0;i<temp.children.length;i++)
        {
            recurAdd(tag + ">" + ":nth-child("+ Number(i+1) +")");   
        }
    }
    return;
}
// funcion para quitarlos
function recurRem(tag)
{
    debugger;
    var temp = document.querySelector(tag);
    temp.classList.remove("global");
    if(!temp.children.length>0)
    {
        return;
    }
    else
    {
        for(var i=0;i<temp.children.length;i++)
        {
            recurRem(tag + ">" + ":nth-child("+ Number(i+1) +")");   
        }
    }
    return;
}

// corriendo funciones
recurAdd("html");
//recurRem("html");


