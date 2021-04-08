var myVar = setInterval(time, 1000);


function time() {
    var d = new Date();
    var m = d.getSeconds();
    document.getElementById("time").innerHTML = d.toLocaleTimeString();
    if (m % 2 == 0) {
        document.getElementById("time").style.color("white");
        document.getElementById("time").style.backgroundColor("green");

    } else {
        document.getElementById("time").style.color("white");
        document.getElementById("time").style.backgroundColor("black");
    }
}