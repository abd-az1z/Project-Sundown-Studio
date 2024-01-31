
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


function page4Animation() {
    var ladderc = document.querySelector("#laddercontainer")
    // here we are targetting the ladder container(all the ladders) so that when ever the cursor enters the ladder container(any of the ladders) then we can apply the image on it 
    var fixed = document.querySelector("#fixedimage")
    // here we are targetting the fixed image div which is made in the body befour the start of main page,
    ladderc.addEventListener("mouseenter", function () {
        fixed.style.display = "block"
    })
    ladderc.addEventListener("mouseleave", function () {
        fixed.style.display = "none"
    })
    // the above property helps us to view the fixed image  so that we can get it visible only when needed(when cursor hovers on any of the ladders). 
    // display block will help the fixed image to be visible when the cursor is on any of the ladder 
    // display leave will help the fixed image to be "invisible" when the cursor leaves the ladder container or any of the ladder

    // var ladder1 = document.querySelector("#ladder1")
    // ladder1.addEventListener("mouseenter",function(){
    //     var image = ladder1.getAttribute("data-image")
    //     fixed.style.backgroundImage = `url(${image})`
    // })
    // the above qurey will only be appicable for single ladder so in order to target all the ladder and reduce efforts we will use the property below

    var ladders = document.querySelectorAll(".ladder")
    ladders.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            var image = e.getAttribute("data-image")
            fixed.style.backgroundImage = `url(${image})`
        })
    })
}

function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 100,
    });
}

function menuAnimation() {
    var menu = document.querySelector("#menu h3")
    var full = document.querySelector("#fullscr")
    var navimg = document.querySelector("nav img")
    var flag = 0
    menu.addEventListener("click", function () {
        if (flag == 0) {
            full.style.top = 0
            navimg.style.opacity = 0
            flag = 1
        } else {
            full.style.top = "-100%"
            navimg.style.opacity = 1
            flag = 0
        }
    })
}

function loaderAnimation(){
    var loader = document.querySelector("#loader")
setTimeout(function(){
    loader.style.top = "-100%"
},4000)
// settimeout is nothing but delaying lines of code
// the "3000" in code is the duration of delay which is measured in MilliSeconds.(1000ms=1sec)
}


swiperAnimation()
page4Animation()
menuAnimation()
loaderAnimation()


