const weekDays = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

function showDate() {
    let out = document.getElementById('current-date');
    let today = new Date();
    dateDetails = document.getElementById('date-today')    

    out.innerHTML = `        
        <div>Дата и время для русской локали: ${today.toLocaleString('ru-RU')}</div>
        <div>Дата и время для японской локали:  ${today.toLocaleString("ja-JP")}    
        <div>Дата и время для куватской локали:  ${today.toLocaleString("ar-KW")}
        <div>Дата и время для греческой локали:  ${today.toLocaleString("el-GR")}
        <div>Дата и время для корейской локали:  ${today.toLocaleString("ko-KR")}
        <div>Дата и время для чешской локали:  ${today.toLocaleString("cs-CZ")}
        <div>Дата и время для индийской локали:  ${today.toLocaleString("kn-IN")}       
    `;

    dateDetails.innerHTML = `
        <div>Текущий год: ${today.getFullYear()}</div>
        <div>Текущий месяц: ${today.getMonth()}</div>
        <div>Текущая дата: ${today.getDate()}</div>
        <div>День недели: ${weekDays[today.getDay()]}</div>
    `;
}

function showWeekday() {
    const day = document.getElementById('dayIn').value;
    const month = document.getElementById('monthIn').value - 1; 
    const year = document.getElementById('yearIn').value;

    const date = new Date(year, month, day);   
    const dayIndex = date.getDay(); 

    const dayOfWeek = document.getElementById('weekDay');
    dayOfWeek.textContent = `Выбранная дата: ${day}.${month + 1}.${year} - ${weekDays[dayIndex]}`;

    if (day < 1 || day > 31 || isNaN(day)) {
        dayOfWeek.innerText = "Bведите корректное значение для дня!";        
    }

    if (month < 0 || month > 12 || isNaN(month)) {
        dayOfWeek.innerText = "Bведите корректное значение для месяца!";        
    }

    if (year < 1700 || year > 2100 || isNaN(year)) {
        dayOfWeek.innerText = "Bведите корректное значение для года!";        
    }
}