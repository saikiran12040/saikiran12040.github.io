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

/*================================skills==========================*/
const skillsContent=document.getElementsByClassName('skills_content'),
      skillsHeader=document.querySelectorAll('.skills_header')

function toggleSkills(){
    let itemClass=this.parentNode.className
    for(i=0;i<skillsContent.length;i++){
        skillsContent[i].className='skills_content skills_close'
    }
    if(itemClass === 'skills_content skills_close'){
        this.parentNode.className = 'skills_content skills_open'
    }
}

skillsHeader.forEach((el)=>{
    el.addEventListener('click',toggleSkills)
})



// /===========================qualification tabs======================/

const tabs=document.querySelectorAll('[data-target]'),
      tabContents=document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click',()=>{
        const target=document.querySelector(tab.dataset.target)
        tabContents.forEach(tabContent=>{
            tabContent.classList.remove('qualification_active')
        })
        target.classList.add('qualification_active')

        tabs.forEach(tab => {
            tab.classList.remove('qualification_active')
        })
        tab.classList.add('qualification_active')
    })
})


//PROJECT SWIPER//

let swiper = new Swiper(".portfolio_container", {
    cssMode: true,
    loop:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable:true,
    },
    // mousewheel: true,
    // keyboard: true,  
  });

//   github stats

GitHubCalendar(".calendar", "saikiran12040");

    // or enable responsive functionality:
    GitHubCalendar(".calendar", "saikiran12040", { responsive: true });

    // Use a proxy
    GitHubCalendar(".calendar", "saikiran12040", {
       proxy (saikiran12040) {
         return fetch(`https://your-proxy.com/github?user=${saikiran12040}`)
       }
    }).then(r => r.text())