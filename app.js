'use strict';

var imageArray = [];
var generatedArray = [];
var imageNames = [];
var imageViews = [];
var imageClicks = [];
var randomIndex = 0;
var totalClicks = 0;
var imageBox = document.getElementById('image-box');
var viewDataChart = document.getElementById('viewDataChart').getContext('2d');
var clickDataChart = document.getElementById('clickDataChart').getContext('2d');

//object constructor
function Image(imageName, imagePath, countShown, countClicked) {
  this.imageName = imageName;
  this.imagePath = imagePath;
  this.countShown = countShown;
  this.countClicked = countClicked;
}

//pushing objects into imageArray
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
  imageViews[randomIndex] = imageArray[randomIndex].countShown;
}

// function to select three random images from imageArray
function generateImages() {
  var imageCount = 0;
  var numOfImages = 3;
  while (imageCount < 3) {
    for (var i = 0; i < numOfImages; i++) {
      if (generatedArray.length < 3) {
        getRandomIndex();
        if (imageArray[randomIndex].imageName != generatedArray[0] && imageArray[randomIndex].imageName != generatedArray[1] && imageArray[randomIndex].imageName != generatedArray[2]) {
          createImage();
          imageCount++;
        }
      }
    }
  }
}

// function updateArrays() {
//   for (var i = 0; i < imageArray.length; i++) {
//     imageViews[i] = imageArray[i].countShown;
//     imageClicks[i] = imageArray[i].countClicked;
//     localStorage.setItem('viewData', JSON.stringify(imageViews));
//     localStorage.setItem('viewClicks', JSON.stringify(imageClicks));
//   }
// }

//function to handle clicking on images
function handleImageClick(event) {
  console.log('you clicked ' + event.target.id);
  if (totalClicks < 25) {
    for (var i = 0; i < imageArray.length; i++) {
      if (event.target.id === imageArray[i].imageName) {
        imageArray[i].countClicked++;
        imageClicks[i] = imageArray[i].countClicked;
      }
    }
    imageBox.innerHTML = '';
    generatedArray = [];
    generateImages();
    totalClicks++;
  } else {
    showChart();
  }
}

//listening for clicks
imageBox.addEventListener('click', function(event) {
  if (event.target.id !== 'image-box') {
    handleImageClick(event);
    localStorage.setItem('imageData', JSON.stringify(imageArray));
  }
});

//for loop to push names into separate Array
for (var i = 0; i < imageArray.length; i++) {
  imageNames.push(imageArray[i].imageName);
}

//creates charts
function showChart() {
  // localStorage.setItem('imageData', JSON.stringify(imageArray));
  var viewData = {
    labels: imageNames,
    datasets: [{
      label: 'Number of Times Image Appeared',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.8)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: imageViews,
      yAxisID: 'y-axis-0',
    }]
  };

  var viewsBarChart = new Chart(viewDataChart, {
    type: 'bar',
    data: viewData
  });

  var clickData = {
    labels: imageNames,
    datasets: [{
      label: 'Number of Times Image Clicked',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.8)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: imageClicks,
      yAxisID: 'y-axis-0',
    }]
  };

  var clicksBarChart = new Chart(clickDataChart, {
    type: 'bar',
    data: clickData
  });
}

(function checkLocal() {
  // if (localStorage.viewData) {
  //   console.log('Local view storage exists');
  //   var parsedViewData = JSON.parse(localStorage.viewData);
  //   imageViews = parsedViewData;
  //   console.log(imageViews);
//   // } if (localStorage.viewClicks) {
//   //   console.log('Local click storage exists');
//   //   var parsedClickData = JSON.parse(localStorage.viewClicks);
//   //   imageClicks = parsedClickData;
//   //   console.log(imageClicks);
  if (localStorage.imageData) {
    console.log('Local image data storage exists');
    var parsedImageData = JSON.parse(localStorage.imageData);
    imageArray = parsedImageData;
    console.table(imageArray);
    console.log(localStorage.getItem('imageData'));
  } else {
    console.log('Local storage does not exist');
  }
})();

generateImages();
