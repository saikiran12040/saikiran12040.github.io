// show menu 
 const showMenu=(toggleId,navId)=>{
    const toggle=document.getElementById(toggleId),
    nav=document.getElementById(navId);

    if(toggle && nav){
        toggle.addEventListener('click',()=>{
            nav.classList.toggle('show')
        });
    }
 }
 showMenu('nav_toggle','nav_menu1')

// active and remove active
const navLink=document.querySelectorAll('.nav_link') 
navLink.forEach(n=>n.classList.remove('active'))

 function linkAction(){
    navLink.forEach(n=>n.classList.remove('active'))
    this.classList.add('active')

    const navMenu=document.getElementById('nav_menu1')
    navMenu.classList.remove('show')
 }
 navLink.forEach(n=>n.addEventListener('click',linkAction))


// for GitHubCalendar
   

    // or enable responsive functionality:
    GitHubCalendar(".calendar", "saikiran12040", { responsive: true });

    
const displayfun=function(){
    window.open('https://drive.google.com/file/d/1Cg98SSVoFs4gcIaVLNvjFw59TQY0__O0/view?usp=sharing','_blank')
}

