(function(){
    // Navigation Menu Toggler
    const navMenu = document.getElementById('nav-menu');
    const menuBar = document.getElementById('menu-bar');

    menuBar.addEventListener('click', toggleNavbar);

    function toggleNavbar(event){
        event.preventDefault();
        navMenu.classList.toggle('active');
    }

    $('#navbar ul li a').on('click', function(event){
        event.preventDefault();
        navMenu.classList.toggle('active');
    })

    // Change the position of the navbar when the browser loads and when the page is scrolled
    const navbar = document.getElementById('navbar');

    window.onload = function(){
        if(window.innerWidth > 630){
            navbar.style.bottom = 0;

            changeNavPos();

            window.onscroll = function(){
                changeNavPos();
            }
        }
    }

    function changeNavPos(){
        if(window.scrollY > window.innerHeight / 2){
            navbar.style.top = 0;
            navbar.style.removeProperty('bottom');
        }else{
            navbar.style.bottom = 0;
            navbar.style.removeProperty('top');
        }
    }

    // Slide Animation for Project Cards
    const projectsCards = document.querySelectorAll('.project-card');
    
    projectsCards.forEach(function(card){
        card.addEventListener('mouseenter', function(){
            card.querySelector('.card-overlay div').classList.add('slidedown');
            card.querySelector('.btn').classList.add('slideup');
        });

        card.addEventListener('mouseleave', function(){
            card.querySelector('.card-overlay div').classList.remove('slidedown');
            card.querySelector('.btn').classList.remove('slideup');
        });
    });

    // Smooth Scroll Animation Effect
    $('#navbar ul li a, #home-section .btn, .about-bio p a, #scroll-top').on('click', function(event) {
        if (this.hash !== '') {
            event.preventDefault();
        
            const hash = this.hash;
        
            $('html, body').animate(
            {
                scrollTop: $(hash).offset().top
            },
            800
            );
        }
    });

    // Social Icons Link
    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach(function(icon){
        const URL = icon.getAttribute('data-target');

        icon.addEventListener('click', function(){
            window.open(URL, '_target');
        });
    })

    // Change the active menu link based on the current section in the viewport
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', checkViewport)
    window.addEventListener('load', checkViewport)

    function checkViewport(){
        isInViewport(sections);
    }

    function isInViewport(elements){
        elements.forEach(element => {
            let position = element.getBoundingClientRect();

            position.top < window.innerHeight - (window.innerHeight / 3) && position.bottom >= 0 ? changeNavLinks(element) : null;
        })
    }

    function changeNavLinks(element){
        const navbar = document.querySelector('#navbar');
        const navLinks = navbar.querySelectorAll('ul li a');
        const activeLink = navbar.querySelector('a.active');
        activeLink.classList.remove('active');

        navLinks.forEach(link => {
            const target = link.getAttribute('href');
            const targetID = `#${element.id}`

            if(target === targetID){
                link.classList.add('active');
            }
        })
    }

    // Init AOS
    function aos_init() {
        AOS.init({
        duration: 1000,
        once: true
        });
    }
    $(window).on('load', function() {
        aos_init();
    });
})();