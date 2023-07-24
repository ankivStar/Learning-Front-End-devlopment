var sec = 1;

function sayHello(){
    console.log("Hello after", sec, "second");
    sec++;
    if (sec == 6){
        // stop
        clearInterval(id);
    }
}
// setTimeout(sayHello, 10000);

var id = setInterval(sayHello,1000) // to execute function multiple time