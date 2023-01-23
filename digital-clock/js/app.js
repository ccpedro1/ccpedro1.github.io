let displayDay = document.querySelector("#displayDay");
let displayHour = document.getElementById('displayHour');
let displayMinutes = document.getElementById('displayMinutes');
let displaySeconds = document.getElementById('displaySeconds');
let displayAMPM = document.getElementById('displayAMPM');
const days = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB']

console.log(document.getElementById('displayAMPM'));

const updateClock = () => {
    let date = new Date();
    // O método getDay retorna um numero, então usamos um array com os dias escritos
    let getDay = days[date.getDay()];
    let getHour = date.getHours() > 12 ? (date.getHours()-12) : date.getHours();
    let getMinutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    let getSeconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
    let getAMPM = date.getHours() > 12 ? 'PM' : 'AM';
    getHour = getHour < 10 ? '0' + getHour : getHour;

    //Atualizamos todos itens do relógio
    displayDay.innerHTML = getDay;
    displayHour.innerHTML = getHour;
    displayMinutes.innerHTML = getMinutes;
    displaySeconds.innerHTML = getSeconds;
    displayAMPM.innerHTML = getAMPM;

    //Chamamos a função updateClock a cada 1 segundo
    setTimeout(updateClock, 1000);
}

updateClock();
