var imageArray = [];
var generatedArray = [];

// function to select three random images from imageArray
//
// function createImage() {
//   var imageExists = false;
//   var imageBox = document.getElementById('image-box');
//
//   for (var i = 0; i < 3; i++) {
//     var randomIndex = Math.floor(Math.random() * (imageArray.length));
//     var createImg = document.createElement('img');
//     createImg.src = imageArray[randomIndex].imagePath;
//     createImg.alt = imageArray[randomIndex].imageName;
//     imageBox.appendChild(createImg);
//   }
// }

// function createImage() {
//   var randomIndex = Math.floor(Math.random() * imageArray.length);
//   var image = document.createElement('img');
//   image.src = imageArray[randomIndex].imagePath;
//   image.alt = imageArray[randomIndex].imageName;
// }

function generateImages() {
  var imageBox = document.getElementById('image-box');
  var randomIndex1 = Math.floor(Math.random() * imageArray.length);
  var createImg1 = document.createElement('img');
  createImg1.src = imageArray[randomIndex1].imagePath;
  createImg1.alt = imageArray[randomIndex1].imageName;
  imageBox.appendChild(createImg1);
  generatedArray.push(randomIndex1);

  var randomIndex2 = Math.floor(Math.random() * imageArray.length);
  while (randomIndex1 != randomIndex2)


  var randomIndex2 = Math.floor(Math.random() * imageArray.length);
  var createImg2 = document.createElement('img');
  createImg2.src = imageArray[randomIndex2].imagePath;
  createImg2.alt = imageArray[randomIndex2].imageName;
  while (createImg1 != createImg2) {
    imageBox.appendChild(createImg2);
  }

  var randomIndex3 = Math.floor(Math.random() * imageArray.length);
  var createImg3 = document.createElement('img');
  createImg3.src = imageArray[randomIndex3].imagePath;
  createImg3.alt = imageArray[randomIndex3].imageName;
  while (createImg1 != createImg2 && createImg1 != createImg3 && createImg2 != createImg3) {
    imageBox.appendChild(createImg3);
  }
}

function Image(imageName, imagePath) {
  this.imageName = imageName;
  this.imagePath = imagePath;
}

imageArray.push(new Image('chinook', 'img/chinook.jpg'));
imageArray.push(new Image('cutter', 'img/cutter.jpeg'));
imageArray.push(new Image('fish', 'img/fish.jpg'));
imageArray.push(new Image('frosted', 'img/frosted-cookie.jpg'));
imageArray.push(new Image('salmon', 'img/salmon.png'));
imageArray.push(new Image('shirt', 'img/shirt.jpg'));

generateImages();
