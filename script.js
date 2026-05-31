let score = 0;
let running = false;
let interval;

function vibrate(ms){
if(navigator.vibrate){
navigator.vibrate(ms);
}
}

function go(n){
document.querySelectorAll(".screen").forEach(s=>{
s.classList.remove("active");
});

document.getElementById("s"+n).classList.add("active");
vibrate(30);
}

function startGame(){
go(3);
spawn();
}

const noBtn = document.getElementById("noBtn");

function moveNo(){

vibrate(20);

const x = Math.random() * (window.innerWidth - 120);
const y = Math.random() * (window.innerHeight - 200);

noBtn.style.left = x + "px";
noBtn.style.top = y + "px";
}

noBtn.addEventListener("click", moveNo);
noBtn.addEventListener("touchstart", moveNo);

function spawn(){

if(running) return;
running = true;

const area = document.getElementById("area");

interval = setInterval(()=>{

const h = document.createElement("div");
h.className = "heart";
h.innerHTML = "❤️";

let x = Math.random() * (window.innerWidth - 50);
let y = -20;

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
vibrate(25);

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
