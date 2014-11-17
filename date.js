function date(){
    var daydate = new Date();
    var n = daydate.getDate();
    document.getElementById("todaysDate").innerHTML = n;
    var day = new Date();
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    document.getElementById("todaysDate").innerHTML = days[dday.getDay()];
    var year = new Date();
    document.getElementById("todaysDate").innerHTML = year.getFullYear();
}
