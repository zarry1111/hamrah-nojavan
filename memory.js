const cards =[

"games/water.png",
"games/water.png",

"games/study.png",
"games/study.png",

"games/sleep.png",
"games/sleep.png",

"games/sport.png",
"games/sport.png",

"games/family.png",
"games/family.png",

"games/prayer.png",
"games/prayer.png",

"games/healthy-food.png",
"games/healthy-food.png",

"games/friendship.png",
"games/friendship.png",

"games/no-drugs.png",
"games/no-drugs.png",

"games/art.png",
"games/art.png",
];
const GAME_TIME = 90; // زمان بازی (ثانیه)
const board = document.getElementById("gameBoard");
const movesText = document.getElementById("moves");
const timeText = document.getElementById("time");
const restartBtn = document.getElementById("restart");

let firstCard = null;
let secondCard = null;
let lock = false;
let moves = 0;
let matched = 0;
let seconds = 0;
let timer;

function shuffle(array){

    for(let i=array.length-1;i>0;i--){

        const j=Math.floor(Math.random()*(i+1));

        [array[i],array[j]]=[array[j],array[i]];

    }

}

function startTimer(){

    clearInterval(timer);

    seconds = GAME_TIME;

    updateTime();

    timer = setInterval(()=>{

        seconds--;

        updateTime();

        if(seconds <= 0){

            clearInterval(timer);

            lock = true;

            setTimeout(()=>{

                alert("⏰ زمان تمام شد!\n\n😔 متأسفانه این مرحله را نبردی.");

                restartGame();

            },300);

        }

    },1000);

}

function createBoard(){

    board.innerHTML="";

    shuffle(cards);

   cards.forEach(img=>{
        const card=document.createElement("div");

        card.className="card";

        card.dataset.icon=img;

        card.innerHTML=`

<div class="front">
<div class="logo-card">همراه<br>نوجوان</div>
</div>

<div class="back">
<img src="${img}" alt="">
</div>

`;

        card.addEventListener("click",flipCard);

        board.appendChild(card);

    });

}

function flipCard(){

    if(lock)return;

    if(this===firstCard)return;

    this.classList.add("flip");

    if(!firstCard){

        firstCard=this;

        return;

    }

    secondCard=this;

    lock=true;

    moves++;

    movesText.textContent=moves;

    checkMatch();

}

function checkMatch(){

    if(firstCard.dataset.icon===secondCard.dataset.icon){

        matched++;

        firstCard.removeEventListener("click",flipCard);

        secondCard.removeEventListener("click",flipCard);

        resetTurn();

        if(matched===10){

    clearInterval(timer);

    lock = true;

    setTimeout(()=>{

        alert("🏆 آفرین!\n\nهمه کارت‌ها را قبل از تمام شدن زمان پیدا کردی.");

    },500);

}
    }else{

        setTimeout(()=>{

            firstCard.classList.remove("flip");

            secondCard.classList.remove("flip");

            resetTurn();

        },900);

    }

}

function resetTurn(){

    firstCard=null;

    secondCard=null;

    lock=false;

}

function restartGame(){

    moves=0;

    matched=0;

    movesText.textContent="0";

    createBoard();

    startTimer();

}

restartBtn.addEventListener("click",restartGame);

restartGame();
function updateTime(){

    let m = Math.floor(seconds / 60);

    let s = seconds % 60;

    if(m < 10) m = "0" + m;

    if(s < 10) s = "0" + s;

    timeText.textContent = m + ":" + s;

}