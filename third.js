  // window.onload = function () {
  //   var audio = document.getElementById("song");

    // play after 3 seconds (3000 ms)
    // setTimeout(function () {
      // audio.play();
    // }, 3000);
  // }

var anss = "";
var c=10;
var pricepool;
var newquestion;
var play_timer;
var sCrore=document.getElementById("seven_crore");


// TIMER-----------------------------------
function timer()
{
    var time=30;
    play_timer= setInterval(function()
   {
      document.getElementById("half-circle").innerText=time;
      var audio=document.getElementById("clock");
      audio.muted=false;
      time--;   
      if(time<0)
         {
             audio.muted=true;
            clearInterval(play_timer);
             pricepool=document.getElementsByClassName("price_pool");
             if(c==10)
             {
                     Swal.fire({
                     title: "⏰ Time’s Up!",
                     text: `You didn’t answer in time. You Win Rs 0`,
                     icon: "warning",
                     confirmButtonText: "OK"
                     });
             }
             else
             {
                  Swal.fire({
                  title: "⏰ Time’s Up!",
                  text: `You didn’t answer in time. You Win ${pricepool[c+1].innerText}`,
                  icon: "warning",
                  confirmButtonText: "OK"
                  });
             }
         } 
   },1000);
}



// QUESTION BANK --------------------------
 var arr = [
  { 
  que: "Which is the smallest planet in our solar system?",
  option: ["A) Mercury", "B) Mars", "C) Venus", "D) Pluto"],
  ans: "A) Mercury" 
  },
      { 
        que: "In which year did India gain independence?",
        option: ["A) 1942", "B) 1947", "C) 1950", "D) 1952"],
        ans: "B) 1947" 
      },
      { 
        que: "What is the national animal of India?",
        option: ["A) Lion", "B) Tiger", "C) Elephant", "D) Leopard"],
        ans: "B) Tiger" 
      },
      { 
        que: "Who invented the light bulb?",
        option: ["A) Nikola Tesla", "B) Alexander Graham Bell", "C) Thomas Edison", "D) Isaac Newton"],
        ans: "C) Thomas Edison" 
      },
      { 
        que: "Which continent is known as the Dark Continent?",
        option: ["A) Asia", "B) Africa", "C) Europe", "D) Australia"],
        ans: "B) Africa" 
      },
      { 
        que: "What is the capital of Australia?",
        option: ["A) Sydney", "B) Melbourne", "C) Canberra", "D) Perth"],
        ans: "C) Canberra" 
      },
      { 
        que: "Which is the largest mammal in the world?",
        option: ["A) Elephant", "B) Blue Whale", "C) Giraffe", "D) Whale Shark"],
        ans: "B) Blue Whale" 
      },
      { 
        que: "Which festival is known as the Festival of Lights?",
        option: ["A) Holi", "B) Diwali", "C) Eid", "D) Christmas"],
        ans: "B) Diwali" 
      },
      { 
        que: "Who was the first man to step on the moon?",
        option: ["A) Yuri Gagarin", "B) Neil Armstrong", "C) Buzz Aldrin", "D) Michael Collins"],
        ans: "B) Neil Armstrong" 
      },
      { 
        que: "Which organ in the human body purifies blood?",
        option: ["A) Heart", "B) Lungs", "C) Kidney", "D) Liver"],
        ans: "C) Kidney" 
      },
      { que:"Who is known as the Father of the Nation in India?",
        option:["A)  Mahatma Gandhi","B)  Jawaharlal Nehru","C)  Sardar Patel","D)  Bhagat Singh"],
        ans:"A)  Mahatma Gandhi" },
      { que:"Which planet is known as the Red Planet?",
        option:["A)  Earth","B)  Mars","C)  Jupiter","D)  Venus"],
        ans:"B)  Mars" },
      { que:"Who was the first Prime Minister of India?",
        option:["A)  Mahatma Gandhi","B) Lal Bahadur Shastri","C)  Jawaharlal Nehru","D)  Rajendra Prasad"],
        ans:"C)  Jawaharlal Nehru" },
      { que:"Which is the national bird of India?",
        option:["A)  Parrot","B) Peacock","C)  Crow","D)  Pigeon"],
        ans:"B) Peacock" },
      { que:"How many players are there in a cricket team (on field)?",
        option:["A)  10","B) 11","C)  12","D)  9"],
        ans:"B) 11" },
      { que:"Which Indian city is known as the Pink City?",
        option:["A)  Jaipur","B) Jodhpur","C)  Udaipur","D)  Delhi"],
        ans:"A)  Jaipur" },
      { que:"Which gas do humans breathe in to survive?",
        option:["A)  Carbon dioxide","B) Oxygen","C) Nitrogen","D)  Helium"],
        ans:"B) Oxygen" },
      { que:"What is the color of chlorophyll in plants?",
        option:["A)  Red","B) Blue","C) Green","D)  Yellow"],
        ans:"C) Green" },
      { que:"Which is the largest ocean in the world?",
        option:["A)  Atlantic Ocean","B) Indian Ocean","C) Pacific Ocean","D)  Arctic Ocean"],
        ans:"C) Pacific Ocean" },
      { que:"What is the currency of Japan?",
        option:["A)  Yen","B) Yuan","C) Won","D)  Peso"],
        ans:"A)  Yen" },
      { que:"Who was the first woman Prime Minister of India?",
        option:["A)  Sonia Gandhi","B) Indira Gandhi","C) Sarojini Naidu","D)  Pratibha Patil"],
        ans:"B) Indira Gandhi" }
    ];


