const closeBtn = document.querySelector('.alertPopup-close');
const alertPopup = document.querySelector('.alertPopup');

closeBtn.addEventListener('click', () => {
    alertPopup.style.display = "none";
})

window.addEventListener('click', (e) => {
    if(e.target == alertPopup){
        alertPopup.style.display = "none";
    }
})