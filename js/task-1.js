// З використанням властивостей і методів DOM-елементів, напиши скрипт, який:

// 1).Порахує й виведе в консоль к-сть категорій в ul#categories, тобто елементів li.item.
// 2).Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль 
// текст заголовка елемента(тегу < h2 >) 
// і кількість елементів у категорії(усіх < li >, вкладених у нього).

// Дані за кожною категорією мають бути отримані й виведені в консоль 
// у тілі циклу або методу forEach()

const categoriesList = document.querySelectorAll('#categories .item');    // зн всі li з класом "item" у #categories
const howmuchli = categoriesList.length;
  console.log(`Number of categories : ${ howmuchli}`);     //вив ск в ul#categories є li з класом "item"

categoriesList.forEach(item => {                           //прохід по всіх li з класом "item" у #categories
  const title = item.querySelector('h2').textContent;      //зн ел.h2 і його текст
  const itemsCount = item.querySelectorAll('ul li').length; //зн всі li в ul і порахувати


  console.log(`Category: ${title}`);                       //вив текст ел h2
  console.log(`Elements: ${itemsCount}`);                  //вив ск.li в ul
});

// ----------------------------------------------------------

const categoriesList = document.querySelector('#categories');
const categoryItems = categoriesList.querySelectorAll('.item');

categoriesList.style.listStyle = 'none';
categoriesList.style.padding = '24px';
categoriesList.style.margin = 'auto';
categoriesList.style.borderRadius = '8px';
categoriesList.style.maxWidth = '440px';
categoriesList.style.backgroundColor = '#fff';

console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach((item, index) => {
  const categoryTitle = item.querySelector('h2').textContent;
  const elementsCount = item.querySelectorAll('ul li').length;

  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${elementsCount}`);

  item.style.borderRadius = '8px';
  item.style.padding = '16px';
  item.style.width = '392px';
  item.style.background = '#f6f6fe';
  item.style.marginBottom = '24px';

  if (index === categoryItems.length - 1) {
    item.style.marginBottom = '0';
  }

  const h2 = item.querySelector('h2');
  h2.style.fontWeight = '500';
  h2.style.fontSize = '24px';
  h2.style.lineHeight = '1.33';
  h2.style.letterSpacing = '0.7px';
  h2.style.color = '#2e2f42';
  h2.style.marginBottom = '16px';
  h2.style.marginTop = '0';

  const innerUl = item.querySelector('ul');
  innerUl.style.marginTop = '16px';
  innerUl.style.padding = '0';
  innerUl.style.margin = '0';

  const liItems = innerUl.querySelectorAll('li');
  liItems.forEach((li, liIndex) => {
    li.style.fontWeight = '300';
    li.style.fontSize = '16px';
    li.style.lineHeight = '1.5';
    li.style.letterSpacing = '0.04em';
    li.style.color = '#2e2f42';
    li.style.border = '1px solid #808080';
    li.style.borderRadius = '3px';
    li.style.padding = '8px 16px';
    li.style.marginBottom = '8px';
    li.style.backgroundColor = 'white';
    li.style.listStyle = 'none';

    if (liIndex === liItems.length - 1) {
      li.style.marginBottom = '0';
    }
  });
});