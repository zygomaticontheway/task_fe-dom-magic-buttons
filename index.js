// найдем первую кнопку по id
const btn = document.getElementById("magic-btn");
// скопируем ее - получилась вторая кнопка. Ее можно использовать.
const clonedBtn = btn.cloneNode(true);
// задали id
clonedBtn.id = "magic-btn-2";

btn.addEventListener('click', () => {
  // при нажатии на первую кнопку
  // работайте с clonedBtn
  // ваш код начинается здесь
  clonedBtn.textContent = "я изменю тебя";
  clonedBtn.style.backgroundColor = "#a78b71";
  clonedBtn.style.color = "white";
  clonedBtn.classList.add("second-btn");
  document.body.append(clonedBtn);
})

// здесь можете создать EventListener для второй кнопки
let toggle = true;
clonedBtn.addEventListener("click", ()=>{
  if (toggle){
    btn.style.backgroundColor = "#9c4a1a";
    btn.style.color = "black";
  }
  else {
    btn.style.backgroundColor = "#f7c815";
    btn.style.color = "white";
  }
  toggle = !toggle
})