// QUESTION---BANK---
function que_bank()
{
    // pick question-----------------------------   
     var question = Math.floor(Math.random() * arr.length);
    document.getElementById("que_box").innerText = arr[question].que;
    anss = arr[question].ans; // storing correct answer

    // fill options 
    var op = document.getElementsByClassName("options");
    for (let i = 0; i < 4; i++) {
      op[i].style.background = "transparent";        // reset color
      op[i].innerText = arr[question].option[i];
      op[i].onclick = function () {
        Write_answer(this);
      };
    }
  
    //  remove--question---------------
     var newarr=[];
    let j=0;
    for(var i=0;i<arr.length;i++)
    {
      if(i!=question)
      {
         newarr[j]=arr[i];
         j++;
      }
    }
   arr=newarr;

}



  // Normalize text: trim, lowercase,
  function normalize(str)
      {
         return String(str).replace(/\s+/g, " ").trim().toLowerCase();
      }


// PLAY-----------------------------------
  function play_game() 
{
   que_bank();
    document.getElementById("Next").disabled = false;
    document.getElementById("Play").disabled = true;
    pricepool=document.getElementsByClassName("price_pool");
    pricepool[10].style.background="goldenrod";
    // Timer-------------------------
   timer();
  }

// NEXT-----------------------
  function next_question() 
  {
      document.getElementById("pool_box").style.display="none"
    que_bank();
    clearInterval(play_timer);
    timer();
   //  PricePool colour change----------------
     c--;
     for(var i=c;i>=c;i--)
     {
        pricepool[i].style.background="goldenrod";
     }
    //  alert(c);
    
  }
// CHOOSE----------CORRECT---OPTION--
  function Write_answer(ele)
   {
       clearInterval(play_timer);
    const chosen = normalize(ele.innerText);
    const correct = normalize(anss);

    // lock all options after one click
    const options = document.getElementsByClassName("options");
    for (let i = 0; i < options.length; i++)
       {
           options[i].onclick = null;
       }

         if (chosen === correct)
            {
            ele.style.background = "green";
             if(c==0||c<0)
              {
                window.location.href = "winner.html";          
              }
            }
         else 
         {
            ele.style.background = "red";

            // highlight the correct one
            for (let i = 0; i < options.length; i++) 
               {
                  if (normalize(options[i].innerText) === correct) 
                     {
                     options[i].style.background = "green";
                     break;
                     }
               }
               document.getElementById("Next").disabled = true;
                if(c==10)
                {
                    Swal.fire({
                     title: "SORRY ",
                     text: `You won Rs 0 🎊`,
                     icon: "success"
                     });
                }
                else
                {
                   Swal.fire({
                  title: "🎉 Congratulations!",
                  text: `You won Rs ${pricepool[c+1].innerText} 🎊`,
                  icon: "success"
                  });
                }
         }
}

// FIFTY---------FIFTY-------------LIFELINE
function fifty_fifty()
{
   var img=document.getElementById("fifty_fifty");
   img.style.pointerEvents = "none";   // disable clicks
   img.style.opacity = "0.5"; 
  var options=document.getElementsByClassName("options");
  var n=0;
  for(var i=0;i<options.length;i++)
  {
     if(normalize(anss)!=normalize(options[i].innerText))
     {
        n++;
        if(n<=2)
        {
          options[i].style.background="red";
          options[i].onclick=null;
        }
     }
  }
  
}
// FLIP----------question------------
function flip_question()
{ 
   que_bank();
   var flip_img=document.getElementById("flip_question");
   flip_img.style.pointerEvents="none";
   flip_img.style.opacity="0.5";   
}
function audiencePool()
{
  document.getElementById("pool_box").style.display="flex";
  var audience_img=document.getElementById("audience_pool");
   audience_img.style.pointerEvents="none";
   audience_img.style.opacity="0.5";  
   var options=document.getElementsByClassName("options");
   var pool=document.getElementsByClassName("pool");
   for(i=0;i<options.length;i++)
   {
      if(normalize(anss)==normalize(options[i].innerText))
      {
           var per=Math.floor(Math.random()*(100-70+1))+70;
           pool[i].style.height=per+"%";
      }
      else
      {
           var per=Math.floor(Math.random()*65);
           pool[i].style.height=per+"%";
      }
   }
}

// Jqueryyy -------------------
$(document).ready(function()
{
  $(".price_pool,#lifeline,#Play,#Quit,#Next").hide().fadeIn(4000);
  $("#que_box,#A,#B,#C,#D,#half-circle").hide().fadeIn(8000);
  $("#logo").css({transform: 'rotate(360deg)', transition: 'transform 2s'});
})