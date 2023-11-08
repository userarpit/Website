
function displaydate() {
    var dt = new Date();
    document.getElementById("datevalue").innerHTML = dt.toDateString();
    document.getElementById("timevalue").innerHTML = dt.toLocaleTimeString();
    setInterval(displaydatetime, 1000);
}

function displaydatetime() {
    var dt = new Date();
    document.getElementById("timevalue").innerHTML = dt.toLocaleTimeString();
}

function login() {
    location.replace("main.html")
}