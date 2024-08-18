// Ramdomize backgrounds
let mainScreen = document.querySelector(".clock-container");
let imgArray = ["background1.jpg", "background2.jpg", "background3.jpg", "background4.jpg", "background5.jpg"];

function randomizeImgs() {
    BGInterval = setInterval(() => {
        let randomIndex = Math.floor(Math.random() * imgArray.length);
        mainScreen.style.backgroundImage = 'url("Images/' + imgArray[randomIndex] + '")';
    }, 5000);
}

randomizeImgs();

// Run the clock
function updateClock() {
    const now = new Date();
    let hours = now.getHours().toString().padStart(2, 0);
    const meridium = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2, 0);
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);
    const timeString = `${hours}:${minutes}:${seconds} ${meridium}`;

    document.querySelector(".clock-container .clock").textContent = timeString;
}

updateClock();

setInterval(updateClock, 1000);