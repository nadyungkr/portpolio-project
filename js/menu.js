//메뉴 열고 닫기
function openNav() {
    document.getElementById("gnb").style.width = "400px";
}
  
function closeNav() {
    document.getElementById("gnb").style.width = "0";
}

//autoType
var headLine = new Array();

headLine[0] = "WEB PUBLISHER. ";
headLine[1] = "FRONT-END DEVELOPER. ";
headLine[2] = "PARK HYEONJEONG. ";
var i = 0;
var j = 0;
var speed = 250;
var check = true;

window.onload = typing();

function typing()
{

   if(i <= headLine[j].length + 4) //시간 지연 주기 위해서 6
    {
      document.getElementById("autoType").innerHTML =
        headLine[j].substring(0,i);
      
      if(check) i++;
      if(!check) i--;
      
      setTimeout(typing,speed);
      
      if(i == headLine[j].length + 4)
         check = false;

      if(i == 0){
         check = true;
         j++;
         
         if(j==3) 
            j = 0;
        }
    }
}  