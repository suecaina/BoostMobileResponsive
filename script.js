let circle = document.getElementById("circle");
let upBtn = document.getElementById("upBtn");
let downBtn = document.getElementById("downBtn");

let rotateValue = circle.style.transform;
let rotateSum;

upBtn.onclick = function(){
    rotateSum = rotateValue + "rotate(-90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
}

downBtn.onclick = function(){
    rotateSum = rotateValue + "rotate(90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
}

/*Toggle section*/

function classToggle() {
    const navs = document.querySelectorAll('.nav-links')
    
    navs.forEach(nav => nav.classList.toggle('toggleShow'));
  }
  
  document.querySelector('.toggle')
    .addEventListener('click', classToggle);