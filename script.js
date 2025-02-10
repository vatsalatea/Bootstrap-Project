//create const variables for each change button using document.getElementById
const changeButton1 = document.getElementById('changeButton1')
const changeButton2 = document.getElementById('changeButton2')
const changeButton3 = document.getElementById('changeButton3')

//create another const variable that retrieves a reference to an HTML element with the id attribute set to "image1" and stores it in a variable
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
// Define alternate image sources
const image1Alt = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Maserati_MC20_IAA_2021_1X7A0087.jpg/1920px-Maserati_MC20_IAA_2021_1X7A0087.jpg";
const image2Alt = "https://hips.hearstapps.com/hmg-prod/images/brabham-bt62-115-1525366041.jpg";
const image3Alt = "https://upload.wikimedia.org/wikipedia/commons/1/11/Nissan_Pao_001.JPG";

//duplicate this and make it for each of the three changeButtons, images, and imageAlts
changeButton.addEventListener('click', (changeButton1) => {
  image.src = image1Alt;
});
changeButton.addEventListener('click', (changeButton2) => {
  image.src = image2Alt;
});
changeButton.addEventListener('click', (changeButton3) => {
  image.src = image3Alt;
});
