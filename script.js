console.log("Саша, не подглядывай в консоль 🙂");
console.log("Система всё равно знает, что тебя поддерживают.");

const startScreen = document.getElementById("start-screen");
const questionScreen = document.getElementById("question-screen");
const dashboard = document.getElementById("dashboard");

document.getElementById("startBtn").onclick = () => {
    startScreen.classList.add("hidden");
    questionScreen.classList.remove("hidden");
};

document.getElementById("yesBtn").onclick = () => {
    questionScreen.classList.add("hidden");
    dashboard.classList.remove("hidden");
};

const noBtn = document.getElementById("noBtn");

function moveButton() {
    const x = Math.random() * (window.innerWidth - 200);
    const y = Math.random() * (window.innerHeight - 100);

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}

noBtn.addEventListener("mouseenter", moveButton);
noBtn.addEventListener("touchstart", moveButton);

const fixes = [
    "Установлен модуль: горячий чай",
    "Обнаружена дополнительная поддержка",
    "Настроение увеличено",
    "Добавлено +10 к отдыху",
    "Подключён резервный источник тепла",
    "Получено сообщение от Маши",
    "Система стала чувствовать себя лучше",
    "Исправлена критическая нехватка заботы"
];

let progress = 20;
let clicks = 0;

const moodBar = document.getElementById("moodBar");
const energyBar = document.getElementById("energyBar");
const healthBar = document.getElementById("healthBar");

const log = document.getElementById("log");

document.getElementById("fixBtn").onclick = () => {

    clicks++;

    const line = document.createElement("div");

    line.textContent =
        "> " +
        fixes[Math.floor(Math.random() * fixes.length)];

    log.prepend(line);

    progress += 8;

    moodBar.style.width = progress + "%";
    energyBar.style.width = (progress - 5) + "%";
    healthBar.style.width = (progress + 5) + "%";

    if (clicks === 10) {
        document.getElementById("finalModal").style.display = "flex";
        startParticles();
    }
};

function startParticles() {

    const canvas =
        document.getElementById("particles");

    const ctx =
        canvas.getContext("2d");

    canvas.width = innerWidth;
    canvas.height = innerHeight;

    const particles = [];

    for(let i=0;i<150;i++){

        particles.push({
            x:Math.random()*canvas.width,
            y:-20,
            r:Math.random()*3+2,
            v:Math.random()*4+1
        });

    }

    function animate(){

        ctx.clearRect(
            0,
            0,
            canvas.width,
            canvas.height
        );

        particles.forEach(p=>{

            ctx.beginPath();

            ctx.arc(
                p.x,
                p.y,
                p.r,
                0,
                Math.PI*2
            );

            ctx.fillStyle="white";
            ctx.fill();

            p.y += p.v;

        });

        requestAnimationFrame(animate);

    }

    animate();
}
