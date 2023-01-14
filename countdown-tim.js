
function countdown()
{
    const newyearsdate=new Date("1 January 2023");
    const currentyear=new Date();
   const tseconds=Math.floor((newyearsdate-currentyear)/1000);
   console.log(tseconds/3600);
   const days=Math.floor(tseconds/3600/24);
   const hours=Math.floor(tseconds/3600)%24;
   const mins=Math.floor(tseconds/60)%60;
   const seconds=Math.floor(tseconds)%60;
   document.querySelector(".days").innerHTML=days;
   document.querySelector(".hours").innerHTML=hours;
   document.querySelector(".mins").innerHTML=mins;
   document.querySelector(".secs").innerHTML=seconds;

}
countdown();
setInterval(countdown,1000);