import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkUp(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionsData: "alt",
});

function createGalleryMarkUp(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
`;
    })
    .join("");
}
