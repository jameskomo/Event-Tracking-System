const express=require("express");
const bodyParser=require("body-parser");

const app = express ();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res){
    res.sendFile(__dirname +"/index.html");
    res.write("I am experimenting with NODE and Express JS");
    res.write("I am experimenting with NODE and Express JS");
    res.send();
});

// Clock
const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

//on load grab the current date and time
const DATE = new Date();
console.log(DATE);

let hr = DATE.getHours();
let min = DATE.getMinutes();
let sec = DATE.getSeconds();
console.log("Hour: " + hr + " Minute: " + min + " Seconds: " + sec);

//set arm position based on time and date. 
let hrPosition = (hr * 360 / 12) + (min * (360 / 60) / 12);
let minPosition = (min * 360 / 60) + (sec * (360 / 60) / 60);
let secPosition = sec * 360 / 60;

function runTheClock() {


    hrPosition = hrPosition + (3 / 360);
    // 1 second over 60 seconds. 1/60th of a degree of a second hand
    minPosition = minPosition + (6 / 60);
    //360 degrees in a clock face divided by 60 seconds
    secPosition = secPosition + 6;

    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}

// reloads the clock every second
const INTERVAL = setInterval(runTheClock, 1000);
// Clock end

app.listen(3000, function(){
    console.log ("server is running on port 3000");
});
