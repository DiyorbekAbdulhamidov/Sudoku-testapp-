const boxes = document.querySelectorAll('.box');
const btn = document.querySelector('button');
const numbers = document.querySelectorAll('.num');


btn.addEventListener('click', () => {
    location.reload();
});

for (let i = 0; i < 30; i++) {
    const randomIndex = Math.ceil(Math.random() * boxes.length);
    boxes[randomIndex].innerText = Math.floor(Math.random() * 9) + 1;
}

let rangbor = false;
let box2;
boxes.forEach(box => {
    box.addEventListener('click', () => {
        if (rangbor !== false) rangbor.style.backgroundColor = '';
        box.style.backgroundColor = ' rgb(107, 107, 255)';
        rangbor = box;
        box2 = box;
    });
});

numbers.forEach(num => {
    addEventListener('keydown', (e) => {
        if (num.innerText == e.key && box2.innerText == "") box2.innerText = e.key;
    });
    num.addEventListener('click', () => {
        if (box2.innerText == "") box2.innerText = num.innerText;
    });
});

