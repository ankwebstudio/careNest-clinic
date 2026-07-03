window.addEventListener("scroll",function(){

    const navbar=document.querySelector(".custom-navbar");

    if(window.scrollY>50){

        navbar.style.boxShadow="0 12px 30px rgba(0,0,0,.08)";
        navbar.style.padding="10px 0";

    }

    else{

        navbar.style.boxShadow="none";
        navbar.style.padding="15px 0";

    }

});

//==============================
// Statistics Counter
//==============================

const counters = document.querySelectorAll(".stat-number");

counters.forEach(counter => {

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");

        const current = +counter.innerText;

        const increment = target / 100;

        if(current < target){

            counter.innerText = Math.ceil(current + increment);

            setTimeout(updateCounter,20);

        }

        else{

            counter.innerText = target + "+";

        }

    };

    updateCounter();

});

//=====================================
// Journey Timeline Animation
//=====================================

const journey=document.querySelector("#patient-journey");

const progress=document.querySelector(".journey-progress");

window.addEventListener("scroll",()=>{

const rect=journey.getBoundingClientRect();

if(rect.top<window.innerHeight-150){

progress.style.width="84%";

}

});