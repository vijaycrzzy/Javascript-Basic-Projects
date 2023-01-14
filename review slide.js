var reviews=[
    {
      id:1,
     image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Sundar_pichai.png/220px-Sundar_pichai.png",
      name: "Sundar Pichai",
      role: "Software Engineer",
      text: "Collaborate with systems analysts, engineers, programmers, and others to design systems and gather information on project limitations, capabilities, performance requirements, and interfaces.Alter existing software to resolve mistakes and errors, facilitate its adaptation to new hardware, and improve its overall performance."
    },
   {
    id:2,
    image:"https://cdn.profoto.com/cdn/053149e/contentassets/d39349344d004f9b8963df1551f24bf4/profoto-albert-watson-steve-jobs-pinned-image-original.jpg?width=1280&quality=75&format=jpg",
    name:"Steve Jobs",
    role:"Developer",
    text:"Developers, also known as software developers or computer programmers, are responsible for developing, coding, installing, and maintaining software systems. Developers form a key part of the IT team and may be required to modify existing software products or develop entirely new resources.Researching and designing new software systems, websites, programs, and applications."
   },
   {
    id:3,
    image:"https://upload.wikimedia.org/wikipedia/commons/7/78/MS-Exec-Nadella-Satya-2017-08-31-22_%28cropped%29.jpg",
    name:"Satya Nadella",
    role:"CEO",
    text:"Developing high quality business strategies and plans ensuring their alignment with short-term and long-term objectives.Leading and motivating subordinates to advance employee engagement develop a high performing managerial team"
   },
   {
    id:4,
    image:" https://render.fineartamerica.com/images/rendered/default/flat/round-beach-towel/images/artworkimages/medium/1/elon-musk-greg-joens.jpg?&targetx=0&targety=-98&imagewidth=787&imageheight=985&modelwidth=788&modelheight=788&backgroundcolor=F8F8F8&orientation=0",
    name:"Elon Musk",
    role:"UX Designer",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores dolor necessitatibus optio at architecto? Quae non fugit adipisci consectetur tenetur consequatur. Perferendis quo dolore, nesciunt autem, quam veniam perspiciatis necessitatibus porro suscipit magnam distinctio quaerat aliquid harum! Sequi quos dignissimos esse aliquid tenetur, dolore modi aspernatur, in tempora reprehenderit corrupti."
   }
]
const image=document.getElementById("image");
const name=document.getElementById("name");
const role=document.getElementById("role");
const text=document.getElementById("text");
let item=0;
window.addEventListener("DOMContentLoaded",function()
{
    showperson(item);
}
)
function showperson(item)
{
    image.src=reviews[item].image;
    name.textContent=reviews[item].name;
    role.textContent=reviews[item].role;
    text.textContent=reviews[item].text;
}
function next()
{
    item++;
    if(item>reviews.length-1)
    {
        item=0;
    }
    showperson(item);
    
   
}
function prev()
{
    item--;
    if(item<0)
    {
        item=reviews.length-1;
    }
    showperson(item);
}
var surpurise=document.getElementById("suprise");
surpurise.addEventListener("click",function()
{
    var item=getrandom();
    showperson(item)
}
)
function getrandom()
{
    return Math.floor(Math.random()*reviews.length);
}
