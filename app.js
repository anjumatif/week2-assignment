const thumbnails = document.getElementById("thumbnails");
const displayContainer = document.getElementById("displayContainer");

const images = [
  {
    src: "./collection/a1.jpg",
    alt: "First Image",
  },
  {
    src: "./collection/c1.jpg",
    alt: "Second Image",
  },
  {
    src: "./collection/c3.jpg",
    alt: "Third Image",
  },
  {
    src: "./collection/c4.jpg",
    alt: "Fourth Image",
  },
  {
    src: "./collection/c5.jpg",
    alt: "Fifth Image",
  },
];

function createThumbnails() {
  images.forEach(function (image) {
    let imageElement = document.createElement("img");
    console.log(`current image is`, image);

    imageElement.src = image.src;

    imageElement.addEventListener("click", function () {
      console.log(image);

      createBigImage(image);
    });
    thumbnails.appendChild(imageElement);
  });
}

createThumbnails();
{
  src: "./collection/c5.jpg";
}

function createBigImage(imgDetails) {
  displayContainer.innerHTML = "";
  const bigImage = document.createElement("img");

  bigImage.src = imgDetails.src;
  bigImage.alt = imgDetails.alt;
  bigImage.height = 700;
  bigImage.width = 1000;

  displayContainer.appendChild(bigImage);
}
