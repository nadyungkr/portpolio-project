//메뉴 열고 닫기
function openNav() {
    document.getElementById("nav").style.width = "300px";
    document.getElementById("fullpage").style.marginLeft = "300px";
}
  
function closeNav() {
    document.getElementById("nav").style.width = "0";
    document.getElementById("fullpage").style.marginLeft = "0";
}

//autoType
var headLine = new Array();

headLine[0] = "WEB PUBLISHER. ";
headLine[1] = "FRONT-END DEVELOPER. ";
headLine[2] = "PARK HYEONJEONG. ";
var i = 0;
var j = 0;
var speed = 150;
var check = true;

window.onload = typing();

function typing()
{

   if(i <= headLine[j].length + 10) //시간 지연 주기 위해서 10
    {
      document.getElementById("autoType").innerHTML =
        headLine[j].substring(0,i);
      
      if(check) i++;
      if(!check) i--;
      
      setTimeout(typing,speed);
      
      if(i == headLine[j].length + 10)
         check = false;

      if(i == 0){
         check = true;
         j++;
         
         if(j==3) 
            j = 0;
        }
    }
}