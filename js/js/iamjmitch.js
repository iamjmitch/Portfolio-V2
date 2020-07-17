
	var hello = document.getElementById("hello");
	var welcome = document.getElementById("welcome");
	var welcomeButtons = document.getElementById("welcomeButtons");


	function slideIn(divname) {
		divname.style.transition = "1s ease"
		divname.style.margin = "0";
		divname.style.opacity = "1";
	}

	setTimeout(function(){slideIn(hello);}, 100);
	setTimeout(function(){slideIn(welcome);}, 300);
	setTimeout(function(){slideIn(welcomeButtons);}, 700);

	var nav = document.getElementById("nav");
	var logoFull = document.getElementById("logo");
	var logosmall = document.getElementById("logoSmall")

function minNav() {
nav.classList.add('shrink');
      logoFull.style.opacity = "0";
    logoSmall.style.opacity = "1";
    logoFull.style.width = "0";
    logoSmall.style.width = "151.328px";
    logoFull.style.height = "0";
    logoFull.style.padding = "0 0";
    logoSmall.style.height = "20px";


}

function fullNav() {

nav.classList.remove('shrink');
  logoFull.style.opacity = "1";
    logoSmall.style.opacity = "0";
        logoFull.style.width = "100%";
    logoSmall.style.width = "0";
    logoFull.style.height = "auto";
    logoFull.style.padding = "25px 0";
    logoSmall.style.height = "0";
}
    



window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 125 || document.documentElement.scrollTop > 125) {
    minNav();
  } else {
    fullNav();
  }
};

var allButton = document.getElementById("allButton");
var websiteButton = document.getElementById("WebsiteButton");
var designButton = document.getElementById("designButton");

function hideBox(className) {
	 var c = document.getElementsByClassName(className);
	 showAll();
    for(var i = 0, length = c.length; i < length; i++) {{
       c[i].style.opacity = "0";
       c[i].style.height = "0";
       c[i].style.width = "0";
       c[i].style.padding = "0";
       c[i].style.margin = "0";
       c[i].style.border = "none";
   

        }}
    }
function showBox(className) {
	 var c = document.getElementsByClassName(className);
    for(var i = 0, length = c.length; i < length; i++) {{
       c[i].style.opacity = "1";
       c[i].style.height = "300px";
       c[i].style.width = "600px";
       c[i].style.padding = "0";
       c[i].style.margin = "5px";
     
   

        }}
    }



 // Portfolio show/hide functions
 function showAll() {
 	showBox('graphic-box');
 	showBox('portfolio-box');
 	websiteButton.classList.remove('activeButton');
	allButton.classList.add('activeButton');
	designButton.classList.remove('activeButton');
 }


function showWebsites(){
	hideBox('graphic-box');
	websiteButton.classList.add('activeButton');
	allButton.classList.remove('activeButton');
	designButton.classList.remove('activeButton');

}
function showDesign(){
	hideBox('portfolio-box');
	websiteButton.classList.remove('activeButton');
	allButton.classList.remove('activeButton');
	designButton.classList.add('activeButton');


}


// Lazy Load

document.addEventListener("DOMContentLoaded", function() {
  var lazyloadImages = document.querySelectorAll("img.lazy");    
  var lazyloadThrottleTimeout;
  
  function lazyload () {
    if(lazyloadThrottleTimeout) {
      clearTimeout(lazyloadThrottleTimeout);
    }    
    
    lazyloadThrottleTimeout = setTimeout(function() {
        var scrollTop = window.pageYOffset;
        lazyloadImages.forEach(function(img) {
            if(img.offsetTop  < (window.innerHeight + scrollTop)) {
              img.src = img.dataset.src;
              img.classList.remove('lazy');
                        }
        });
        if(lazyloadImages.length == 0) { 
          document.removeEventListener("scroll", lazyload);
          window.removeEventListener("resize", lazyload);
          window.removeEventListener("orientationChange", lazyload);
        }
    }, 20);
  }
  
  document.addEventListener("scroll", lazyload);
  window.addEventListener("resize", lazyload);
  window.addEventListener("orientationChange", lazyload);
});




