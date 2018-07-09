
function setup() {
    createCanvas(window.windowWidth-20, window.windowHeight-20);
    background(0);
    sourceX = random(0, (window.windowWidth-20));
    sourceY = random(0, (window.windowHeight-20));
    noFill();
}

function draw() {
noFill();

var centerY = (window.windowHeight-20)/2;
var centerX = (window.windowWidth-20)/2;
aX = random(0, (window.windowWidth-20));
aY = random(0, (window.windowHeight-20));
console.log(aX, aY);

  ellipse(aX, aY, 20, 20)

    if (mouseX != 0 && mouseY != 0)
      bezier(centerX, centerY,
      mouseX - centerX, mouseY + centerY,
      mouseX + centerX, mouseY - centerY,
      centerX, centerY);
      
            bezier(centerX, centerY,
      -(mouseX - centerX) +window.windowWidth, -(mouseY + centerY)+window.windowHeight,
      -(mouseX + centerX) +window.windowWidth, -(mouseY - centerY) +window.windowHeight,
      centerX, centerY
     );
}

mouseClicked = function(){
    sourceX = random(0, (window.windowWidth-20));
    sourceY = random(0, (window.windowHeight-20));
    str = random([
          function(){stroke(random(220, 255), random(0, 100)   , random(0, 100))},
          function(){stroke(random(0, 100)   , random(0, 100)   , random(190, 255))},
          function(){stroke(random(0, 100)   , random(190, 255), random(0, 100))}
          ])
  str();
}
