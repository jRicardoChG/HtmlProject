function correr(tag)
{
    var temp = document.querySelector(tag);
    temp.classList.add("global");
    for(let i=0;i<temp.children.length;i++)
    {
        if(temp.children[i].children.length > 0)
        {
            correr(temp.children[i].tagName);
        }
        else
        {
            temp.children[i].classList.add("global");
        }
    }
    return;
}

correr("html");

