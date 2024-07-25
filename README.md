# goit-js-hw-08const gallery = document.querySelector(".gallery");

images.forEach((img) => {
  const galleryItem = document.createElement("li");
  galleryItem.classList.add("gallery-item");

  const galleryLink = document.createElement("a");
  galleryLink.href = img.original;
  galleryLink.target = "_blank";

  const galleryImage = document.createElement("img");
  galleryImage.classList.add("gallery-image");

  galleryImage.src = img.preview;
  galleryImage.alt = img.description;
  galleryImage.dataset.source = img.original;
  galleryLink.addEventListener("click", (event) => {
    event.preventDefault();
    console.log(`Opening link : ${galleryLink.href}`);
  });

  galleryLink.appendChild(galleryImage);
  galleryItem.appendChild(galleryLink);
  gallery.appendChild(galleryItem);
});