// Loads skill bars on scroll
document.addEventListener("DOMContentLoaded", function() {
  var timedElements = document.querySelectorAll("div.timed");    
  var timedElementsThrottleTimeout;
  
  function timer() {
    if(timedElementsThrottleTimeout) {
      clearTimeout(timedElementsThrottleTimeout);
    }    
    
    timedElementsThrottleTimeout = setTimeout(function() {
        var scrollTop = window.pageYOffset;
               timedElements.forEach(function(element) {
            if(element.offsetTop + 200 < (window.innerHeight + scrollTop)) {
          skillsTimer();
          document.removeEventListener("scroll", timer);
          window.removeEventListener("resize", timer);
          window.removeEventListener("orientationChange", timer);
                     }
        });
        
         
        
    }, 20);
  }
  
  document.addEventListener("scroll", timer);
  window.addEventListener("resize", timer);
  window.addEventListener("orientationChange", timer);
});






  

function hoverOn() {
	document.getElementById("welcomeButtons").style.background = "#007bff";
	// body...
}

function hoverOff() {
	document.getElementById("welcomeButtons").style.background = "transparent";
	// body...
}


		function move(id, size) {
	  var elem = document.getElementById(id);
	  var percent = document.getElementById(id + "p") 
	  var width = 1;
	  var id = setInterval(frame, 5);
	  function frame() {
	    if (width >= size) {
	      clearInterval(id);
	    } else {
	      width++; 
	      elem.style.width = width + '%';
	      percent.innerHTML = width + '%'
	    }
	  }
	}

function skillsTimer(){
setTimeout(function(){ move("HTML", "92");}, 300);
setTimeout(function(){ move("CSS", "85");}, 400);
setTimeout(function(){ move("JS", "37");}, 500);
setTimeout(function(){ move("PHP", "12");}, 600);
setTimeout(function(){ move("Photoshop", "79");}, 700);
setTimeout(function(){ move("ACCS", "51");}, 800);
setTimeout(function(){ move("Wordpress", "43");}, 900);
setTimeout(function(){ move("SEO", "30");}, 1000);
setTimeout(function(){ move("MSOS", "98");}, 1100);
}

const links = document.querySelectorAll('.links');
const sections = document.querySelectorAll('section');

function changeLinkState() {
  let index = sections.length;

  while(--index && window.scrollY + 100 < sections[index].offsetTop) {}
  
  links.forEach((link) => link.classList.remove('active'));
  links[index].classList.add('active');
}

changeLinkState();
window.addEventListener('scroll', changeLinkState);



// Modal functions

const modalV2 = document.getElementById("modalV2");
const modalV2Btn = document.getElementById("modalV2Btn");
const modalNaomiBtn = document.getElementById("modalNaomiBtn");
const modalNaomi = document.getElementById("modalNaomi");
const modalSummer = document.getElementById("modalSummer");
const modalSummerBtn = document.getElementById("modalSummerBtn");
const modalV1 = document.getElementById("modalV1");
const modalV1Btn = document.getElementById("modalV1Button");
const modalTAH = document.getElementById("modalTAH");
const modalTAHBtn = document.getElementById("modalTAHBtn");
const modalSFBC = document.getElementById("modalSFBC");
const modalSFBCBtn = document.getElementById("modalSFBCBtn");
const modalSFMS = document.getElementById("modalSFMS");
const modalSFCSBtn = document.getElementById("modalSFCSBtn");
const modalPier = document.getElementById("modalPier");
const modalPierBtn = document.getElementById("modalPierBtn");



const closeButton = document.getElementsByClassName("closeBtn");
var currentModal
var currentClose

modalV2Btn.addEventListener('click', function(){currentModal = modalV2; openModal()});
modalNaomiBtn.addEventListener('click', function(){currentModal = modalNaomi; openModal()});
modalSummerBtn.addEventListener('click', function(){currentModal = modalSummer; openModal()});
modalV1Btn.addEventListener('click', function(){currentModal = modalV1; openModal()});
modalTAHBtn.addEventListener('click', function(){currentModal = modalTAH; openModal()});
modalSFBCBtn.addEventListener('click', function(){currentModal = modalSFBC; openModal()});
modalSFCSBtn.addEventListener('click', function(){currentModal = modalSFCS; openModal()});
modalPierBtn.addEventListener('click', function(){currentModal = modalPier; openModal()});
function eventListenerStart(){
  for (var i = 0; i < closeButton.length ; i++){
    closeButton[i].addEventListener('click', closeModal);
    console.log(i)
  }
  
}



// closeButton[0].addEventListener('click', closeModal);
// closeButton[1].addEventListener('click', closeModal);

window.addEventListener('click', clickCloseModal);


function openModal(){
  currentModal.style.display = 'flex';
}


function closeModal(){
  currentModal.style.display = 'none';
  currentModal = "";
}


function clickCloseModal(e){
  if(e.target == currentModal){
  currentModal.style.display = 'none';
  currentModal = "";
}
}

eventListenerStart()
