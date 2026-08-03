// نظرسنجی

const buttons = document.querySelectorAll("#vote button");

buttons.forEach(button=>{

button.addEventListener("click",function(){

alert("✅ رأی شما برای " + this.innerText + " ثبت شد.");

});

});


// نظرسنجی

const buttons = document.querySelectorAll("#vote button");

buttons.forEach(button=>{

button.addEventListener("click",function(){

alert("✅ رأی شما برای " + this.innerText + " ثبت شد.");

});

});

window.onload = function(){

let targetDate = new Date();

targetDate.setDate(targetDate.getDate() + 4);

let targetTime = targetDate.getTime();

setInterval(function(){

let now = new Date().getTime();

let distance = targetTime - now;

let days = Math.floor(distance / (1000 * 60 * 60 * 24));

let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

let seconds = Math.floor((distance % (1000 * 60)) / 1000);

document.getElementById("countdown").innerHTML =
days + " روز " +
hours + " ساعت " +
minutes + " دقیقه " +
seconds + " ثانیه ";

},1000);

function showAnswer(id){

let answer = "";

if(id == 1){
answer = "🎮 King Strike TRX یک کانال گیمینگ با تمرکز روی Call Of Duty Mobile است. در این کانال گیم‌پلی، اخبار، بررسی سیزن‌ها، معرفی اسلحه‌ها و آموزش‌های کاربردی منتشر می‌شود.";
}

if(id == 2){
answer = "📽 در بخش ویدئوها جدیدترین ویدئوهای King Strike TRX قرار می‌گیرد. این ویدئوها شامل گیم‌پلی، چالش‌ها، لحظات جذاب، رکوردها و آموزش‌های بازی هستند.";
}

if(id == 3){
answer = "📰 در این بخش آخرین اخبار Call Of Duty Mobile منتشر می‌شود؛ از معرفی سیزن‌های جدید، آپدیت‌ها، ایونت‌ها، اسکین‌ها، بتل‌پس‌ها و تغییرات مهم بازی.";
}

if(id == 4){
answer = "📢 تمام اطلاعیه‌های مهم مربوط به سایت و کانال در این بخش منتشر می‌شود؛ مانند اضافه شدن امکانات جدید، بروزرسانی سایت و برنامه‌های آینده King Strike TRX.";
}

if(id == 5){
answer = "⭐️ سایت King Strike TRX برای طرفداران Call Of Duty Mobile ساخته شده است تا اخبار، ویدئوها، آموزش‌ها و مطالب مفید را در یک مکان در اختیار کاربران قرار دهد.";
}

document.getElementById("answer-box").innerHTML = answer;
document.getElementById("answer-box").style.display = "block";

}

}

function toggleDarkMode(){

  document.body.classList.toggle("dark");

  let btn = document.getElementById("modeBtn");

  if(document.body.classList.contains("dark")){
    btn.innerText = "☀️ وایت مود";
  }
  else{
    btn.innerText = "🌙 دارک مود";
  }

}

document.body.classList.add("dark");