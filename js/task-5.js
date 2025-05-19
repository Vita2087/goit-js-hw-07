// Напиши скрипт, який змінює колір фону елемента < body >
//   через інлайн - стиль по кліку на button.change - color
//   і задає це значення кольору текстовим вмістом для span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>

// Для генерування випадкового кольору використовуй функцію getRandomHexColor().
//  function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// функція getRandomHexColor() повертає колір у hex-форматі, в той час, як колір фону на <body> буде у форматі rgb. Це нормально й не потребує якихось правок.

// Фон на <body> задається тільки після кліку на button.change-color
// При кожному кліку на елемент button.change - color фон < body > зафарбовується новим рандомним кольором
// На <body> і span.color значення одного й того самого кольору


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector('.change-color');
const span = document.querySelector('.color');

button.addEventListener('click', () => {
  const newColor = getRandomHexColor();           //створ новий рандомний колір
  document.body.style.backgroundColor = newColor; //змінюєм колір фону сторінки <body> через інлайн-стиль
  span.textContent = newColor;                    //вставляєм назву кольора в спан
});

// --------------------------------------------------------------------------------

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

document.body.style.display = 'flex';
document.body.style.justifyContent = 'center';

const widget = document.querySelector('.widget');
widget.style.display = 'block';
widget.style.margin = '0 auto';
widget.style.marginTop = '200px';

const backgColor = document.querySelector('.change-color');
backgColor.style.padding = '8px 16px';
backgColor.style.width = '148px';
backgColor.style.height = '40px';
backgColor.style.backgroundColor = '#4E75FF';
backgColor.style.color = '#fff';
backgColor.style.fontSize = '16px';
backgColor.style.border = 'none';
backgColor.style.borderRadius = '8px';

backgColor.addEventListener('click', () => {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  document.querySelector('.color').textContent = color;
});
