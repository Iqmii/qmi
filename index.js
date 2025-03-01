
function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('element-show');

         }
        });
    }
let options = {threshold: [0.4]};
let observer = new IntersectionObserver (onEntry, options);
let elements = document.querySelectorAll('.text-block2-animation');
for (let elm of elements) {
    observer.observe (elm);
}






function showNotfication() {
    const notification = document.getElementById('notification');
    notification.classList.add('show');
    console.log('show');


    setTimeout(() => {
        notification.classList.remove('show');
        console.log('showTime')
    }, 3000);
}


if (sessionStorage.getItem('registrationSuccess') === 'true') {
    showNotfication();
    sessionStorage.removeItem('registrationSuccess');
    console.log('38 index')
}

