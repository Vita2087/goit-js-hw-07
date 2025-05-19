// Напиши скрипт управління формою логіна.
// відправлення форми form.login-form повинна відбуватися за подією submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.

// Якщо при сабміті у формі є незаповнені поля, виводь alert з попередженням 
// про те, що 'All form fields must be filled in'. 
// Не додавай на інпути атрибут required, валідація має відбуватися саме через JS.

// Якщо користувач заповнив усі поля і відправив форму, 
// збери значення полів в об'єкт з двома властивостями, де ключ — це ім'я інпутів, 
// а значення — відповідні значення цих інпутів, очищені від пробілів по краях. 
// Для доступу до елементів форми використовуй властивість elements.

// При сабміті форми виведи об'єкт із введеними даними в консоль і 
// очисти значення полів форми методом reset.

// Прослуховується подія submit
// Під час відправлення форми сторінка не перезавантажується
// Якщо при сабміті у формі є незаповнені поля, виводиться alert
// При сабміті в консоль виводиться об'єкт з двома властивостями, 
// де ключі — це ім'я інпутів, а значення — відповідні значення цих інпутів, 
// очищені від пробілів по краях
// Після сабміту елементи форми очищаються

const form = document.querySelector('.login-form'); 

form.addEventListener('submit', event => {
  event.preventDefault();                      // Сторінка не перезавантажується

  const { email, password } = form.elements;   //доступ до інпутів через власт elements
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (emailValue === '' || passwordValue === '') { //якщо інпути пусті попередження алерт
    alert('All form fields must be filled in');
    return;   //зупинити ф-цію
  }

  const formData = {                       //створ обєкт з даними полів форми
    email: emailValue,
    password: passwordValue,
  };
    console.log(formData);                 //подивитись обєкт
    
  form.reset();                            // Очищення форми
});

// --------------------------------------------------------------------------------
  
const form = document.querySelector(".login-form");
form.style.padding = "24px";
form.style.borderRadius = "8px";
form.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
form.style.width = "408px";

const inputs = document.querySelectorAll(".login-form input");
inputs.forEach((input) => {
  input.style.width = "100%";
  input.style.padding = "10px";
  // input.style.marginBottom = "16px";
  input.style.border = "1px solid";
  input.style.borderRadius = "4px";
});

const labels = document.querySelectorAll(".login-form label");

labels.forEach((label, index) => {
  label.style.display = "flex";
  label.style.flexDirection = "column";
  label.style.marginBottom = index === 0 ? "8px" : "16px"; 

  const input = label.querySelector("input");
  if (input) {
    input.style.marginTop = "8px"; 
  }
});



const button = document.querySelector(".login-form button");
// button.style.padding = "8px 16px";
button.style.width = "86px";
button.style.height = "40px";
button.style.backgroundColor = "#4E75FF";
button.style.color = "#fff";
button.style.border = "none";
button.style.borderRadius = "8px";
button.style.fontSize = "16px";


button.addEventListener("focus", () => {
    button.style.backgroundColor = "#6c8cff";
  });
  

  button.addEventListener("blur", () => {
    button.style.backgroundColor = "#4E75FF";
  });

