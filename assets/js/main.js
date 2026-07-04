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

//=====================================
// Mobile Menu Scroll Lock
//=====================================

const navbarCollapse = document.getElementById("navbarContent");

if (navbarCollapse) {

    navbarCollapse.addEventListener("shown.bs.collapse", () => {

        document.body.style.overflow = "hidden";

    });

    navbarCollapse.addEventListener("hidden.bs.collapse", () => {

        document.body.style.overflow = "";

    });

}

//=====================================
// Auto Close Mobile Menu
//=====================================

document.querySelectorAll(".navbar-nav .nav-link").forEach(link => {

    link.addEventListener("click", () => {

        const menu = document.querySelector(".navbar-collapse");

        if (menu.classList.contains("show")) {

            bootstrap.Collapse.getInstance(menu).hide();

        }

    });

});

//=====================================
// Close Menu on Scroll
//=====================================

window.addEventListener("scroll", () => {

    const menu = document.querySelector(".navbar-collapse");

    if (menu.classList.contains("show")) {

        bootstrap.Collapse.getInstance(menu).hide();

    }

});
