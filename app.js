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
