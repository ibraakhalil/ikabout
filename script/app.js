
//////////////////////Header height shrink After Scroll///////////////////////

(function(){
    let header = document.querySelector("section.header");
    let content = document.querySelector("section.content");

    let options = {
        threshold: 0.7
    }
    let shrinkHeader = function(entries){
        if(entries[0].isIntersecting){
            header.classList.remove("scrolled")
        } else {
            header.classList.add("scrolled")
        }
    }
    let observer = new IntersectionObserver(shrinkHeader,options)

    observer.observe(content)
})();



//////////////////////Responsive Nav menu Show-close ///////////////////////

(function(){
    let spans = document.querySelectorAll(".education .right .skill > div span");
    let paras = document.querySelectorAll("section.education .right .skill > div div span p");

    spans.forEach(function(span, index){
        let data = span.dataset.filter;
        span.style.width = `${data}%`;
        paras[index].innerHTML = `${data}%`;
    })


    let bars = document.querySelectorAll("section.header .bar i");
    let headerMenu = document.querySelector(".header-left .header-menu");
    bars.forEach(function(bar,index){
        bar.addEventListener("click", function(e){

            if(index == 0){
                headerMenu.style.transform = "translateX(0%)";
                bars[1].style.display = "block";
                bar.style.display = "none";    
            } else {
                headerMenu.style.transform = "translateX(-100%)";
                bars[0].style.display = "block";
                bar.style.display = "none";  
            }
        })
    })

})();




//////////////////////Setting cog Dropdown///////////////////////

(function(){
let setting = document.querySelector("section.header .setting i");
setting.addEventListener("click",function(){
    setting.parentElement.classList.toggle("show")
})
})();




//////////////////////Theme switcher///////////////////////

(function(){
    let switching = document.querySelectorAll(".theme-switch .switch");
    switching.forEach(function(switchItem){
        let input = switchItem.querySelector("input");
        let body = document.querySelector("body");
        
        switchItem.addEventListener("click", function(){
            if(input.checked) {
                body.classList.add("checked")
            } else {
                body.classList.remove("checked")
            }
        })
        if(input.checked) {
            body.classList.add("checked")
        } else {
            body.classList.remove("checked")
        }
    })
    
})();




let span = document.querySelectorAll(".header-text span");


span.forEach(function(item){
    let option = {
        rootMargin: "-200px"
    }
    let growingWith = function(entries){
        if(entries[0].isIntersecting){
            item.classList.add("active")
        }
    }
    let observer = new IntersectionObserver(growingWith, option)
    observer.observe(item)
})


