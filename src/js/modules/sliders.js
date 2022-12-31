const sliders = (slides, dir, prev, next) => {
    let slideIndex = 0;
    let paused = false;
    const items = document.querySelectorAll(slides);
    function showSlides(n) {
        if (n > items.length - 1) {
            slideIndex = 0;
        }

        if (n < 0) {
            slideIndex = items.length - 1;
        }

        items.forEach((item) => {
            item.classList.add('animated');
            item.style.display = 'none';
        });

        items[slideIndex].style.display = 'block';
    }

    showSlides(slideIndex);

    function plusSlide(n) {
        showSlides((slideIndex += n));
    }

    try {
        const prevBtn = document.querySelector(prev);
        prevBtn.addEventListener('click', () => {
            plusSlide(-1);
            items[slideIndex].classList.remove('slideInRight');
            items[slideIndex].classList.add('slideInLeft');
        });
        const nextBtn = document.querySelector(next);
        nextBtn.addEventListener('click', () => {
            plusSlide(1);
            items[slideIndex].classList.remove('slideInLeft');
            items[slideIndex].classList.add('slideInRight');
        });
    } catch (error) {
        console.log(error);
    }

    function activateAnimation() {
        if (dir === 'vertical') {
            paused = setInterval(() => {
                plusSlide(1);
                items[slideIndex].classList.add('slideInDown');
            }, 3000);
        } else {
            paused = setInterval(() => {
                plusSlide(1);
                items[slideIndex].classList.remove('slideInLeft');
                items[slideIndex].classList.add('slideInRight');
            }, 3000);
        }
    }

    activateAnimation();

    items[0].parentNode.addEventListener('mouseenter', () => {
        clearInterval(paused);
    });
    items[0].parentNode.addEventListener('mouseleave', () => {
        activateAnimation();
    });
};

export default sliders;
