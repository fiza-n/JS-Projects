const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
const colorcode = document.querySelector('#colorcode');
const heading = document.querySelector('#heading');

const randomColor = function(){
    const hex = '0123456789ABCDEF';
    let color = '#';
    for(let i=0; i<6; i++){
        color+=hex[Math.floor(Math.random() * 16)]
    }
    return color;
}
let interval;
const startChangingColor = function(){
   interval =  setInterval(function(){
        document.body.style.backgroundColor = randomColor();
        heading.style.color = randomColor();
        colorcode.innerHTML = randomColor();
    },3000);
};

const stopChangingColor = function(){
    clearInterval(interval);
    interval = null;
};

start.addEventListener('click',startChangingColor);
stop.addEventListener('click',stopChangingColor);
