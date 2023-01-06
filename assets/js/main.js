// menu show y hidden
const navMenu=document.getElementById('nav-menu'),
      navToggle=document.getElementById('nav-toggle'),
      navClose=document.getElementById('nav-close')

    //   menu show
    //   validate if constant exists
if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
    })
}

// menu hidden
// validate if constant exists
if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    })
}

// remove menu mobile
const navLink=document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu=document.getElementById('nav-menu')
    // when we click on each nav_link,we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n=>n.addEventListener('click',linkAction ))