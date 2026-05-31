let score1 = 0;
let score2 = 0;

function vibrate(ms){
if(navigator.vibrate){
navigator.vibrate(ms);
}
}

function go(n){
document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"));
document.getElementById("s"+n).classList.add("active");
vibrate(30);
}

/* ---------------- NO BUTTON ---------------- */

const noBtn = document.getElementById("noBtn");

function moveNo(){
vibrate(20);

noBtn.style.left = Math.random()*70 + "%";
noBtn.style.top = Math.random()*60 + "%";
}

noBtn.addEventListener("click", moveNo);
noBtn.addEventListener("touchstart", moveNo);

/* ---------------- GAME 1 ---------------- */

function startGame1(){
go(3);
spawnGame1();
}

function spawnGame1(){

const g = document.getElementById("game1");

setInterval(()=>{

const h = document.createElement("div");
h.className="heart";
h.innerHTML="❤️";

h.style.left=Math.random()*90+"%";
h.style.top="-30px";

g.appendChild(h);

let y=-30;

let fall=setInterval(()=>{

y+=4;
h.style.top=y+"px";

if(y>600){
h.remove();
clearInterval(fall);
}

},30);

function hit(){
vibrate(30);

score1++;
document.getElementById("score1").innerText=score1+" / 15";
h.remove();

if(score1>=15){
go(4);
spawnGame2();
}
}

h.onclick=hit;
h.ontouchstart=hit;

},500);
}

/* ---------------- GAME 2 ---------------- */

function spawnGame2(){

const g=document.getElementById("game2");

setInterval(()=>{

const d=document.createElement("div");
d.className="dot";
d.innerHTML="✨";

d.style.left=Math.random()*90+"%";
d.style.top="-30px";

g.appendChild(d);

let y=-30;

let fall=setInterval(()=>{

y+=5;
d.style.top=y+"px";

if(y>600){
d.remove();
clearInterval(fall);
}

},30);

function hit(){
vibrate(25);

score2++;
document.getElementById("score2").innerText=score2+" / 10";
d.remove();

if(score2>=10){
win();
}
}

d.onclick=hit;
d.ontouchstart=hit;

},600);
}

/* ---------------- FINAL ---------------- */

function win(){
go(5);

document.getElementById("finalTitle").innerText="умничка зайка";
document.getElementById("finalText").innerText="система подтверждает успешное прохождение";

vibrate([80,40,80]);

kiss();
}

function lose(){
go(5);

document.getElementById("finalTitle").innerText="иди грей нос";
document.getElementById("finalText").innerText="доступ не получен";
}

/* ---------------- KISS ANIMATION ---------------- */

function kiss(){
const k=document.getElementById("kiss");
k.classList.add("show");

setTimeout(()=>{
k.classList.remove("show");
},1200);
}

/* ---------------- RESTART ---------------- */

function restart(){
location.reload();
}
