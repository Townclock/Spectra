function setup() {
    createCanvas(window.windowWidth-20, window.windowHeight-20);
    background(0);
    aX = (random(0, (window.windowWidth-20))+window.windowWidth-20)/2;
    aY = (random(0, (window.windowHeight-20))+window.windowHeight-20)/2;
    centerX = (window.windowWidth-20)/2;
    centerY = (window.windowHeight-20)/2;
    noFill();
    x = setInterval(function(){
    str = random([
          function(){stroke(random(220, 255), random(0, 100)   , random(0, 100))},
          function(){stroke(random(0, 100)   , random(0, 100)   , random(190, 255))},
          function(){stroke(random(0, 100)   , random(190, 255), random(0, 100))}
          ])
  str();
    },1500);

    y = setInterval(function(){
    if (!mouseButton){
        centerY = (random(0, (window.windowWidth-20 )));
        centerX = (random(0, (window.windowHeight-20)));
        targetY = (random(0, (window.windowWidth-20 )));
        targetX = (random(0, (window.windowHeight-20)));
        }
    },10000);
    targetX = 0;
    targetY = 0;
}

function draw() {
noFill();

aX += (random(0, (window.windowWidth-20 )) - (window.windowWidth -20)/2)/300;
aY += (random(0, (window.windowHeight-20)) - (window.windowHeight-20)/2)/300;

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
  if (aX < targetX)
    aX+= .5;
  if (aY < targetY)
    aY+= .5;
  if (aX > targetX)
    aX-= .5;
  if (aY > targetY)
    aY-= .5;
     
}
mouseClicked = function(){
    centerY = (random(0, (window.windowWidth-20 )));
    centerX = (random(0, (window.windowHeight-20)));
    mouseButton = false;
}

mouseDragged = function(){
  if (aX < mouseX)
    aX+= .7;
  if (aY < mouseY)
    aY+= .7;
  if (aX > mouseX)
    aX-= .7;
  if (aY > mouseY)
    aY-= .7;
}
