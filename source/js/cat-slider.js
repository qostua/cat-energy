let rangeCat = document.querySelector('.range--cat');
let imgFatCat = document.querySelector('.example__img--fat-cat');
let imgThinCat = document.querySelector('.example__img--thin-cat');

rangeCat.onchange = function() {
  let range = rangeCat.value;

  if (range >= 500) {
    imgFatCat.classList.add('example__img--unshowed');
    imgThinCat.classList.remove('example__img--unshowed');
  } else {
    imgFatCat.classList.remove('example__img--unshowed');
    imgThinCat.classList.add('example__img--unshowed');
  }
}

if (document.documentElement.clientWidth > 785) {
  rangeCat.onmousedown = function(event) {

    moveAt(rangeCat.value);

    document.addEventListener('mousemove', onMouseMove);

    function onMouseMove(event) {
      moveAt(rangeCat.value);
    }

    function moveAt(range) {
      imgFatCat.style.width = (range / 5) + '%';
      imgThinCat.style.width = (200 - range / 5) + '%';
      console.log((range));
    }

    rangeCat.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      rangeCat.onmouseup = null;
    };
  };
}
