var lance;
var agatha;
var bruno;
var lorelei;
var button;

function preload(){
    lance = createImg("../media/images/lance.jpg");
    agatha = createImg("../media/images/agatha.jpg");
    bruno = createImg ("../media/images/bruno.jpg");
    lorelei = createImg ("../media/images/Lorelei.png");


}
 

function setup() {
createCanvas(windowWidth,windowHeight)


}

function draw() {
background("grey")




lance.position(910,540)
lance.size(157,179)
agatha.position(320,540)
agatha.size(157,179)
bruno.position(910,250)
bruno.size(157,179)
lorelei.position(310,245)
lorelei.size(157,179)




}


