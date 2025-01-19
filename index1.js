const scroll = document.querySelector('.scroll');


let isDragging = false;
let startX;
let scrollLeft;

scroll.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX - scroll.offsetLeft;
    scrollLeft = scroll.scrollLeft;
    scroll.style.cursor = 'grabing';

});


scroll.addEventListener('touchstart', (e) => {
    isDragging = true;
    startX = e.touches[0].pageX - scroll.offsetLeft;
    scrollLeft = scroll.scrollLeft;
});

scroll.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scroll.offsetLeft;
    const walk = (x - startX) * 1.5;
    scroll.offsetLeft = scrollLeft - walk;

} );

scroll.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - scroll.offsetLeft;
    const walk = (x - startX) * 1.5;
    scroll.offsetLeft = scrollLeft - walk;
    
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

const scrollContainer = document.querySelector('.block-scroll-main');

let isHovered = false;


scrollContainer.addEventListener('mouseenter', () => {
    isHovered = true;
    scrollContainer.style.animationPlayState = 'paused';
});

scrollContainer.addEventListener('mouseleave', () => {
    isHovered = false;
    scrollContainer.style.animationPlayState = 'running';
});



const scrollContent = document.querySelector('.block-scroll');

scrollContainer.addEventListener('scroll', () => {
    const scrollWidth = scrollContent.scrollWidth;
    const scrollLeft = scrollContainer.scrollLeft;
    const containerWidth = scrollContainer.clientWidth;

    if (scrollLeft + containerWidth >= scrollWidth - 90) {
        const items = scrollContent.querySelectorAll('.item');
        items.forEach((item) => {
            const clone = item.cloneNode(true);
            scrollContent.appendChild(clone);
        });
    }
} );
console.log(`scrollLeft: ${scrollLeft}, scrollWidth: ${scrollWidth}, containerWidth: ${containerWidth}`);
