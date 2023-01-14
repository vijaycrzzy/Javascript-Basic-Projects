const quizquestions=[
    {
      question:"How old is Florin?",
      a:"10",
      b:"20",
      c:"25",
      d:"30",
      correct:'c',
    },
    {
        question:"What is the best programming language?",
        a:"Python",
        b:"C",
        c:"Java",
        d:"javaScript",
        correct:'a',
    },
    {    
        question:"Who is the president of USA?",
        a:"Joe Biden",
        b:"Donald Trump",
        c:"FLorin Pop",
        d:"Ivan Saldan",
        correct:'a',

    },
    {
        question:"What does HTML stand for?",
        a:"Heyper Text Markup Language",
        b:"Cacading Style Sheet",
        c:"Jason Object Notation",
        d:"Hyper Text Markup Language",
        correct:'d',
    },
    {
        question:"What year was Javascript launched?",
        a:"2002",
        b:"2019",
        c:"1995",
        d:"2013",
        correct:'c',
    }
    
];
var h=document.getElementById("h");
var op1=document.getElementById("atext");
var op2=document.getElementById("btext");
var op3=document.getElementById("ctext");
var op4=document.getElementById("dtext");
var btn=document.getElementById("button")

console.log(quizquestions[0].correct);

let i=0;
let score=0;
show();
function show()
{
   h.innerHTML= quizquestions[i].question;
   op1.innerHTML=quizquestions[i].a;
   op2.innerHTML=quizquestions[i].b;
   op3.innerHTML=quizquestions[i].c;
   op4.innerHTML=quizquestions[i].d;

}
function scorie()
{
    if(document.getElementById("a").checked)
   {
     if("a"==quizquestions[i].correct)
     {
        score++;
     }
   }
   if(document.getElementById("b").checked)
   {
     if("b"==quizquestions[i].correct)
     {
        score++;
     }
   }
   if(document.getElementById("c").checked)
   {
     if("c"==quizquestions[i].correct)
     {
        score++;
     }
   }
   if(document.getElementById("d").checked)
   {
     if("d"==quizquestions[i].correct)
     {
        score++;
     }
   }
}
function deselect()
{
  if(document.getElementById("a").checked)
  {
    document.getElementById("a").checked=false;
  }
  if(document.getElementById("b").checked)
  {
    document.getElementById("b").checked=false;
  }
  if(document.getElementById("c").checked)
  {
    document.getElementById("c").checked=false;
  }
  if(document.getElementById("d").checked)
  {
    document.getElementById("d").checked=false;
  }
}
btn.addEventListener("click",()=>
{ 
  scorie();
  deselect();
  i++;
  if(i<quizquestions.length)
  {
    show();
  }
  else
  {
    document.getElementById("quizcon").innerHTML=`<h3>You answered correctly ${score}/${quizquestions.length} questions successfully</h3>`;
  }
}

)
