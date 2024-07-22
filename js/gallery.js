const images = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];
const galleryHTML = document.querySelector('.gallery');

images.forEach((image) => {
  const galleryItemHTML = document.createElement('li');
  galleryItemHTML.className = 'gallery-item';

  const galleryLinkHTML = document.createElement('a');
  galleryLinkHTML.className = 'gallery-link';
  galleryLinkHTML.href = '#'; 
  galleryLinkHTML.dataset.source = image.preview;

  const bigImageLinkHTML = document.createElement('a');
bigImageLinkHTML.href = image.original;
bigImageLinkHTML.target = '_blank'; 

  const galleryImageHTML = document.createElement('img');
  galleryImageHTML.className = 'gallery-image';
  galleryImageHTML.src = image.preview;
  galleryImageHTML.alt = image.description;

  galleryLinkHTML.appendChild(galleryImageHTML);
  galleryItemHTML.appendChild(galleryLinkHTML);
  galleryHTML.appendChild(galleryItemHTML);
  galleryItemHTML.appendChild(bigImageLinkHTML);
  
});
galleryHTML.addEventListener('click', (event) => {
    const target = event.target;
    if (target.tagName === 'A' && target.dataset.source) {
      const bigImageLink = document.createElement('a');
      bigImageLink.href = target.dataset.source;
      bigImageLink.target = '_blank'; 
      console.log(bigImageLink);
    }
  });
