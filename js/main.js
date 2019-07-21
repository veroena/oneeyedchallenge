'use strict';

const character = document.querySelector('.character');

let characterLeft = 0;
let characterTop = 3;

const move = (event) => {

  if(event.keyCode ===  38) {
    if (characterTop > 3) {
      characterTop -=20;
      character.style.top = characterTop + 'px';
    }
  } else if (event.keyCode === 39) {
    if (characterLeft < 540) {
      characterLeft +=20;
      character.style.left = characterLeft + 'px';
    }
  } else if (event.keyCode === 40) {
    if (characterTop < 423) {
      characterTop +=20;
      character.style.top = characterTop + 'px';
    }
    } else if (event.keyCode === 37) {
    if (characterLeft > 0) {
      characterLeft -=20;
      character.style.left = characterLeft + 'px';
    }
  }
}

document.onkeydown = move;