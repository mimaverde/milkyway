const pastelColors = [
    '#FFFFFF', '#cc5ef5', '#461791'
];
  
createCircles = () => {
    const section = document.getElementById('bubbles');
    const circles = document.createElement('span');

    const size = Math.random() * 25;

    circles.style.width = 10 + size + 'px';
    circles.style.height = 10 + size + 'px';

    circles.style.top = Math.random() * innerHeight + 'px';
    circles.style.left = Math.random() * innerWidth + 'px';

    circles.style.background = pastelColors[Math.floor(Math.random() * pastelColors.length)];
    section.appendChild(circles);

    setTimeout(() => {
        circles.remove()
    }, 5000);
}

setInterval(createCircles, 150);

document.addEventListener('DOMContentLoaded', () => {
    const seeMoreElement = document.getElementById('seeMore');
    const elementToShow = document.getElementById('pageToShow');
    const showHome = document.getElementById('seeHome');

    if (elementToShow) {
        seeMoreElement.addEventListener('click', (e) => {
            e.preventDefault();
            elementToShow.classList.add('page--current');
            elementToShow.classList.remove('page--hidden');
        });

        showHome.addEventListener('click', (e) => {
            e.preventDefault();
            elementToShow.classList.remove('page--current');
            elementToShow.classList.add('page--hidden');
        });
    }
});

