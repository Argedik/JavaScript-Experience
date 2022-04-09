let fullName = prompt("Adınız Nedir?")


function Hour(){
    var now = new Date()
    var hour = now.getHours()
    var minute = now.getMinutes()
    var second = now.getSeconds()

    var days = ["Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi","Pazar"]
    var toDay = days[now.getDay()-1]
    var time = hour + ":" + minute + ":" + second +" / "+ toDay
    var hour = document.getElementById("myClock").innerHTML=time
    var user = document.getElementById("myName").innerHTML = fullName
   
    return hour,user
}

setInterval(Hour, 1000)
