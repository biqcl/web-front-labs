function showDate() {
    let out = document.getElementById('current-date');
    let today = new Date();
    dateDetails = document.getElementById('date-today')
    const weekDays = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

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