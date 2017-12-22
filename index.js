let boxAll = document.querySelectorAll('.box');

function random255() {
    return Math.floor(Math.random() * 256);
}

function randomColor() {
    return `rgb(${random255()},${random255()},${random255()})`;
}

let stage;
let problem;
let correctAnswer;

function nextStage() {
    stage++;
    problem = [randomColor(), randomColor(), randomColor()];
    correctAnswer = Math.floor(Math.random() * 3);
}

function init() {
    stage = 0;
    problem = [randomColor(), randomColor(), randomColor()];
    correctAnswer = Math.floor(Math.random() * 3);
}

function draw() {
    document.querySelectorAll('.box').forEach((el, index) => {
        el.style.backgroundColor = problem[index];
    })
    document.querySelector('.rgb-text').textContent = problem[correctAnswer];
    document.querySelector('.score').textContent = stage;
}


// boxAll.forEach((el, index) => {
//     el.addEventListener('click', e => {
//         el.classList.add('show');
//         if (index === correctAnswer) {
//             document.querySelector('.correct').classList.add('show');
//         } else {
//             document.querySelector('.wrong').classList.add('show');
//             document.querySelector('.modal-score span').textContent = stage;
//         }
//     })
// });

// document.querySelectorAll('.modal-button').forEach((el) => {
//     el.addEventListener('click', e => {
//         if (el === document.querySelector('.correct button')) {
//             nextStage();
//             draw();
//             document.querySelector('.correct').classList.remove('show');
//         } else if (el === document.querySelector('.wrong button')) {
//             init();
//             draw();
//             document.querySelector('.wrong').classList.remove('show');
//         }
//         document.querySelector('.show').classList.remove('show');
//     })
// })

boxAll.forEach((el, index) => {
    el.addEventListener('click', e => {
        el.classList.add('show');
        if (index === correctAnswer) {
            document.querySelector('.correct').classList.add('show');
        } else {
            document.querySelector('.wrong').classList.add('show');
            document.querySelector('.modal-score span').textContent = stage;
        }
    })
});

document.querySelector('.correct .modal-button').addEventListener('click', e => {
    nextStage();
    draw();
    document.querySelector('.correct').classList.remove('show');
    document.querySelectorAll('.box').forEach(el => {
        el.classList.remove('show');
    });
});

document.querySelector('.wrong .modal-button').addEventListener('click', e => {
    init();
    draw();
    document.querySelector('.wrong').classList.remove('show');
    document.querySelectorAll('.box').forEach(el => {
        el.classList.remove('show');
    })
})
init();
draw();