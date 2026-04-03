//Tiempo
let clockTime = document.querySelector(".time__show");
//Día de la semana
let clockDay = document.querySelector(".time__day");

setInterval(() => {
    
    let myDate = new Date();
    let hours = myDate.getHours();
    let min = myDate.getMinutes();
    let day = myDate.getDay();
    
    //Sacar el día de la semana en letra
    let daysWeek = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    let nameDay = daysWeek[day];

    //Agregar el cero delante del número

    if(hours < 10) hours = "0" + hours;
    if(min < 10) min = "0" + min;

    clockTime.textContent = `${hours}:${min}`;
    clockDay.textContent = nameDay;

}, 1000);