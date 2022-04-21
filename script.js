const hourNumber = document.querySelector('.hour');
const minNumber = document.querySelector('.minute');
const secNumber = document.querySelector('.second');
const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');
const inputNumber = document.querySelector('input');
const sendBtn = document.querySelector('.submit');
const zero = document.querySelectorAll('.zero')

let timer;
let inputTimer;



function starting(){
    if (inputNumber.value != '') {
        inputTimer = setInterval(reflexTimerHandler , 1000); 
    } else{
        timer = setInterval(timerHandler , 1000); 
    }
    startBtn.disabled = true; 
}

function stoping(){
    clearTimeout(timer);
    clearTimeout(inputTimer);
    startBtn.disabled = false; 
}

function timerHandler(){
    let number = Number(secNumber.innerHTML) +  1;
    secNumber.innerHTML = number;
    if (secNumber.innerHTML > 9) {
        zero[2].classList.add('hidden');
    }

    if (secNumber.innerHTML > 59) {
        let number = Number(minNumber.innerHTML) +  1;
        minNumber.innerHTML = number;
        secNumber.innerHTML = '00';
        if (minNumber.innerHTML > 9) {
            zero[1].classList.add('hidden');
        }
    }

    if (minNumber.innerHTML > 59) {
        let number = Number(hourNumber.innerHTML) +  1;
        hourNumber.innerHTML = number;
        minNumber.innerHTML = '00';
        if (hourNumber.innerHTML > 9) {
            zero[0].classList.add('hidden');
        }
    }
}

function reflexTimerHandler(){
    if (secNumber.innerHTML < 1) {
        secNumber.innerHTML = '00';
    } else{
        let number = Number(secNumber.innerHTML) -  1;
        secNumber.innerHTML = number;
        if (secNumber.innerHTML > 9) {
            zero[2].classList.add('hidden');
        }
    }
    

    if (secNumber.innerHTML < 1) {
        if (minNumber.innerHTML < 1) {
            minNumber.innerHTML = '0';
        } else{
            let number = Number(minNumber.innerHTML) -  1;
            minNumber.innerHTML = number;
            secNumber.innerHTML = 59;
            if (secNumber.innerHTML > 9) {
                zero[1].classList.add('hidden');
            }
        }
        
    }

    if (minNumber.innerHTML < 1) {
        if (hourNumber.innerHTML < 1) {
            hourNumber.innerHTML = '0';
        } else{
            let number = Number(hourNumber.innerHTML) - 1;
            hourNumber.innerHTML = number;
            minNumber.innerHTML = 59;
            if (secNumber.innerHTML > 9) {
                zero[0].classList.add('hidden');
            }
        }
    }

    if (hourNumber.innerHTML < 1 && minNumber.innerHTML < 1 && secNumber.innerHTML < 11 ) {
        document.body.classList.add('ani');
        if (secNumber.innerHTML < 1) {
            document.body.classList.remove('ani');
        }
    }
}

function reseting(){
    secNumber.innerHTML = '00';
    minNumber.innerHTML = '0';
    hourNumber.innerHTML = '0';
    sendBtn.disabled = false;
    startBtn.disabled = false;
    sendBtn.disabled = false;
    inputNumber.disabled = false;
    inputNumber.value = '';
    stoping();
}

function calcuations(){ 
    // zero.forEach(item => item.classList.add('hidden'));
    zero[2].classList.add('hidden');
    secNumber.innerHTML = 59;
    let number = Number(hourNumber.innerHTML) + (inputNumber.value / 60);
    hourNumber.innerHTML = Math.floor(number);
    if (inputNumber.value > 1) {
        minNumber.innerHTML = Number(minNumber.innerHTML) + ((inputNumber.value % 60) - 1);
    } else{
        minNumber.innerHTML = '0';
    }

    
    startBtn.disabled = true;
    sendBtn.disabled = true;
    inputNumber.disabled = true;
    inputTimer = setInterval(reflexTimerHandler , 1000);
}

startBtn.addEventListener('click', starting);
stopBtn.addEventListener('click', stoping);
resetBtn.addEventListener('click', reseting);
sendBtn.addEventListener('click', calcuations);





