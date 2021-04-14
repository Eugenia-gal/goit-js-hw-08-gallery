import galleryItems from './gallery-items.js';

const galleryContainerEl = document.querySelector('.js-gallery');

const galleryMarkup = galleryItems.map(makeGalleryItemMarkup).join('\n');
galleryContainerEl.insertAdjacentHTML('beforeend', galleryMarkup);





function  makeGalleryItemMarkup({ preview, original, description }) {
    return ` <li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
}


