let boxAll = document.querySelectorAll('.box');

function random255() {
  return Math.floor(Math.random() * 256);
}

function randomColor() {
  return `rgb(${random255()},${random255()},${random255()})`;
}

boxAll.forEach(el => {
  el.style.backgroundColor = randomColor();
})

let answer=boxAll[Math.floor(Math.random()*3)];
let answerRGB = answer.style.backgroundColor;
document.querySelector('.rgbQ').textContent = answerRGB;

let scoreBoard=0;

for(let item of boxAll){
  item.addEventListener("click",function(event){
    if(this.style.backgroundColor===answerRGB){
    scoreBoard+=1;
    document.querySelector('.score').textContent=scoreBoard;
    
  }
    else{
    scoreBoard=0;
    document.querySelector('.score').textContent=scoreBoard;
    }
  });
}



