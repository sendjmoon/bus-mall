var imageArray = ['index 0', 'index 1', 'index 2', 'index 3', 'index 4', 'index 5'];

//function to select three random images from img dir
function randomImage() {
  var appendTable = document.getElementById('append-table');
  var imageId = Math.floor(Math.random() * (imageArray.length));
  var imageTd = document.createElement('td');
  imageTd.textContent = imageArray[imageId];
  appendTable.appendChild(imageTd);
}
