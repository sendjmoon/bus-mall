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
// generates random index number to use
function getRandomIndex() {
  randomIndex = Math.floor(Math.random() * imageArray.length);
}

//creates image element in HTML
function createImage() {
  var imageBox = document.getElementById('image-box');
  generatedArray.push(imageArray[randomIndex].imageName);
  var createImg = document.createElement('img');
  createImg.src = imageArray[randomIndex].imagePath;
  createImg.id = imageArray[randomIndex].imageName;
  imageBox.appendChild(createImg);
}

function handleImageClick(event) {
  event.preventDefault();
}

//object constructor
function Image(imageName, imagePath, countShown, countClicked) {
  this.imageName = imageName;
  this.imagePath = imagePath;
  this.countShown = countShown;
  this.countClicked = countClicked;
}

// target.addEventListener('click', handleImageClick);

imageArray.push(new Image('bag', 'img/bag.jpg', 0, 0));
imageArray.push(new Image('banana', 'img/banana.jpg', 0, 0));
imageArray.push(new Image('bathroom', 'img/bathroom.jpg', 0, 0));
imageArray.push(new Image('boots', 'img/boots.jpg', 0, 0));
imageArray.push(new Image('breakfast', 'img/breakfast.jpg', 0, 0));
imageArray.push(new Image('bubblegum', 'img/bubblegum.jpg', 0, 0));

generateImages();
