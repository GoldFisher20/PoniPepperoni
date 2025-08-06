    AOS.init();

    const burger = document.getElementById('burger');
    const navMenu = document.querySelector('.nav-menu');

    burger.addEventListener('click', () => {
        burger.classList.toggle('open');
        navMenu.classList.toggle('open');
    });

    // Carousel
    const track = document.querySelector('.carousel-track');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    const slides = document.querySelectorAll('.carousel-track img');

    let currentIndex = 0;

    function updateCarousel() {
        const slideWidth = slides[0].clientWidth;
        track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel();
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateCarousel();
    });

    window.addEventListener('resize', updateCarousel);
