const prompt = require("prompt-sync")();
var time = parseInt(prompt("Enter time \n"));

function timer(){
    console.log(time);
    time--;
    if(time == -1){
        clearInterval(id);
    }
    return;
}

var id = setInterval(timer, 1000);