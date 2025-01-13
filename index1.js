const scroll = document.querySelector('.scroll');


let isDraging = false;
let startX;
let scrollLeft;

scroll.addEventListener('mousedown', (e) => {
    isDraging = true;
    startX = e.pageX - scroll.offsetleft;
    scrollLeft = scroll.scrollLeft;
    scroll.style.cursor = 'grabing';

});


scroll.addEventListener('touchstart', (e) => {
    isDraging = true;
    startX = e.touches[0].pageX - scroll.offsetleft;
    scrollLeft = scroll.scrollLeft;
});

scroll.addEventListener('mousemove', (e) => {
    if (!isDraging) return;
    e.preventDefault();
    const x = e.pageX - scroll.offsetleft;
    const walk = (x - startX) * 1.5;
    scroll.offsetleft = scrollLeft - walk;

} );

scroll.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pagesX - scroll.offsetleft;
    const walk = (x - startX) * 1.5;
    scroll.offsetleft = scrollLeft - walk;
    
} );



scroll.addEventListener('mouseup', () => {
    isDragging = false;
    scroll.style.cursor = 'grab';

});


scroll.addEventListener('mouseleave', () => {
    isDragging = false;
    scroll.style.cursor = 'grab';
});

scroll.addEventListener('touchend', () => {
    isDragging = false;
  

});