const menu = document.querySelector("#menu")
const nav = document.querySelector("#nav")
const exit = document.querySelector("#exit")
const scroll = document.querySelector('.scroll')


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


