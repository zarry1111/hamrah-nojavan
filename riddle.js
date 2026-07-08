const riddles = [

{
question:"چه چیزی هرچه بیشتر از آن برداری، بزرگ‌تر می‌شود؟",
answer:"🕳️ گودال"
},

{
question:"آن چیست که پر از دندان است ولی چیزی نمی‌خورد؟",
answer:"🪮 شانه"
},

{
question:"آن چیست که هرچه خشک‌تر باشد، بیشتر خیس می‌کند؟",
answer:"🧺 حوله"
},

{
question:"آن چیست که اگر نامش را بگویی، خودش را می‌شکنی؟",
answer:"🤫 سکوت"
},

{
question:"آن چیست که یک چشم دارد ولی نمی‌تواند ببیند؟",
answer:"🪡 سوزن"
},

{
question:"آن چیست که همیشه بالا می‌رود ولی هیچ‌وقت پایین نمی‌آید؟",
answer:"🎂 سن"
},

{
question:"آن چیست که پا ندارد ولی دور دنیا می‌گردد؟",
answer:"✉️ نامه"
},

{
question:"آن چیست که همیشه می‌آید اما هیچ‌وقت نمی‌رسد؟",
answer:"🔮 فردا"
},

{
question:"آن چیست که کلید دارد اما هیچ دری را باز نمی‌کند؟",
answer:"⌨️ صفحه کلید"
},

{
question:"آن چیست که تا نشکند، نمی‌توان از آن استفاده کرد؟",
answer:"🥚 تخم‌مرغ"
}

];

let current = 0;

// ترتیب تصادفی چیستان‌ها
shuffle(riddles);

const question = document.getElementById("question");
const answer = document.getElementById("answer");
const toggleBtn = document.getElementById("toggleBtn");
const counter = document.getElementById("counter");
function showRiddle(){
counter.textContent = `چیستان ${current+1} از ${riddles.length}`;
    question.textContent = riddles[current].question;

    answer.textContent = riddles[current].answer;

    answer.style.display = "none";

    toggleBtn.textContent = "نمایش پاسخ";

}

function toggleAnswer(){

    if(answer.style.display=="none"){

        answer.style.display="block";

        toggleBtn.textContent="مخفی کردن پاسخ";

    }else{

        answer.style.display="none";

        toggleBtn.textContent="نمایش پاسخ";

    }

}

function nextRiddle(){

    current++;

    if(current>=riddles.length){

        shuffle(riddles);

        current=0;

    }

    showRiddle();

}

function shuffle(array){

    for(let i=array.length-1;i>0;i--){

        let j=Math.floor(Math.random()*(i+1));

        [array[i],array[j]]=[array[j],array[i]];

    }

}

showRiddle();