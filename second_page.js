var audio = document.getElementById("kbcAudio");
function load_page()
{   
     audio.muted=false;
}
function check()
{
    var check=document.getElementById("check");
    if(check.checked)
    {
        document.getElementById("play").disabled=false;
    }
    else
    {
        document.getElementById("play").disabled=true;
    }
    audio.muted=true;
}
