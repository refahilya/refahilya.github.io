document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Sticky Header on Scroll
   */
  const selectHeader = document.querySelector('#header');
  if (selectHeader) {
    let headerOffset = selectHeader.offsetTop;
    let nextElement = selectHeader.nextElementSibling;

    const headerFixed = () => {
      if ((headerOffset - window.scrollY) <= 0) {
        selectHeader.classList.add('sticked');
        if (nextElement) nextElement.classList.add('sticked-header-offset');
      } else {
        selectHeader.classList.remove('sticked');
        if (nextElement) nextElement.classList.remove('sticked-header-offset');
      }
    }
    window.addEventListener('load', headerFixed);
    document.addEventListener('scroll', headerFixed);
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = document.querySelectorAll('#navbar a');

  function navbarlinksActive() {
    navbarlinks.forEach(navbarlink => {

      if (!navbarlink.hash) return;

      let section = document.querySelector(navbarlink.hash);
      if (!section) return;

      let position = window.scrollY + 200;

      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active');
      } else {
        navbarlink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navbarlinksActive);
  document.addEventListener('scroll', navbarlinksActive);

  /**
   * Mobile nav toggle
   */
  const mobileNavShow = document.querySelector('.mobile-nav-show');
  const mobileNavHide = document.querySelector('.mobile-nav-hide');

  document.querySelectorAll('.mobile-nav-toggle').forEach(el => {
    el.addEventListener('click', function(event) {
      event.preventDefault();
      mobileNavToogle();
    })
  });

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavShow.classList.toggle('d-none');
    mobileNavHide.classList.toggle('d-none');
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navbar a').forEach(navbarlink => {

    if (!navbarlink.hash) return;

    let section = document.querySelector(navbarlink.hash);
    if (!section) return;

    navbarlink.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  const navDropdowns = document.querySelectorAll('.navbar .dropdown > a');

  navDropdowns.forEach(el => {
    el.addEventListener('click', function(event) {
      if (document.querySelector('.mobile-nav-active')) {
        event.preventDefault();
        this.classList.toggle('active');
        this.nextElementSibling.classList.toggle('dropdown-active');

        let dropDownIndicator = this.querySelector('.dropdown-indicator');
        dropDownIndicator.classList.toggle('bi-chevron-up');
        dropDownIndicator.classList.toggle('bi-chevron-down');
      }
    })
  });

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Scroll top button
   */
  const scrollTop = document.querySelector('.scroll-top');
  if (scrollTop) {
    const togglescrollTop = function() {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
    window.addEventListener('load', togglescrollTop);
    document.addEventListener('scroll', togglescrollTop);
    scrollTop.addEventListener('click', function() {window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    });
  }

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Clients Slider
   */
  new Swiper('.clients-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 60
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 80
      },
      992: {
        slidesPerView: 6,
        spaceBetween: 120
      }
    }
  });

  /**
   * Init swiper slider with 1 slide at once in desktop view
   */
  new Swiper('.slides-1', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  /**
   * Init swiper slider with 3 slides at once in desktop view
   */
  new Swiper('.slides-3', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 40
      },

      1200: {
        slidesPerView: 3,
      }
    }
  });

  /**
   * Porfolio isotope and filter
   */
  
// Data destinasi dengan informasi tambahan (gambar, harga, informasi)
const destinations = [
    { 
      name: 'Tokyo, Jepang',
      category: 'asia',
      image: 'https://via.placeholder.com/300',
      price: '$1000',
      info: 'Nikmati keindahan dan kebudayaan Jepang.'
    },
    // Tambahkan destinasi lainnya dengan format yang sama
  ];
  
  // Fungsi untuk menampilkan destinasi sesuai filter
  function displayDestinations(category) {
    const destinationsContainer = document.getElementById('destinations');
    destinationsContainer.innerHTML = '';
  
    let filteredDestinations = destinations;
    if (category !== 'all') {
      filteredDestinations = destinations.filter(destination => destination.category === category);
    }
  
    filteredDestinations.forEach(destination => {
      createDestinationCard(destination);
    });
  }
  
  // Fungsi untuk membuat tampilan kartu destinasi
  function createDestinationCard(destination) {
    const destinationCard = document.createElement('div');
    destinationCard.classList.add('col-md-4', 'mb-4');
  
    const card = `
      <div class="card">
        <img src="${destination.image}" class="destination-image" alt="${destination.name}">
        <div class="card-body">
          <h5 class="card-title">${destination.name}</h5>
          <p class="card-text">${destination.info}</p>
          <p class="card-text"><strong>Harga:</strong> ${destination.price}</p>
        </div>
      </div>
    `;
  
    destinationCard.innerHTML = card;
    document.getElementById('destinations').appendChild(destinationCard);
  }
  
  // Event listener untuk tombol filter
  document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
  
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const category = btn.getAttribute('data-filter');
        displayDestinations(category);
      });
    });
    
    // Tampilkan semua destinasi saat halaman dimuat
    displayDestinations('all');
  });
  
  
  /**
   * Animation on scroll function and init
   */
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', () => {
    aos_init();
  });

});

// JavaScript untuk Expand/Collapse Jawaban FAQ dan Putar Ikon Panah
function toggleAnswer(id, arrowId) {
    var answer = document.getElementById(id);
    var arrow = document.getElementById(arrowId);
  
    if (answer.style.display === 'block') {
      answer.style.display = 'none';
      arrow.style.transform = 'rotate(0deg)';
    } else {
      answer.style.display = 'block';
      arrow.style.transform = 'rotate(180deg)';
    }
  }
  
  
    //Login Section of JS
    function quickCheckIn() {
      // Fetch data from the form
      const flightNumber = document.getElementById('flightNumber').value;
      const passengerName = document.getElementById('passengerName').value;
  
      // Validate the form data (you can add more validation logic)
      if (!flightNumber || !passengerName) {
        alert('Please fill in all the required fields.');
        return;
      }
  
      // Simulate the check-in process (you can replace this with actual API calls)
      alert(`Quick check-in successful for ${passengerName} on flight ${flightNumber}!`);
  
      // You can also redirect the user or perform other actions after successful check-in
    }