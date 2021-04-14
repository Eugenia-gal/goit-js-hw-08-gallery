import galleryItems from './gallery-items.js';

const galleryContainerEl = document.querySelector('.js-gallery');
const lightBoxEl = document.querySelector('.js-lightbox');
const lightBoxImageEl = lightBoxEl.querySelector('img');


createGallery(galleryItems);

galleryContainerEl.addEventListener('click', onGalleryItemClick);
lightBoxEl.addEventListener('click', onModalCloseBtnClick);


function createGallery(items) {
    const galleryMarkup = items.map(makeGalleryItemMarkup).join('\n');
    galleryContainerEl.insertAdjacentHTML('beforeend', galleryMarkup);
}

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


function onGalleryItemClick(e) {
    e.preventDefault();

    lightBoxImageEl.src = e.target.dataset.source;
    lightBoxImageEl.alt = e.target.alt;

    lightBoxEl.classList.add('is-open');
}

function onModalCloseBtnClick(e) {
    if (e.target.nodeName !== "BUTTON") {
        return;
    }
    
    lightBoxImageEl.src = "";
    lightBoxImageEl.alt = "";
    lightBoxEl.classList.remove('is-open');
}

