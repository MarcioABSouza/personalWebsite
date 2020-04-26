const menu = document.querySelector("#menu")
const nav = document.querySelector("#nav")
const exit = document.querySelector("#exit")
const scroll = document.querySelector('.scroll')
const preloader = document.querySelector('#preloader')

//PRELOADER

window.addEventListener('load', ()=>{
    preloader.style.opacity = 0;
    typed2.pause.status = true;
    
})

//NAVBAR

let menuItens = document.querySelectorAll('#nav a ');

scroll.addEventListener('click', () =>{
    
    console.log('hey')
    window.scroll({
        top: 690,
        behavior: 'smooth'
    })
})

menu.addEventListener('click', function(e) {
    nav.classList.toggle('hide-mobile')
    e.preventDefault()    
})

exit.addEventListener('click', (e)=>{
    nav.classList.toggle('hide-mobile')
    e.preventDefault()
} )


//SCROLL

function scrollToId(event){

    event.preventDefault()
    const element = event.target;
    const id = element.getAttribute('href')
    const to = document.querySelector(id).offsetTop;
    
    window.scroll({
        top: to, 
        behavior: 'smooth'
    })
}

menuItens.forEach((item)=>{
    console.log(item)
    item.addEventListener('click', scrollToId)
})


//TYPED

var typed = new Typed('#forTyping', {
    strings: ['ama criar', 'está sempre em evolução', 'resolve problemas'],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true ,

  });

var typed2 = new Typed('#forTypingPreloader', {
    strings: ['...'],
    typeSpeed: 10,
    backSpeed: 10,
    loop: true ,

  });



