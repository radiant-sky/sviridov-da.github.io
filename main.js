function randomInteger(min, max) {
    // получить случайное число от (min-0.5) до (max+0.5)
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }

let texts = ["C 8 марта!", "Чтобы кони сами останавливались!",
"Чтобы изба загоралась только от твоей красоты",
"Красная кнопка тебе кога нибудь говорила что ты красивая? Я буду первой!",
"Сдать туризм и ОГЭ/ЕГЭ!",
"Ты такая же горячая как индейский костёр!",
"Для тебя можно и топор войны достать!",
"Зачем такая прекрасная девушка тратит время на простую красную кнопку?"]

document.addEventListener("click", function(e) {
    if (e.target.className=="button") {
     let i = randomInteger(0, texts.length-1);
     document.getElementById("text").innerHTML = texts[i];
    }
  })