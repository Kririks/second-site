'use strict'
document.addEventListener('click', ({ target: t }) => {
    if (t.classList.contains('clicker')) {
      t.innerText = (t.innerText | 0) + 1;
    }
  });