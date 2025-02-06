//create const variables for each change button using document.getElementById
const changeButton1 = document.getElementById('changeButton1')
const changeButton2 = document.getElementById('changeButton2')
const changeButton3 = document.getElementById('changeButton3')

//create another const variable that retrieves a reference to an HTML element with the id attribute set to "image1" and stores it in a variable
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
// Define alternate image sources
const image1Alt = "image1_alt.jpg";
const image2Alt = "image2_alt.jpg";
const image3Alt = "image3_alt.jpg";

//duplicate this and make it for each of the three changeButtons, images, and imageAlts
changeButton.addEventListener('click', () => {
  image.src = image1Alt;
});
changeButton.addEventListener('click', () => {
  image.src = image2Alt;
});
changeButton.addEventListener('click', () => {
  image.src = image3Alt;
});
