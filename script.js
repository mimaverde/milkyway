// const pastelColors = [
//     '#FFFFFF', '#cc5ef5', '#461791'
// ];
  
// createCircles = () => {
//     const section = document.getElementById('bubbles');
//     const circles = document.createElement('span');

//     const size = Math.random() * 25;

//     circles.style.width = 10 + size + 'px';
//     circles.style.height = 10 + size + 'px';

//     circles.style.top = Math.random() * innerHeight + 'px';
//     circles.style.left = Math.random() * innerWidth + 'px';

//     circles.style.background = pastelColors[Math.floor(Math.random() * pastelColors.length)];
//     section.appendChild(circles);

//     setTimeout(() => {
//         circles.remove()
//     }, 5000);
// }

// setInterval(createCircles, 150);

document.addEventListener('DOMContentLoaded', () => {
    const seeMoreElement = document.getElementById('seeMore');
    const elementToShow = document.getElementById('pageToShow');
    const showHome = document.getElementById('seeHome');

    if (elementToShow) {
        seeMoreElement.addEventListener('click', () => {
            elementToShow.classList.add('page--current');
            elementToShow.classList.remove('page--hidden');
        });

        showHome.addEventListener('click', () => {
            elementToShow.classList.remove('page--current');
            elementToShow.classList.add('page--hidden');
        });
    }

    document.querySelector(".menu-responsive").style.display = "none";

    document.querySelector(".menu-bars").addEventListener("click", function() {
        const menu = document.querySelector(".menu-responsive");
        if (menu.style.display === "none" || menu.style.display === "") {
            menu.style.display = "block";
            // Adding a "slow" effect can be tricky, but you can use CSS transitions for that
            menu.style.transition = "display 0.5s ease-in-out";
        } else {
            menu.style.display = "none";
        }
    });

    document.querySelectorAll(".scroll").forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault(); // Prevent default anchor behavior
    
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
    
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });
});

