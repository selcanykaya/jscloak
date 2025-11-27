// Kullanıcıdan isim al
let userName = prompt("Lütfen adınızı girin:");

if (!userName || userName.trim() === "") {
    userName = "Misafir";
}

//ismi göster
document.querySelector("#name").innerText = userName;

// Sayfayı göster
document.querySelector(".container").classList.add("show");

// Saat ve gün
function showTime() {
    const date = new Date();
    const days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    const dayName = days[date.getDay()];

  
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

  
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

 
    const timeString = `${hours}:${minutes}:${seconds} ${dayName}`;

 
    document.querySelector("#myClock").innerText = timeString;

   
    setTimeout(showTime, 1000);
}

showTime();
