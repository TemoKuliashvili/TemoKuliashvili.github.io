const bubble = document.querySelectorAll('.bubble');

for(let i = 0; i < bubble.length; i++){
    bubble[i];
}

window.addEventListener('mousemove', (event)=>{
    let valueX = event.clientX;
    let valueY = event.clientY;
    
    bubble[0].style.left = "-650" - valueX / 100 + "px";
    bubble[0].style.top = "-250" - valueY / 100 + "px";

    bubble[1].style.left = "-80" - valueX / 20 + "px";
    bubble[1].style.top = "-80" - valueY / 20 + "px";

    bubble[2].style.left = "-265" - valueX / 50 + "px";
    bubble[2].style.top = "280" - valueY / 50 + "px";

    bubble[3].style.left = "400" - valueX / 30 + "px";
    bubble[3].style.top = "110" - valueY / 30 + "px";

    bubble[4].style.left = "650" - valueX / 70 + "px";
    bubble[4].style.top = "-250" - valueY / 70 + "px";
})