import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */




const textarea = document.querySelector('.textarea--js');
const save = document.querySelector('.save--js');
const load = document.querySelector('.load--js');


const currentValue = localStorage.getItem('entry');

if (currentValue) {
    document.querySelector('.info--js').innerHTML = 'i';
}


save.addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.setItem('entry',textarea.value);
    if (textarea.value) {
        document.querySelector('.info--js').innerHTML = 'i';
    } else {
        document.querySelector('.info--js').innerHTML = '';
    }
});

load.addEventListener('click', (e) => {
    e.preventDefault();
    textarea.value = localStorage.getItem('entry');   
});

