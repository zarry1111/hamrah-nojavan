// عدد تصادفی
let randomNumber = Math.floor(Math.random() * 100) + 1;

// تعداد تلاش
let attempts = 0;

// حداکثر تعداد تلاش
const maxAttempts = 10;

// گرفتن عناصر
const guess = document.getElementById("guess");
const guessBtn = document.getElementById("guessBtn");
const restart = document.getElementById("restart");
const message = document.getElementById("message");
const tries = document.getElementById("tries");

// دکمه حدس
guessBtn.addEventListener("click", checkGuess);

// دکمه شروع مجدد
restart.addEventListener("click", restartGame);

// بررسی حدس
function checkGuess(){

    let userGuess = Number(guess.value);

    // اگر چیزی وارد نشده باشد
    if(userGuess < 1 || userGuess > 100 || isNaN(userGuess)){

        message.innerHTML = "⚠️ لطفاً عددی بین ۱ تا ۱۰۰ وارد کنید.";
        return;

    }

    attempts++;

    tries.innerHTML = "تعداد تلاش: " + attempts + " / " + maxAttempts;

    if(userGuess < randomNumber){

        message.innerHTML = "📈 عدد بزرگ‌تر است.";

    }

    else if(userGuess > randomNumber){

        message.innerHTML = "📉 عدد کوچک‌تر است.";

    }

    else{

        message.innerHTML =
        "🎉 آفرین!<br>عدد <b>" +
        randomNumber +
        "</b> را در <b>" +
        attempts +
        "</b> تلاش پیدا کردی.";

        guessBtn.disabled = true;

        guess.disabled = true;

        return;

    }

    // اگر فرصت تمام شد
    if(attempts >= maxAttempts){

        message.innerHTML =
        "😔 فرصت‌ها تمام شد.<br>عدد درست <b>" +
        randomNumber +
        "</b> بود.";

        guessBtn.disabled = true;

        guess.disabled = true;

    }

    guess.value = "";

    guess.focus();

}

// شروع مجدد
function restartGame(){

    randomNumber = Math.floor(Math.random() * 100) + 1;

    attempts = 0;

    tries.innerHTML = "تعداد تلاش: ۰ / " + maxAttempts;

    message.innerHTML = "";

    guess.value = "";

    guess.disabled = false;

    guessBtn.disabled = false;

    guess.focus();

}