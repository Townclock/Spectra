var angle = 1/12;

function setup() {
    createCanvas(window.windowWidth-20, window.windowHeight-20);
    background(0);
    aX = (random(0, (window.windowWidth-20))+window.windowWidth-20)/2;
    aY = (random(0, (window.windowHeight-20))+window.windowHeight-20)/2;
    noFill();
    x = setInterval(function(){
        rotate(radians(angle));
        angle += 1/12;
    str = random([
          function(){stroke(random(220, 255), random(0, 100)   , random(0, 100))},
          function(){stroke(random(0, 100)   , random(0, 100)   , random(190, 255))},
          function(){stroke(random(0, 100)   , random(190, 255), random(0, 100))}
          ])
  str();
    },1500);
    //setInterval( function(){
    //fill(0);
    //rect(0, 0, window.windowWidth, window.windowHeight);}, 10000);
}

function draw() {
noFill();

var centerY = (window.windowHeight-20)/2;
var centerX = (window.windowWidth-20)/2;
aX += (random(0, (window.windowWidth-20 )) - (window.windowWidth -20)/2)/300;
aY += (random(0, (window.windowHeight-20)) - (window.windowHeight-20)/2)/300;
console.log(aY );

  ellipse(aX, aY, 20, 20)

    if (aX != 0 && aY != 0)
      bezier(centerX, centerY,
      aX - centerX, aY + centerY,
      aX + centerX, aY - centerY,
      centerX, centerY);
      
            bezier(centerX, centerY,
      -(aX - centerX) +window.windowWidth, -(aY + centerY)+window.windowHeight,
      -(aX + centerX) +window.windowWidth, -(aY - centerY) +window.windowHeight,
      centerX, centerY
     );
     
}

mouseDragged = function(){
  if (aX < mouseX)
    aX+= 1;
  if (aY < mouseY)
    aY+= 1;
  if (aX > mouseX)
    aX-= 1;
  if (aY > mouseY)
    aY-= 1;
}
