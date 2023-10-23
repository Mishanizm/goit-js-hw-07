import { galleryItems } from './gallery-items.js';
// Change code below this line

import SimpleLightbox from 'simplelightbox'; // Импортируем библиотеку SimpleLightbox

const galleryContainer = document.querySelector('.gallery');

// Создание и рендер разметки по массиву данных
function createGalleryMarkup(items) {
    return items
        .map(({ original, description, preview }) => {
            return `
                <li class="gallery__item">
                    <a class="gallery__link" href="${original}">
                        <img class="gallery__image" src="${preview}" alt="${description}" />
                    </a>
                </li>
            `;
        })
        .join('');
}

galleryContainer.innerHTML = createGalleryMarkup(galleryItems);

// Инициализация библиотеки SimpleLightbox
const lightbox = new SimpleLightbox('.gallery a', {
    captions: true, // Включаем подписи
    captionDelay: 250, // Задержка перед появлением подписи (250 миллисекунд)
    history: false, // Отключаем историю браузера
});

lightbox.on('show.simplelightbox', function (e) {
    // Добавляем описание под изображением
    const description = e.$source.find('img').attr('alt');
    e.$caption.html(description);
});
