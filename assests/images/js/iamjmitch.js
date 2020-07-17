
	var hello = document.getElementById("hello");
	var welcome = document.getElementById("welcome");
	var welcomeButtons = document.getElementById("welcomeButtons");


	function slideIn(divname) {
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
            if(img.offsetTop < (window.innerHeight + scrollTop)) {
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
	  var width = 1;
	  var id = setInterval(frame, 10);
	  function frame() {
	    if (width >= size) {
	      clearInterval(id);
	    } else {
	      width++; 
	      elem.style.width = width + '%'; 
	    }
	  }
	}

setTimeout(function(){ move("HTML", "90");}, 300);
setTimeout(function(){ move("CSS", "90");}, 400);
setTimeout(function(){ move("JS", "30");}, 500);
setTimeout(function(){ move("PHP", "12");}, 600);
setTimeout(function(){ move("Photoshop", "80");}, 700);
setTimeout(function(){ move("ACCS", "50");}, 800);
setTimeout(function(){ move("Wordpress", "50");}, 900);
setTimeout(function(){ move("SEO", "30");}, 1000);
setTimeout(function(){ move("MSOS", "100");}, 1100);

window.addEventListener('scroll', () => {
   let parent = document.getElementById('parallax-container');
   let children = parent.getElementsByTagName('div');
   for(let i = 0; i < children.length; i++) {
     children[i].style.transform = 'translateY(-' + (window.pageYOffset * i / children.length) + 'px)';
   }
}, false)







