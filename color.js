var colors=["Blue","Green","Red","Yellow","Orange"];
var btn=document.getElementById("button");
var colorname=document.querySelector(".color");
btn.addEventListener("click",function()
{
    var randnum=getrandomnum();
    document.body.style.backgroundColor=colors[randnum];
    colorname.innerHTML=colors[randnum];
}
);
function getrandomnum()
{
    return Math.floor(Math.random()*colors.length);
}