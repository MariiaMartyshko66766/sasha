let screen = 1;

function show(n){
document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"));
document.getElementById("screen"+n).classList.add("active");
screen=n;
}

function next(n){
show(n);
}

const noBtn = document.getElementById("noBtn");

function moveNo(){
const x = Math.random() * (window.innerWidth - 120);
const y = Math.random() * 300;

noBtn.style.left = x + "px";
noBtn.style.top = y + "px";
}

noBtn.addEventListener("touchstart", moveNo);
noBtn.addEventListener("click", moveNo);

function love(){
show(3);
startGame();
}

let score = 0;

function startGame(){
const area = document.getElementById("gameArea");

let interval = setInterval(()=>{
const h = document.createElement("div");
h.className = "heart";
h.innerHTML = "❤️";

h.style.left = Math.random()*90 + "%";
h.style.top = "-30px";

area.appendChild(h);

let fall = setInterval(()=>{
let top = parseFloat(h.style.top);
h.style.top = (top + 3) + "px";

if(top > 500){
h.remove();
clearInterval(fall);
}
},30);

h.ontouchstart = ()=>{
score++;
document.getElementById("score").innerText = score + " / 15";
h.remove();

if(score >= 15){
clearInterval(interval);
win();
}
};

h.onclick = ()=>{
score++;
document.getElementById("score").innerText = score + " / 15";
h.remove();

if(score >= 15){
clearInterval(interval);
win();
}
};

},500);
}

function win(){
document.getElementById("resultTitle").innerText = "Победа";
document.getElementById("resultText").innerText = "Купон на поцелуй активирован";
show(4);
}

function lose(){
document.getElementById("resultTitle").innerText = "Саша лох";
document.getElementById("resultText").innerText = "но всё равно любим";
show(4);
}

function final(){
show(5);
}
