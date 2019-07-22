'use strict';

const character = document.querySelector('.character');
const pumpkin = document.querySelector('.pumpkin');
const spider = document.querySelector('.spider');

let characterLeft = 0;
let characterTop = 3;

const move = (event) => {

  if(event.keyCode ===  38) {
    if (characterTop > 3) {
      characterTop -=20;
      console.log('characterTop', characterTop);
      character.style.top = characterTop + 'px';
    }
  } else if (event.keyCode === 39) {
    if (characterLeft < 540) {
      characterLeft +=20;
      console.log('characterLeft', characterLeft);
      character.style.left = characterLeft + 'px';
    }
  } else if (event.keyCode === 40) {
    if (characterTop < 423) {
      characterTop +=20;
      console.log('characterTop', characterTop);
      character.style.top = characterTop + 'px';
    }
    } else if (event.keyCode === 37) {
    if (characterLeft > 0) {
      characterLeft -=20;
      console.log('characterLeft', characterLeft);
      character.style.left = characterLeft + 'px';
    }
  }
}

const eatPumpkin = () => {
  if (characterTop >= 243 && characterTop <= 340 && characterLeft >= 360 && characterLeft <= 450 ) {
    pumpkin.classList.add('hidden');
  }
}

const appearSpider = () => {
  if (pumpkin.classList.contains('hidden')) {
    spider.classList.remove('hidden');
  }
}

const eatSpider = () => {
  if (characterTop >= 0 && characterTop <= 100 && characterLeft >= 50 && characterLeft <= 160 ) {
    spider.classList.add('hidden');
    spider.classList.add('alert');
  }
}

const game = (event) => {
  move (event);
  eatPumpkin();
  appearSpider();
  eatSpider();
}

document.onkeydown = game;