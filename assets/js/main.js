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


    /*==========================scroll sections active link==================*/
    const sections=document.querySelectorAll('section[id]')
    function scrollActive(){
        const scrollY=window.pageYOffset

        sections.forEach(current=>{
            const sectionHeight=current.offsetHeight
            const sectionTop=current.offsetTop - 50;
            sectionId=current.getAttribute('id')
            if(scrollY>sectionTop && scrollY <= sectionTop+sectionHeight){
                document.querySelector('.nav_menu a[href*='+sectionId+']').classList.add('active-link')
            } else {
                document.querySelector('.nav_menu a[href*='+sectionId+']').classList.remove('active-link')
            }
        })
    }
    window.addEventListener('scroll',scrollActive)

    /*================change background header========*/
    function scrollHeader(){
        const nav=document.getElementById('header')
        // when the scroll is greater than 200 viewport innerHeight,and the scroll-header class to the header tag
        if(this.scrollY>=80)nav.classList.add('scroll-header');else nav.classList.remove('scroll-header')
    }
    window.addEventListener('scroll',scrollHeader)

    /*==============show scroll up=============*/
    function scrollUp(){
        const scrollUp=document.getElementById('scroll-up');
        // when the scroll is higher than 560 viewport height ,add the scroll show class
        if(this.scrollY>=560)scrollUp.classList.add('show-scroll');else scrollUp.classList.remove('show-scroll')
    }
    window.addEventListener('scroll',scrollUp)

    /*=============dark light theme===========*/
    var themeButton=document.getElementById('theme-button')
    var darkTheme='dark-theme'
    var iconTheme='uil-sun'

    //previously selected topic(if user selected)
    var selectedTheme=localStorage.getItem('selected-theme')
    var selectedIcon=localStorage.getItem('selected-icon')

    //we obtain the current theme that the interface has by validating the dark-theme class
    var getCurrentTheme=()=>document.body.classList.contains(darkTheme) ? 'dark' : 'light'
    var getCurrentIcon=()=>themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

    //we validate if the user previously chose a topic
    if(selectedTheme){
        //id thw validation is fulfilled ,we ask what the issue was to know if we activated 
        document.body.classList[selectedTheme === 'dark' ? 'add' :'remove'](darkTheme)
        themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
    }
    //activate/deactivate the theme manually with the button
    themeButton.addEventListener('click',()=>{
        //add or remove the dark/icon theme
        document.body.classList.toggle(darkTheme)
        themeButton.classList.toggle(iconTheme)
        //we save the theme and the current icon that the user choes
        localStorage.setItem('selected-theme',getCurrentTheme())
        localStorage.setItem('selected-icon',getCurrentIcon())
    })