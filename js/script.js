 // Mobile menu toggle script
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.nav ul');

    navToggle.addEventListener('click', () => {
      nav.classList.toggle('nav-open');
      navToggle.classList.toggle('open');
    });

    