var imageArray = [];
var generatedArray = [];
var randomIndex = 0;

// function to select three random images from imageArray
function generateImages() {
  var imageCount = 0;
  var numOfImages = 3;
  while (imageCount < 3) {
    for (var i = 0; i < numOfImages; i++) {
      getRandomIndex();
      if (generatedArray.length < 3) {
        if (imageArray[randomIndex].imageName != generatedArray[0] && imageArray[randomIndex].imageName != generatedArray[1] && imageArray[randomIndex].imageName != generatedArray[2]) {
          createImage();
          imageCount++;
          console.log('imagecount: ' + imageCount);
        }
      }
    }
  }
}
//
function getRandomIndex() {
  randomIndex = Math.floor(Math.random() * imageArray.length);
}

function createImage() {
  var imageBox = document.getElementById('image-box');
  generatedArray.push(imageArray[randomIndex].imageName);
  var createImg = document.createElement('img');
  createImg.src = imageArray[randomIndex].imagePath;
  imageBox.appendChild(createImg);
}

function Image(imageName, imagePath) {
  this.imageName = imageName;
  this.imagePath = imagePath;
}

imageArray.push(new Image('bag', 'img/bag.jpg'));
imageArray.push(new Image('banana', 'img/banana.jpg'));
imageArray.push(new Image('bathroom', 'img/bathroom.jpg'));
imageArray.push(new Image('boots', 'img/boots.jpg'));
imageArray.push(new Image('breakfast', 'img/breakfast.jpg'));
imageArray.push(new Image('bubblegum', 'img/bubblegum.jpg'));

generateImages();

// function generateImages() {
//   var imageBox = document.getElementById('image-box');
//   var randomIndex1 = Math.floor(Math.random() * imageArray.length);
//   var createImg1 = document.createElement('img');
//   createImg1.src = imageArray[randomIndex1].imagePath;
//   createImg1.alt = imageArray[randomIndex1].imageName;
//   imageBox.appendChild(createImg1);
//   generatedArray.push(randomIndex1);
//
//   var randomIndex2 = Math.floor(Math.random() * imageArray.length);
//   while (randomIndex1 != randomIndex2) {
//
//
//   var randomIndex2 = Math.floor(Math.random() * imageArray.length);
//   var createImg2 = document.createElement('img');
//   createImg2.src = imageArray[randomIndex2].imagePath;
//   createImg2.alt = imageArray[randomIndex2].imageName;
//   while (createImg1 != createImg2) {
//     imageBox.appendChild(createImg2);
//   }
//
//   var randomIndex3 = Math.floor(Math.random() * imageArray.length);
//   var createImg3 = document.createElement('img');
//   createImg3.src = imageArray[randomIndex3].imagePath;
//   createImg3.alt = imageArray[randomIndex3].imageName;
//   while (createImg1 != createImg2 && createImg1 != createImg3 && createImg2 != createImg3) {
//     imageBox.appendChild(createImg3);
//   }
// }
