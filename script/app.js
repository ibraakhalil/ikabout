
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






