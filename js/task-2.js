// Напиши скрипт для створення галереї зображень на основі масиву даних.
// HTML містить список ul.gallery.

// <ul class="gallery"></ul>

// Використовуй масив об'єктів images для створення елементів <img>, вкладених в <li>.

// Ти можеш створити й додати HTML-елементи, використовуючи document.createElement()
// і elem.append() або шаблонні рядки і elem.insertAdjacentHTML().

// Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
// Додай мінімальне оформлення галереї флексбоксами через CSS класи.

// Створена й додана в DOM галерея із шести зображень
// Галерея додана у список ul.gallery і являє собою 6 елементів <li>, в які вкладені елементи <img>
// Для створення елементів <img> використані дані з масиву об'єктів images
// Усі елементи галереї додані в DOM за одну операцію додавання
// Є мінімальне оформлення галереї флексбоксами через CSS класи

const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    alt: 'Alpine Spring Meadows',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    alt: 'Nature Landscape',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    alt: 'Lighthouse Coast Sea',
  },
];

const gallery = document.querySelector('.gallery');

const markup = images                  // змінна рядок-розмітка, яку вставим у список ul
  .map(({ url, alt }) => {            //деструктуризація властивостей обєкта img
    return `<li class = "gallery-item"><img src = "${url}" alt = "${alt}" class="gallery-img"></li>`;
  })
  .join("");           //з масива витягуєм рядок

gallery.insertAdjacentHTML('beforeend', markup);  //вставляєм рядок-розмітку в ul після ul

// ------------------------------------------------------------------
const gallery = document.querySelector('.gallery');
gallery.style.display = 'flex';
gallery.style.maxWidth = '1178px';
gallery.style.flexWrap = 'wrap';
gallery.style.margin = '0 auto';
gallery.style.gap = '24px';
gallery.style.justifyContent = 'center';

function imageItem(image) {
  return `
  <li style="list-style: none; width: 360px;">
  <img src="${image.url}" alt="${image.alt}" class="img" 
  style=" display: block; width: 100%; height: 300px;">
  </li>
  `;
}

function imagesItems(images) {
  const markup = images.map(imageItem).join('');
  return markup;
}
console.log(imagesItems(images));
gallery.innerHTML = imagesItems(images);