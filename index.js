var slider_img = document.querySelector('.slider-img');
var images = ['a.jpg', 'b.jpg', 'c.jpg'];
var i=0;
var fs = require("fs");
fs.readFile("./mytext.txt", function(text){
    var textByLine = text.split("\n")
});

function prev() {
  if (i<=0) i = images.length;
  i--;
  return setImg();
}

function next() {
  getImg();
  if (i >= images.length-1) i = -1;
  i++;
  return setImg();
}

function setImg() {
  return slider_img.setAttribute('src', 'photos/' + images[i]);
}

function getImg() {
  document.getElementById("temp").innerHTML = textByLine;
}

