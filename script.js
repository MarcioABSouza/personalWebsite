const menu = document.querySelector("#menu")
const nav = document.querySelector("#nav")
const exit = document.querySelector("#exit")
const scroll = document.querySelector('.scroll')
const preloader = document.querySelector('#preloader')
const phone = document.querySelector('#Phone')
// const buttonToTop = document.querySelector("#myBtn");

//PRELOADER

window.addEventListener('load', ()=>{
    preloader.style.opacity = 0;
     preloader.style.display = 'none';
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
    strings: ['no Facebook.','no Github.','no Linkedin.','no email <span class="main-color">marciosouzaprofissional@gmail.com</span>'],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 1000,
    loop: true ,
    showCursor: false,
    

  });

  //SCROLL UP DOWN
//   let isRunning = false

//   window.onwheel = function(event) {
    
//      if(isRunning){
//          return
//      } 

//     this.setTimeout(()=>{
       
//         if (event.deltaY > 0) {
//             window.scrollTo(0, (window.scrollY + window.innerHeight))
//             console.log('here')
//             isRunning = false
//         } else {
//             window.scrollTo(0, (window.scrollY - window.innerHeight))
//             isRunning = false
//         }

//     }, 1500) 
    
//   }





// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
//     buttonToTop.style.display = "block";
//   } else {
//     buttonToTop.style.display = "none";
//   }
// }

// t
// function topFunction() {
//   document.body.scrollTop = 0; 
//   document.documentElement.scrollTop = 0; 
// }