function body_fun()
{
    generatecaptcha();
      var d = new Date();
      document.getElementById("time").innerText=d.toLocaleTimeString("en-us");
    setInterval(function()
    {
        var d = new Date();
    document.getElementById("time").innerText=d.toLocaleTimeString("en-us");
    },1000);
    var current_hours=d.getHours();
    if(current_hours>=4 && current_hours<12)
    {
       document.getElementById("msg").innerText="Good Morning";
       document.getElementById("morning_img").src="mornig.avif";
    }
    else if(current_hours>=12 && current_hours<16)
    {
       document.getElementById("msg").innerText="Good Afternoon";
       document.getElementById("morning_img").src="afternoon.webp";
    }
    else if(current_hours>=16 && current_hours<24)
    {
       document.getElementById("msg").innerText="Good Evening";
       document.getElementById("morning_img").src="evening.avif";
    }    
      document.getElementById("n_error").innerText = "Fill the name";
      document.getElementById("age_error").innerText="Enter Age";
      document.getElementById("email_error").innerText = "Fill the email ";
      document.getElementById("pass_error").innerText = "Enter Password";
     document.getElementById("mob_e").innerText = "Fill the Mobile ";
      document.getElementById("dob_error").innerText = "Fill the dob ";
        document.getElementById("dob_error").innerText = "Fill the dob ";
        document.getElementById("gender_error").innerText = "Select Gender";
         document.getElementById("hobby_error").innerText = "please select your Hobby";
          document.getElementById("captcha_error").innerText="Enter Captcha";
            document.getElementById("ufile_show_msg").innerText = "Upload File";
}
var vname;
var vage;
var vemail;
var vpass;
var vmobile;
var vdob;
var vgen;
var vhob;
var vcaptcha;
var vfile;
var final_str="";
// Name---------
function name_validation() 
{
    var name = document.getElementById("name").value;   
    if (name == "") {
        document.getElementById("n_error").innerText = "Fill the name";
        vname=false;
    }
    else 
    {
         var lc=name.charAt(name.length-1);
         var asciiv=lc.charCodeAt(0);
         if(asciiv>=48&&asciiv<=57)
         {
            document.getElementById("name").value=name.slice(0,-1);
         }
         else
         {
             document.getElementById("n_error").innerText = "";
             vname= true;
         }
    }
    checkform();
}
// age-------------------
  function age_validation()
 {
   var age=document.getElementById("age").value;
   if(age=="")
   {
     vage=false;
     document.getElementById("age_error").innerText="Enter Age";
   }
   else
   {
       document.getElementById("age_error").innerText="";
      var len=age.length;
      var last_char=age.charAt(len-1);
      var asci_v=last_char.charCodeAt(0);
      // console.log(len);
      // console.log(last_char);
      // console.log(asci_v);
      if(len==1&&last_char=="0"&&asci_v==48)
      {
        document.getElementById("age").value=age.slice(1);
      }
      else if(len>3)
      {
        document.getElementById("age").value=age.slice(0,3);
      }
      else if(asci_v<48||asci_v>57)
      {
        document.getElementById("age").value=age.slice(0,-1);
      }
      else
      {
         vage=true;
      }
   }
    checkform();
 }
//  EMAIL-----------------
function email_validation() 
{
    var email = document.getElementById("email").value;
    var epattern=/[A-za-z]{2,}[0-9]{1,}[@]{1}[a-z]{5}[.]{1}[a-z]{3}/
    if (email == "") {
        document.getElementById("email_error").style.color = "red";
        document.getElementById("email_error").innerText = "Fill the email ";
        vemail=false
    }
    else if(epattern.test(email)==true)
        {
            document.getElementById("email_error").innerText = "";
             document.getElementById("email").style.color = "black";
            vemail=true;
        }
    else
        {
             document.getElementById("email").style.color = "red";
              document.getElementById("email_error").style.color = "red";
            document.getElementById("email_error").innerText = "Enter Valid Email";
            vemail=false;
        }
   
    checkform();
}
// PASSWORD---------------------
 function pass_validation() 
 {
    var pass = document.getElementById("pass").value;
    document.getElementById("val").style.display = "block";

    if (pass === "")
     {
        document.getElementById("pass_error").innerText = "Enter Password";
        document.getElementById("one").style.color = "red";
        document.getElementById("two").style.color = "red";
        document.getElementById("three").style.color = "red";
        document.getElementById("four").style.color = "red";
        document.getElementById("five").style.color = "red";
        document.getElementById("val").style.display = "none";
        vpass=false;
    } 
    else
    {
        var a=0;
        document.getElementById("pass_error").innerText = "";
        // Check for uppercase letters
        if (/[A-Z]/.test(pass)) {
            document.getElementById("one").style.color = "green";
            a++;
        } else {
            document.getElementById("one").style.color = "red";
        }

        // Check for lowercase letters
        if (/[a-z]/.test(pass)) {
             a++;
            document.getElementById("two").style.color = "green";
        } else {
            document.getElementById("two").style.color = "red";
        }

        // Check for numbers
        if (/[0-9]/.test(pass)) {
             a++;
            document.getElementById("four").style.color = "green";
        } else {
            document.getElementById("four").style.color = "red";
        }

        // Check for special characters
        if (/[^A-Za-z0-9]/.test(pass)) {
             a++;
            document.getElementById("three").style.color = "green";
        } else {
            document.getElementById("three").style.color = "red";
        }

        // Check password length greater than 7
        if (pass.length > 7) {
             a++;
            document.getElementById("five").style.color = "green";
        } else {
            document.getElementById("five").style.color = "red";
        }
        if(a==5)
        {
             vpass=true;
        }
        else
        {
            vpass=false;
        }
    }
    checkform();
}
function mob_validation()
    {
        var mob= document.getElementById("mob").value;
        if (mob== "") 
        {
            document.getElementById("mob_e").innerText = "Fill the Mobile ";
            vmobile=false;
        }
       
        else {
            ml=mob.length;
            var lastchar=mob.charAt(ml-1);
            var asscci_v=lastchar.charCodeAt(0);
            if(asscci_v>=48 && asscci_v<=57)
            {
                if(ml<10)
                {
                    document.getElementById("mob_e").innerText = "Fill Enter 10 digits ";
                    vmobile=false;
                }
                else if(ml>10)
                {
                    document.getElementById("mob").value=mob.slice(0,10);
                    vmobile=false;
                }
                else
                {
                    document.getElementById("mob_e").innerText = "";
                    vmobile=true
                }
            }
           else
           {
            document.getElementById("mob").value=mob.slice(0,-1);
            vmobile=false;
           }
           
        }
        checkform();
    }
