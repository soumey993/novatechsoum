
const items = document.querySelectorAll('img');
const nbSlide = items.length;
const suivant = document.querySelector('.right');
const precedent = document.querySelector('.left');
let count = 0;


function slideSuivante(){
    items[count].classList.remove('active');

    if(count < nbSlide - 1){
        count++;
    }
    else{
        count = 0;
    }
    items[count].classList.add('active')
    console.log(count);
}
suivant.addEventListener('click', slideSuivante)

function slidePrecedente(){
    items[count].classList.remove('active');
    if(count > 0){
        count--;
    }
    else{
        count = nbSlide - 1;
    }
    items[count].classList.add('active')
    //console.log(count);
}
precedent.addEventListener('click', slidePrecedente)

function keyPress(e){
    if(e.keyCode === 37){
        slideSuivante();
    }
    else if(e.keyCode === 39){
        slideSuivante();
    }
}
document.addEventListener('keydown', keyPress)



const accordeon = document.getElementsByClassName
    ('contentBx');

    for(i = 0; i<accordeon.length; i++){
        accordeon[i].addEventListener('click', function(){
            this.classList.toggle('active')
        })
    }

