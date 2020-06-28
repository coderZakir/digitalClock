function digitalClock(){
    let date =new Date();

    let hours =date.getHours();
    let minutes =date.getMinutes();
    let secounds =date.getSeconds();
    let timeFormat ='Am';

    

    

    if(hours === 0){
        hours =  12;
    }

    if(hours > 12){
        hours =  hours - 12;
        timeFormat = 'Pm';
    }

    hours = hours < 10 ? hours ='0' + hours : hours;
    minutes = minutes < 10 ? minutes ='0' + minutes : minutes;
    secounds = secounds < 10 ? secounds ='0' + secounds : secounds;


    let finalTime = `${hours}:${minutes}:${secounds}`;

    document.getElementById('time').innerText = finalTime;
    document.querySelector('#timeFormat').innerText = timeFormat;
   
    setInterval(digitalClock, 1000);
}
digitalClock();

