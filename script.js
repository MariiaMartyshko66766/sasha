let score = 0;
let interval;
let running = false;

function vibrate(ms = 40){
if ("vibrate" in navigator) {
navigator.vibrate(ms);
}
}

function go(n){
document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"));
document.getElementById("s"+n).classList.add("active");
}

function startGame(){
vibrate(80);
go(3);
spawn();
}

const noBtn = document.getElementById("noBtn");

function moveNo(){

vibrate(20);

const maxX = window.innerWidth - 120;
const maxY = 300;

noBtn.style.left = Math.random()*maxX + "px";
noBtn.style.top = Math.random()*maxY + "px";
}

noBtn.addEventListener("touchstart", moveNo);
noBtn.addEventListener("click", moveNo);

function spawn(){

if(running) return;
running = true;

const area = document.getElementById("area");

interval = setInterval(()=>{

const h = document.createElement("div");
h.className = "heart";
h.innerHTML = "❤️";

let x = Math.random() * (window.innerWidth - 50);
let y = -30;

h.style.left = x + "px";
h.style.top = y + "px";

area.appendChild(h);

let fall = setInterval(()=>{

y += 4;
h.style.top = y + "px";

if(y > window.innerHeight){
h.remove();
clearInterval(fall);
}

},30);

function catchIt(){
vibrate(30);

score++;
document.getElementById("score").innerText = score + " / 15";
h.remove();

if(score >= 15){
clearInterval(interval);
running = false;
win();
}
}

h.addEventListener("click", catchIt);
h.addEventListener("touchstart", catchIt);

},400);
}

function win(){

vibrate([80,40,80]);

document.getElementById("title").innerText = "Победа";
document.getElementById("text").innerText = "Купон на поцелуй активирован";

go(4);
}

function lose(){
document.getElementById("title").innerText = "Саша лох";
document.getElementById("text").innerText = "но всё равно любим";
go(4);
}

function finish(){
vibrate(100);
go(5);
}
