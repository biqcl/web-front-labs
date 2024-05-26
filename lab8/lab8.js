function showDate() {
    let out = document.getElementById('current-date');
    let today = new Date();

    out.innerHTML = 'Дата и время для русской локали: ' + today.toLocaleString("ru-RU")
    + '<br>' + 'Дата и время для японской локали: ' + today.toLocaleString("ja-JP")    
    + '<br>' + 'Дата и время для куватской локали: ' + today.toLocaleString("ar-KW")
    + '<br>' + 'Дата и время для греческой локали: ' + today.toLocaleString("el-GR")
    + '<br>' + 'Дата и время для корейской локали: ' + today.toLocaleString("ko-KR")
    + '<br>' + 'Дата и время для чешской локали: ' + today.toLocaleString("cs-CZ")
    + '<br>' + 'Дата и время для индийской локали: ' + today.toLocaleString("kn-IN");
}