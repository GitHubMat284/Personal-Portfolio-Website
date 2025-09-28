/* Typing Animations */

var typed = new Typed(".typing", {
    
    strings:["Student at University of Manitoba","Cybersecurity Analyst", "Web Developer", "Game Developer", "Application Developer"],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true,
    cursorChar: "_",
    startDelay: 1500,
    backDelay: 1500
});

/* Aside Sections Swap */

const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSections = document.querySelectorAll(".section"),
    totalSelections = allSections.length;

for(let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function() {
        removeBackSection();
        for(let j = 0; j < totalNavList; j++) {
            if(navList[j].querySelector("a").classList.contains("active")){
                addBackSection(j);
                // allSections[j].classList.add("back-section");
            }
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active");
        showSection(this);
        if(window.innerWidth < 1200){
            asideSectionTogglerBtn();
        }
    });
}
function removeBackSection(){
    for(let i = 0; i < totalSelections; i++) {
        allSections[i].classList.remove("back-section");        
    }
}

function addBackSection(num){
    allSections[num].classList.add("back-section");
}

function showSection(section) {
    for(let i = 0; i < totalSelections; i++) {
        allSections[i].classList.remove("active");        
    }

    // console.log(section.getAttribute("href"));
    const href = section.getAttribute("href").split("#");
    const target = href[1]; // Because js would return "" , "section" due to split
    document.querySelector("#" + target).classList.add("active");

}


function updateNav(section){
    for(let i = 0; i < totalNavList; i++) {
        navList[i].querySelector("a").classList.remove("active");
        const target = section.getAttribute("href").split("#")[1];
        if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1]){
            navList[i].querySelector("a").classList.add("active");        
        }
    }
}

document.querySelector(".about-me").addEventListener("click", function(){
    const sectionIndex = this.getAttribute("data-section-index");
    // console.log(sectionIndex);
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex);
});

document.querySelector(".hire-me").addEventListener("click", function(){
    const sectionIndex = this.getAttribute("data-section-index");
    // console.log(sectionIndex);
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex);
});

document.querySelector(".about-me").addEventListener("click", function(){
    const sectionIndex = this.getAttribute("data-section-index");
    console.log(sectionIndex);
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex);
});

document.querySelector(".msg-me").addEventListener("click", function(){
    const sectionIndex = this.getAttribute("data-section-index");
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex);
});

const navTogglerBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => {
    asideSectionTogglerBtn();
});

function asideSectionTogglerBtn() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for(let i = 0; i < totalSelections; i++) {
        allSections[i].classList.toggle("open");
    }
}

/* TODO: Portfolio PopUps */