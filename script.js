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
    const iconMenuMobile = document.getElementById('menuToggle');
    const menuItems = document.querySelectorAll('#myMenu a');
    const menuMobile = document.getElementById('menu');
    const contents = document.querySelectorAll('section');
    const linksToContent = document.querySelectorAll('a[data-link]');
    
    //Add action to each menu item
    menuItems.forEach(menuItem => {
        menuItem.addEventListener('click', (e) => {
            e.preventDefault();
            const contentValue = menuItem.dataset.content;

            //Closes the menu mobile
            menuMobile.classList.remove('open');

            //Remove select from all menu items
            menuItems.forEach(item => item.classList.remove('selected'));

            //Add to selected to the clicked element
            e.currentTarget.classList.add('selected');

            //Show the selected content
            contents.forEach(content => {
                const contentPage = content.dataset.show;

                // If home is selected close all the page if is not show the current page selected
                if (contentValue === 'home') {
                    if (content.classList.contains('page--current')) {
                        content.classList.remove('page--current');
                        content.classList.add('page--hidden');
                    }
                } else {
                    if (contentPage === contentValue) {
                        content.classList.add('page--current');
                        content.classList.remove('page--hidden');
                    } else {
                        if (content.classList.contains('page--current')) {
                            content.classList.remove('page--current');
                            content.classList.add('page--hidden');
                        }
                    }
                }
            });
        });
    });

    linksToContent.forEach(link => {
        link.addEventListener('click', (e)=>{
            e.preventDefault();
            const contentToShow = Array.from(menuItems).find(item => item.dataset.content === link.dataset.link);
    
            contentToShow.click();
        });
    });

    iconMenuMobile.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('aaa')
        if(menuMobile.classList.contains('open')){
            menuMobile.classList.remove('open');
        }else{
            menuMobile.classList.add('open');
        }
    });
});

