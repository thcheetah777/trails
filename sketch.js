// p5.js Testing: for experimentation in p5.js

// Canvas
let canvas;
let backgroundColor = 0;

// Noise
let speed = 0;
let speedChange = 0.000005;
let xOffset = [];
let yOffset = [];

// Point properties
let x = [];
let y = [];

let pointNum = 10;

// Settings
let fill = false;

function setup() {
    canvas = createCanvas(windowHeight, windowHeight);
    canvas.position(windowWidth / 2 - windowHeight / 2, 0);
    frameRate(120);
    
    for (let i = 0; i < pointNum; i++) {
        xOffset.push(random(100));
        yOffset.push(random(100));
    }
}

function draw() {
    background(backgroundColor, 10);
    
    if (!fill) noFill();
    stroke(255, 255);
    strokeWeight(1);
    
    beginShape(TRIANGLE_STRIP);
    
    for (let i = 0; i < pointNum; i++) {
        xOffset[i] += speed;
        yOffset[i] += speed;
        
        x[i] = noise(xOffset[i]) * width;
        y[i] = noise(yOffset[i]) * height;
        
        curveVertex(x[i], y[i]);
    }
    
    endShape(CLOSE);
    if (speed < 0.002) {
      speed += speedChange;
    }
}

function keyPressed() {
    if (keyCode == UP_ARROW) {
        pointNum++;
        xOffset.push(random(100));
        yOffset.push(random(100));
    } else if (keyCode == DOWN_ARROW) {
        pointNum--;
        xOffset.pop();
        yOffset.pop();
    }
}
