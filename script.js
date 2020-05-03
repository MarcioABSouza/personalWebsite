const menu = document.querySelector("#menu")
const nav = document.querySelector("#nav")
const exit = document.querySelector("#exit")
const scroll = document.querySelector('.scroll')
const preloader = document.querySelector('#preloader')
const phone = document.querySelector('#Phone')
const phoneText = document.querySelector('#Text')
const whoami = document.querySelector('.whoami')
const toTop = document.getElementById("myBtn");

//PRELOADER

window.addEventListener('load', ()=>{
    setTimeout(()=>{
        preloader.style.opacity = 0;
       
        typed2.pause.status = true;
    },2000)

    setTimeout(()=>{
        preloader.style.display = 'none';
    },3000)
    
    
})

//NAVBAR

let menuItens = document.querySelectorAll('#nav a ');

scroll.addEventListener('click', () =>{
    
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


//PHONE ANIMATION

whoami.addEventListener('mouseover', ()=>{
    phone.classList.add('animateLeftRight')
    setTimeout(()=>{phoneText.classList.add('animateLeftRight')},500)
    
})

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

    nav.classList.toggle('hide-mobile')
}

menuItens.forEach((item)=>{
    item.addEventListener('click', scrollToId)
})


//TYPED

var typed = new Typed('#forTyping', {
    strings: [
        'semi-nerd. ',
        'fã do Torvalds.',
        'entusiasta da programação.'],
    typeSpeed: 50,
    backSpeed: 50,
    smartBackspace: true, // this is a default
    loop: true, 
    showCursor: false,

  });

var typed2 = new Typed('#forTypingPreloader', {
    strings: ['.','..','...'],
    typeSpeed: 10,
    backSpeed: 10,
    loop: true ,
    showCursor: false,

  });


  var typed3 = new Typed('#findme', {
    strings: [
        
              ' facilmente me chamar no <span class="main-color">Facebook</span>.',
              ' ver os códigos dos progetos no <span class="main-color">Github</span>.',
              ' me enviar uma mensagem no  <span class="main-color">Whatsapp</span>.',
              ' dar uma olhada no meu perfil no  <span class="main-color">Linkedin</span>.',
              ' ou me enviar um email em <span class="main-color">marciosouzaprofissional@gmail.com</span>'],

    typeSpeed: 10,
    backSpeed: 10,
    backDelay: 1500,
    loop: true ,
    showCursor: false,
    

  });

//SCROLL TO TOP



window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    toTop.style.opacity = 1;
  } else {
    toTop.style.opacity = 0;
  }
}

function topFunction() {
    window.scroll({
        top: 0,
        behavior: 'smooth'
    })
}