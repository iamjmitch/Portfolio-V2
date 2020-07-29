'use strict';

var hello = document.getElementById('hello');
var welcome = document.getElementById('welcome');
var welcomeButtons = document.getElementById('welcomeButtons');

function slideIn(divname) {
  divname.style.transition = '1s ease';
  divname.style.margin = '0';
  divname.style.opacity = '1';
}

setTimeout(function () {
  slideIn(hello);
}, 100);
setTimeout(function () {
  slideIn(welcome);
}, 300);
setTimeout(function () {
  slideIn(welcomeButtons);
}, 700);
var nav = document.getElementById('nav');
var logoFull = document.getElementById('logo');
var logosmall = document.getElementById('logoSmall');

function minNav() {
  nav.classList.add('shrink');
  logoFull.style.opacity = '0';
  logoSmall.style.opacity = '1';
  logoFull.style.width = '0';
  logoSmall.style.width = '151.328px';
  logoFull.style.height = '0';
  logoFull.style.padding = '0 0';
  logoSmall.style.height = 'auto';
}

function fullNav() {
  nav.classList.remove('shrink');
  logoFull.style.opacity = '1';
  logoSmall.style.opacity = '0';
  logoFull.style.width = '100%';
  logoSmall.style.width = '0';
  logoFull.style.height = 'auto';
  logoFull.style.padding = '25px 0';
  logoSmall.style.height = '0';
}

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 125 ||
    document.documentElement.scrollTop > 125
  ) {
    minNav();
  } else {
    fullNav();
  }
}

var allButton = document.getElementById('allButton');
var websiteButton = document.getElementById('WebsiteButton');
var designButton = document.getElementById('designButton');

function hideBox(className) {
  var c = document.getElementsByClassName(className);
  showAll();

  for (var i = 0, length = c.length; i < length; i++) {
    {
      c[i].style.display = 'none';
    }
  }
}

function showBox(className) {
  var c = document.getElementsByClassName(className);

  for (var i = 0, length = c.length; i < length; i++) {
    {
      c[i].style.display = 'block';
    }
  }
}

function showAll() {
  showBox('graphic-box');
  showBox('portfolio-box');
  websiteButton.classList.remove('activeButton');
  allButton.classList.add('activeButton');
  designButton.classList.remove('activeButton');
}

function showWebsites() {
  hideBox('graphic-box');
  websiteButton.classList.add('activeButton');
  allButton.classList.remove('activeButton');
  designButton.classList.remove('activeButton');
}

function showDesign() {
  hideBox('portfolio-box');
  websiteButton.classList.remove('activeButton');
  allButton.classList.remove('activeButton');
  designButton.classList.add('activeButton');
}

document.addEventListener('DOMContentLoaded', function () {
  var lazyloadImages = document.querySelectorAll('img.lazy');
  var lazyloadThrottleTimeout;

  function lazyload() {
    if (lazyloadThrottleTimeout) {
      clearTimeout(lazyloadThrottleTimeout);
    }

    lazyloadThrottleTimeout = setTimeout(function () {
      var scrollTop = window.pageYOffset;
      lazyloadImages.forEach(function (img) {
        if (img.offsetTop < window.innerHeight + scrollTop) {
          img.src = img.dataset.src;
          img.classList.remove('lazy');
        }
      });

      if (lazyloadImages.length == 0) {
        document.removeEventListener('scroll', lazyload);
        window.removeEventListener('resize', lazyload);
        window.removeEventListener('orientationChange', lazyload);
      }
    }, 20);
  }

  document.addEventListener('scroll', lazyload);
  window.addEventListener('resize', lazyload);
  window.addEventListener('orientationChange', lazyload);
});
document.addEventListener('DOMContentLoaded', function () {
  var timedElements = document.querySelectorAll('div.timed');
  var timedElementsThrottleTimeout;

  function timer() {
    if (timedElementsThrottleTimeout) {
      clearTimeout(timedElementsThrottleTimeout);
    }

    timedElementsThrottleTimeout = setTimeout(function () {
      var scrollTop = window.pageYOffset;
      timedElements.forEach(function (element) {
        if (element.offsetTop + 200 < window.innerHeight + scrollTop) {
          skillsTimer();
          document.removeEventListener('scroll', timer);
          window.removeEventListener('resize', timer);
          window.removeEventListener('orientationChange', timer);
        }
      });
    }, 20);
  }

  document.addEventListener('scroll', timer);
  window.addEventListener('resize', timer);
  window.addEventListener('orientationChange', timer);
});

function hoverOn() {
  document.getElementById('welcomeButtons').style.background = '#fc2602';
}

function hoverOff() {
  document.getElementById('welcomeButtons').style.background = 'transparent';
}

function move(id, size) {
  var elem = document.getElementById(id);
  var percent = document.getElementById(id + 'p');
  var width = 1;
  var id = setInterval(frame, 5);

  function frame() {
    if (width >= size) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + '%';
      percent.innerHTML = width + '%';
    }
  }
}

