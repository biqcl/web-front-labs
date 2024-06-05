function showTime() {
    let today = new Date();
    let currentTime = today.toLocaleTimeString('ru-RU');
    document.getElementById('time').innerHTML = currentTime;

    const seconds = today.getSeconds();
    const secondsDisplay = document.getElementById('seconds');
    const clockWise = document.getElementById('clockwise');
   
    secondsDisplay.innerHTML = seconds;
   
    const secondsDegree = ((seconds / 60) * 360) + 90; 
    clockWise.style.transform = `rotate(${secondsDegree}deg)`;
}
setInterval(showTime, 1000);