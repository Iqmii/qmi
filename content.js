const scroll = document.querySelector('.scroll');


let isDragging = false;
let startX;
let scrollLeft;

function startDrag(e) {
    isDragging = true;
    const pageX = e.pageX || e.touches[0].pageX;
    startX = pageX - scroll.offsetLeft;
    scrollLeft = scroll.scrollLeft;
    scroll.style.cursor = 'grabbing';

}

function dragMove(e) {
    if (!isDragging) return;
    const pageX = e.pageX || e.touches[0].pageX;
    const x = pageX -scroll.offsetLeft;
    const walk = (x - startX) * 1.5;
    scroll.scrollLeft = scroll.scrollLeft - walk;

}
function stopDrag() {
    isDragging = false;
    scrollContainer.style.cursor = 'grab';
}

scroll.addEventListener('mousedown', startDrag);
scroll.addEventListener('touchstart', startDrag);
scroll.addEventListener('mousemove', dragMove);
scroll.addEventListener('touchmove', dragMove);
scroll.addEventListener('mouseup', stopDrag);
scroll.addEventListener('touchend', stopDrag);
scroll.addEventListener('mouseleave', stopDrag);



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
    const items = scrollContent.querySelectorAll('.item');
    const lastItem = items[items.length - 1];
    const rect = lastItem.getBoundingClientRect();
    const containerRect = scrollContainer.getBoundingClientRect();

    if (rect.left + rect.width / 2 <= containerRect.right){
        const clones = Array.from(items).map((item) => item.cloneNode (true));
        clones.forEach((clone) => scrollContent.appendChild(clone));
    }
})