function skillsTimer() {
  setTimeout(function () {
    move('HTML', '95');
  }, 300);
  setTimeout(function () {
    move('CSS', '95');
  }, 400);
  setTimeout(function () {
    move('JS', '45');
  }, 500);
  setTimeout(function () {
    move('PHP', '50');
  }, 600);
  setTimeout(function () {
    move('Photoshop', '79');
  }, 700);
  setTimeout(function () {
    move('ACCS', '51');
  }, 800);
  setTimeout(function () {
    move('Wordpress', '43');
  }, 900);
  setTimeout(function () {
    move('SEO', '30');
  }, 1000);
  setTimeout(function () {
    move('MSOS', '100');
  }, 1100);
}

var links = document.querySelectorAll('.links');
var sections = document.querySelectorAll('section');

function changeLinkState() {
  var index = sections.length;

  while (--index && window.scrollY + 100 < sections[index].offsetTop) {}

  links.forEach(function (link) {
    return link.classList.remove('active');
  });
  links[index].classList.add('active');
}

changeLinkState();
window.addEventListener('scroll', changeLinkState);
var modalMovies = document.getElementById('modalMovies');
var modalMoviesBtn = document.getElementById('modalMoviesBtn');
var modalBC = document.getElementById('modalBC');
var modalBCBtn = document.getElementById('modalBCBtn');
var modalPawesome = document.getElementById('modalPawesome');
var modalPawesomeBtn = document.getElementById('modalPawesomeBtn');
var modalV2 = document.getElementById('modalV2');
var modalV2Btn = document.getElementById('modalV2Btn');
var modalNaomiBtn = document.getElementById('modalNaomiBtn');
var modalNaomi = document.getElementById('modalNaomi');
var modalSummer = document.getElementById('modalSummer');
var modalSummerBtn = document.getElementById('modalSummerBtn');
var modalV1 = document.getElementById('modalV1');
var modalV1Btn = document.getElementById('modalV1Button');
var modalTAH = document.getElementById('modalTAH');
var modalTAHBtn = document.getElementById('modalTAHBtn');
var modalSFBC = document.getElementById('modalSFBC');
var modalSFBCBtn = document.getElementById('modalSFBCBtn');
var modalSFMS = document.getElementById('modalSFMS');
var modalSFCSBtn = document.getElementById('modalSFCSBtn');
var modalPier = document.getElementById('modalPier');
var modalPierBtn = document.getElementById('modalPierBtn');
var modalSCBC = document.getElementById('modalSCBC');
var modalSCBCBtn = document.getElementById('modalSCBCBtn');
var modalSCP = document.getElementById('modalSCP');
var modalSCPBtn = document.getElementById('modalSCPBtn');
var modalSCF = document.getElementById('modalSCF');
var modalSCFBtn = document.getElementById('modalSCFBtn');
var modalSCPack = document.getElementById('modalSCPack');
var modalSCPackBtn = document.getElementById('modalSCPackBtn');
var closeButton = document.getElementsByClassName('closeBtn');
var currentModal;
var currentClose;
modalMoviesBtn.addEventListener('click', function () {
  currentModal = modalMovies;
  openModal();
});
modalBCBtn.addEventListener('click', function () {
  currentModal = modalBC;
  openModal();
});
modalV2Btn.addEventListener('click', function () {
  currentModal = modalV2;
  openModal();
});
modalPawesomeBtn.addEventListener('click', function () {
  currentModal = modalPawesome;
  openModal();
});
modalNaomiBtn.addEventListener('click', function () {
  currentModal = modalNaomi;
  openModal();
});
modalSummerBtn.addEventListener('click', function () {
  currentModal = modalSummer;
  openModal();
});
modalV1Btn.addEventListener('click', function () {
  currentModal = modalV1;
  openModal();
});
modalTAHBtn.addEventListener('click', function () {
  currentModal = modalTAH;
  openModal();
});
modalSFBCBtn.addEventListener('click', function () {
  currentModal = modalSFBC;
  openModal();
});
modalSFCSBtn.addEventListener('click', function () {
  currentModal = modalSFCS;
  openModal();
});
modalPierBtn.addEventListener('click', function () {
  currentModal = modalPier;
  openModal();
});
modalSCBCBtn.addEventListener('click', function () {
  currentModal = modalSCBC;
  openModal();
});
modalSCPBtn.addEventListener('click', function () {
  currentModal = modalSCP;
  openModal();
});
modalSCFBtn.addEventListener('click', function () {
  currentModal = modalSCF;
  openModal();
});
modalSCPackBtn.addEventListener('click', function () {
  currentModal = modalSCPack;
  openModal();
});

function eventListenerStart() {
  for (var i = 0; i < closeButton.length; i++) {
    closeButton[i].addEventListener('click', closeModal);
  }
}

window.addEventListener('click', clickCloseModal);

function openModal() {
  currentModal.style.display = 'flex';
}

function closeModal() {
  currentModal.style.display = 'none';
  currentModal = '';
}

function clickCloseModal(e) {
  if (e.target == currentModal) {
    currentModal.style.display = 'none';
    currentModal = '';
  }
}

eventListenerStart();

$('.navbar-nav>li>a').on('click', function () {
  $('.navbar-collapse').collapse('hide');
});
