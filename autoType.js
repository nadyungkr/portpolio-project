var headLine = new Array();

headLine[0] = "Web Publisher";
headLine[1] = "Front-end Developer";
headLine[2] = "Park Hyeon Jeong";
var i = 0;
var j = 0;
var speed = 100;
var test = false;

window.onload = function typing(){

    if (i < headLine[j].length+1) {
        document.getElementById("autoType").innerHTML = headLine[j].substring(0, i);
        i++;
        setTimeout(typing,speed);

        //headline[j] 다 출력이 되었을때
        if (i == headLine[j].length+1) {
            
            minus_typing();
            // i=0;
            // j++;
            // document.getElementById("autoType").innerHTML = "";
            // if(j==3) j=0;
        }

    }
}

function minus_typing(){

    if (i > 0) {

        i--;
        setTimeout(minus_typing,speed);

        
    }
}