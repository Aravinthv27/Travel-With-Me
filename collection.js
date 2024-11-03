var newarrival=document.querySelector(".new-arrival")
var inputsearch=document.querySelector(".search-bar")
var div=document.querySelectorAll(".newcontainer")

inputsearch.addEventListener("keyup",function(event)
{
    var enteredvalue=event.target.value.toUpperCase();
    
    for(var i=0;i<div.length;i++)
    {         
        var productpara=div[i].querySelector("p");
        if(productpara)
        {
            var productname=productpara.textContent.toUpperCase();
        if(productname.indexOf(enteredvalue)<0)
        {
          div[i].style.display="none";
        }
        else
        {
          div[i].style.display="block";
        }
    }
    }
})

/*Side menu bar open and close Function*/
var navsidemenu=document.querySelector(".nav-sidemenu")
function showsidenav()
{
    navsidemenu.style.left="0%"   

}
function hidesidenav()
{

    navsidemenu.style.left="-60%    " 

}
