// Menu button

let MenuBtn = document.getElementById('MenuBtn')
MenuBtn.addEventListener('click', function(e){
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})

//typing effect

let typed = new Typed('.auto-input',{
    strings:['Full Stack Python Development !','Python Programming !','Front End Developer !','Software Engineering !'],
    typeSpeed:200,
    backSpeed:200,
    backDelay:1000,
    loop:true,

})

// back to top scroll

const toTop = document.querySelector(".toTop");
window.addEventListener("scroll",()=>{
    if(window.pageYOffset > 100){
        toTop.classList.add("active");

    }else{
        toTop.classList.remove("active");
    }
}) 