function dob_validation() 
{
    var dob= document.getElementById("dob").value;
    if (dob=="") 
    {
        document.getElementById("dob_error").innerText = "Fill the dob ";
        document.getElementById("dob").style.color = "red";
        vdob=false;
    }
    else {
        document.getElementById("dob_error").innerText = "";
        document.getElementById("dob").style.color = "black";
        vdob=true;
    }
    checkform(); 
}
// FILE-----------------------
function ufile_function(event) {
  var file = event.target.files[0]; // actual file object
  if (!file) {
    document.getElementById("ufile_show_msg").innerText = " Pls_Fill_File !!";
    document.getElementById("ufile_show_msg").style.color = "red";
    vfile = false;
  } else {
    var reader = new FileReader();
    reader.onload = function (e) {
      document.getElementById("div_image").innerHTML = `<img src="${e.target.result}" alt="Uploaded Image" style="width:330px;height:300px;">`;
    };
    reader.readAsDataURL(file); // convert to base64 so <img> can display

    document.getElementById("ufile_show_msg").innerText = "";
    vfile = true;
  }
  checkform();
}
//     // .....................Gender...............
function gender_validation()
{
    var Gender = document.getElementsByName("gender");
    var n = Gender.length;
    var count_gen = 0
    for(var i=0;i<n;i++)
    {
        if(Gender[i].checked==true)
        {
            count_gen++
        }
    }
    if(count_gen==1){
         document.getElementById("gender_error").innerText = "";
            vgen  = true;
    }
    else{
            document.getElementById("gender_error").innerText = "Select Gender";
            vgen  = false;
    }
    checkform();
}
// ...............Hobby...................
function hobby_error()
{
    var Hobby = document.getElementsByName("hobbyy");
    var n = Hobby.length;
    var count = 0;
    for(var i=0;i<n;i++)
    {
        if(Hobby[i].checked)
        {
            count++;
        }
    }
    if(count == 0)
    {
        vhob = false;
         document.getElementById("hobby_error").innerText = "please select your Hobby";
    }
    else if(count==1 )
    {
        document.getElementById("hobby_error").innerText = "please select more than 1 hobby";
        vhob = false;
    }

    else if(count>=2) 
    {
        document.getElementById("hobby_error").innerText = "";
        vhob=true

    }
    checkform();
}
 function generatecaptcha()
 {
  var str ="qwertyuiopasdfghjklzxcvbnm1234567890";
       final_str="";
       for(var i=0;i<5;i++)
       {
          var captcha=str.charAt(Math.floor(Math.random()*str.length));
          final_str+=captcha;
       }
       document.getElementById("captcha_show").value=final_str;
      //  console.log(final_str);
 }
 function refresh_captcha()
 {
    generatecaptcha();
    document.getElementById("input_captcha").value = "";
    document.getElementById("captcha_error").innerText = "";
 }
 function captcha_error()
 {
   var c=document.getElementById("input_captcha").value.trim();
   if(final_str==c)
   {
     vcaptcha=true;
     document.getElementById("captcha_error").innerText="";
   }
   else
   {
    vcaptcha=false;
    document.getElementById("captcha_error").innerText="Enter Captcha";
   }
    checkform();
 }

// // check-----------form----------
function checkform() {
    console.log( vname&&vage&&vemail&&vdob&&vgen&&vhob&&vcaptcha&&vfile);
                
    var enable_btn =   vname&&vage&&vemail&&vdob&&vpass&&vmobile&&vgen&&vhob&&vcaptcha&&vfile;
    // vname&&vage&&vemail&&vdob&&vpass&&vmobile&&vgen&&vhob&&vcaptcha&&vfile;
    if(enable_btn)
    {
        document.getElementById("submit").disabled=false;
    }
    else{
        document.getElementById("submit").disabled=true;

    }
}
  function go_to_nextpage()
    {
       window.location.href="second_page.html";
    }
  $(document).ready(function()
  {
    $("#time_box").slideDown(1000);
    $("#form").slideDown(1000);
    $("#close_eye").hide();
    $("#open_eye").click(function()
        {
          $("#open_eye").hide();
           $("#close_eye").show();
           $("#pass").attr("type","text");
        //    console.log("open");
        });
        $("#close_eye").click(function()
        {
           $("#close_eye").hide();
          $("#open_eye").show();
           $("#pass").attr("type","password");
            // console.log("close");
        });
});
