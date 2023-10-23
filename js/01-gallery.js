import { galleryItems } from './gallery-items.js'; 
const galleryContainer = document.querySelector('.gallery');

function createGalleryMarkup(items) {
  return items
    .map(({ original, description }) => {
      return `
        <li class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img
              class="gallery__image"
              src="${original}"
              alt="${description}"
            />
          </a>
        </li>
      `;
    })
    .join('');
}

galleryContainer.innerHTML = createGalleryMarkup(galleryItems);


galleryContainer.addEventListener('click', (e) => {
  e.preventDefault();
  const { target } = e;

  if (target.classList.contains('gallery__image')) {
    const source = target.getAttribute('href'); 
    openModal(source);
  }
});

function openModal(source) {
  const instance = basicLightbox.create(`
    <img src="${source}" width="800" height="600">
  `);

  instance.show();

  const closeOnEscape = (e) => {
    if (e.key === 'Escape') {
      instance.close();
      window.removeEventListener('keydown', closeOnEscape);
    }
  };

  window.addEventListener('keydown', closeOnEscape);
}
