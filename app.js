var imageArray = ['index 0', 'index 1', 'index 2', 'index 3', 'index 4', 'index 5'];

//function to select three random images from img dir
function randomImage() {
  var imageId = Math.floor(Math.random() * (imageArray.length));
  // var imageTd = document.createElementById('td');
  // imageTd.textContent = imageArray[imageId];
  var imageTd = imageArray[imageId];
}
