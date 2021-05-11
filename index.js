const images=[
  "images/22_large.png",
  "images/16_large.jpg",
  "images/22_large.png",
  "images/16_large.jpg",
  "images/16_large.jpg",
];

var prices=[
  "$80.00","$29.00","$50.00","$80.00","<del>$21.00</del><ins> $19.00</ins!>",
];

for(let i=0;i<5;i++){
  $(".divProducts1").append("<div class='col-lg-2'><div class='card'><img src=' "+images[i]+"' alt='' ><hr><div class='card-body'><p class='beauty'>Beauty&Health</p><p>Demo Product Title</p><h2 class='price-text'> "+prices[i]+" </h2><div/></div></div>");
}

const images1=[
    "images/pic1.jpg",
    "images/16_large.jpg",
    "images/16_large.jpg",
];

var prices1=[
  "$39.00","$50.00","29.00",
];

var paragraph=[
  "<p>11.product video<p>",
  "<p>5. Simple product<p>",
  "<p> Demo Product Title<p>",
];

for(let i=0;i<3;i++){
  $(".machine1").append("<div class='col-lg-3'><div class='card'><img src=' "+images1[i]+"' alt='' ><hr><div class='card-body'><p class='beauty'>Beauty&Health</p>"+paragraph[i]+"<h2 class='price-text'> "+prices1[i]+" </h2><div/></div></div>");
}
