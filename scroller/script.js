scrollButton = document.querySelectorAll('.icon')
scrollImage = document.querySelector('.scroll-images'); 

function scroll() {

    if (this.getAttribute('data-scroll') == 'left') {
        scrollImage.scrollBy(350, 0);
    }
    if (this.getAttribute('data-scroll') == 'right') {
        scrollImage.scrollBy(-350, 0);
    }

    // check whether we have reached end of scroll
    if (scrollImage.offsetWidth + scrollImage.scrollLeft >= scrollImage.scrollWidth - 1) {
        console.log('End left reached');
    }

    // check whether we have reached start of scroll
    if (scrollImage.scrollLeft <= 0) {
        console.log('Start left reached');
    }
}


scrollButton.forEach(element => {
    element.addEventListener('click', scroll);
});