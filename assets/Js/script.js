let sections = document.querySelectorAll('section');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;

        if (top >= offset && top < offset + height) {
            sec.classList.add('show-animate')
        }
        // if want to repeat scroll animation using
        // else {
        //     sec.classList.remove('show-animate')
        // }
    })
}

var menu = document.querySelector(".dropdownList")
var openmenu = document.querySelector(".dropDownIcon")
var close = document.querySelector(".dropDownIcon");

openmenu.addEventListener('click',()=>{
    menu.style.display="block";
    menu.style.height="100px";
    
})
