
function displaydate() {
    var dt = new Date();
    document.getElementById("datevalue").innerHTML = dt.toDateString();
    document.getElementById("timevalue").innerHTML =
        dt.getHours() + ":" +
        dt.getMinutes() + ":" +
        dt.getSeconds();
    setInterval(displaydatetime, 1000);
}

function displaydatetime() {
    var dt = new Date();
    document.getElementById("timevalue").innerHTML = 
        dt.getHours() + ":" +
        dt.getMinutes() + ":" +
        dt.getSeconds();
}
