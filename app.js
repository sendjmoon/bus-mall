var imageArray = [];
var generatedArray = [];
var randomIndex = 0;
var totalClicks = 0;
var imageBox = document.getElementById('image-box');

//object constructor
function Image(imageName, imagePath, countShown, countClicked) {
  this.imageName = imageName;
  this.imagePath = imagePath;
  this.countShown = countShown;
  this.countClicked = countClicked;
}

// generates random index number to use
function getRandomIndex() {
  randomIndex = Math.floor(Math.random() * imageArray.length);
}

//creates image element in HTML
function createImage() {
  generatedArray.push(imageArray[randomIndex].imageName);
  var createImg = document.createElement('img');
  createImg.src = imageArray[randomIndex].imagePath;
  createImg.id = imageArray[randomIndex].imageName;
  imageBox.appendChild(createImg);
  imageArray[randomIndex].countShown++;
}

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
        }
      }
    }
  }
}

//function to handle clicking on images
function handleImageClick(event) {
  console.log('you clicked ' + event.target.id);
  if (totalClicks < 25) {
    for (var i = 0; i < imageArray.length; i++) {
      if (event.target.id === imageArray[i].imageName) {
        imageArray[i].countClicked++;
      }
    }
    imageBox.innerHTML = '';
    generatedArray = [];
    generateImages();
    totalClicks++;
    console.log(totalClicks);
  }
}

imageBox.addEventListener('click', handleImageClick);

imageArray.push(new Image('bag', 'img/bag.jpg', 0, 0));
imageArray.push(new Image('banana', 'img/banana.jpg', 0, 0));
imageArray.push(new Image('bathroom', 'img/bathroom.jpg', 0, 0));
imageArray.push(new Image('boots', 'img/boots.jpg', 0, 0));
imageArray.push(new Image('breakfast', 'img/breakfast.jpg', 0, 0));
imageArray.push(new Image('bubblegum', 'img/bubblegum.jpg', 0, 0));
imageArray.push(new Image('chair', 'img/chair.jpg', 0, 0));
imageArray.push(new Image('cthulhu', 'img/cthulhu.jpg', 0, 0));
imageArray.push(new Image('dog-duck', 'img/dog-duck.jpg', 0, 0));
imageArray.push(new Image('dragon', 'img/dragon.jpg', 0, 0));
imageArray.push(new Image('pen', 'img/pen.jpg', 0, 0));
imageArray.push(new Image('pet-sweep', 'img/pet-sweep.jpg', 0, 0));
imageArray.push(new Image('scissors', 'img/scissors.jpg', 0, 0));
imageArray.push(new Image('shark', 'img/shark.jpg', 0, 0));
imageArray.push(new Image('sweep', 'img/sweep.png', 0, 0));
imageArray.push(new Image('tauntaun', 'img/tauntaun.jpg', 0, 0));
imageArray.push(new Image('unicorn', 'img/unicorn.jpg', 0, 0));
imageArray.push(new Image('usb', 'img/usb.gif', 0, 0));
imageArray.push(new Image('water-can', 'img/water-can.jpg', 0, 0));
imageArray.push(new Image('wine-glass', 'img/wine-glass.jpg', 0, 0));

generateImages();
