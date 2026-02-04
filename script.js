const texts = ["Front-End Developer", "Web Developer"];
let i = 0, j = 0;
const typing = document.querySelector(".typing");

function type() {
  if (j < texts[i].length) {
    typing.textContent += texts[i][j++];
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 1500);
  }
}

function erase() {
  if (j > 0) {
    typing.textContent = texts[i].substring(0, --j);
    setTimeout(erase, 80);
  } else {
    i = (i + 1) % texts.length;
    setTimeout(type, 500);
  }
}

type();
