// З використанням властивостей і методів DOM-елементів, напиши скрипт, який:

// 1).Порахує й виведе в консоль к-сть категорій в ul#categories, тобто елементів li.item.
// 2).Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль 
// текст заголовка елемента(тегу < h2 >) 
// і кількість елементів у категорії(усіх < li >, вкладених у нього).

// Дані за кожною категорією мають бути отримані й виведені в консоль 
// у тілі циклу або методу forEach()

const categoriesList = document.querySelectorAll('#categories .item');    // зн всі li з класом "item" у #categories
const howmuchli = categoriesList.length;

categoriesList.forEach(item => {                           //прохід по всіх li з класом "item" у #categories
  const title = item.querySelector('h2').textContent;      //зн ел.h2 і його текст
  const itemsCount = item.querySelectorAll('ul li').length; //зн всі li в ul і порахувати

  console.log(`Number of categories : ${ howmuchli}`);     //вив ск в ul#categories є li з класом "item"
  console.log(`Category: ${title}`);                       //вив текст ел h2
  console.log(`Elements: ${itemsCount}`);                  //вив ск.li в ul
});



