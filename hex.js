var hex=[0,1,2,3,4,5,6,7,8,9];
var btn=document.getElementById("button");
var colorname=document.querySelector(".colors");
console.log(colorname);
btn.addEventListener("click",function()
{

  let hexcolor="#";
  let randarr=Array();
  for(let i=0;i<6;i++)
  {
   var randanum=getrandomarr();
   randarr.push(randanum);
  }
  console.log(randarr);
for(let i=0;i<6;i++)
{
    var randnum=getrandom();
    hexcolor=hexcolor+randarr[randnum];
}
document.body.style.backgroundColor=hexcolor;
colorname.textContent=hexcolor;
});
function getrandomarr()
{
    return Math.floor(Math.random()*9);
}
function getrandom()
{
    return Math.floor(Math.random()*6);
}