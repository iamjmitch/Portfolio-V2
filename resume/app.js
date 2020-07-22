var coll = document.getElementsByClassName('boxHeading');
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener('click', function () {
    var content = this.nextElementSibling;
    var heading = this.firstChild.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      heading.classList.remove('active');
    } else {
      content.style.maxHeight = content.scrollHeight + 'px';
      heading.classList.add('active');
    }
  });
}
