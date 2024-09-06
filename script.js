const pastelColors = [
    '#FFFFFF', '#cc5ef5', '#461791'
];
  
createCircles = () => {
    const section = document.getElementById('bubbles');
    const circles = document.createElement('span');

    const size = Math.random();

    const maxOpacity = 40 + Math.random() * 60
    const blur = 1 + size * 4


    circles.style.width = 10 + (size * 25) + 'px';
    circles.style.height = 10 + (size * 25) + 'px';

    circles.style.top = Math.random() * innerHeight + 'px';
    circles.style.left = Math.random() * innerWidth + 'px';

    circles.style.filter = `blur(${blur}px)`;
    circles.style['--max-opacity'] = `${maxOpacity}%`;

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
    const closeAll = document.getElementById('isHome');
    const aboutUs = document.getElementById('aboutUs');

    if (elementToShow) {
        seeMoreElement.addEventListener('click', (e) => {
            e.preventDefault();
            elementToShow.classList.add('page--current');
            elementToShow.classList.remove('page--hidden');
            closeAll.classList.remove('selected');
            aboutUs.classList.add('selected');
        });

        showHome.addEventListener('click', (e) => {
            e.preventDefault();
            elementToShow.classList.remove('page--current');
            elementToShow.classList.add('page--hidden');
            closeAll.classList.add('selected');
            aboutUs.classList.remove('selected');
        });

        closeAll.addEventListener('click', (e) => {
            e.preventDefault();
            if(elementToShow.classList.contains('page--current')){
                elementToShow.classList.remove('page--current');
                elementToShow.classList.add('page--hidden');
                closeAll.classList.add('selected');
                aboutUs.classList.remove('selected');
            }
        });

        aboutUs.addEventListener('click', (e) => {
            e.preventDefault();
            aboutUs.classList.add('selected');
            closeAll.classList.remove('selected');
            elementToShow.classList.add('page--current');
            elementToShow.classList.remove('page--hidden');
        })
    }
});

