// Modified from Daniel Shifman - codingtra.in
// Starter Option One: Particles
//Things to try:
// - Change the words - try phrases for more narrative / poetics!
// - Change the colors - try the background, and the words!
// - Change the font and size of the words
// - Change the particle system - try changing the starting points
// - Change the movement - try playing with the alpha and direction

let bg;
let song;

function preload() {
  bg = loadImage('Web_Photo_Editor.jpg');
	song = loadSound('roa-music-walk-around(chosic.com).mp3');
}

particles = [];
//Just like with Tracery, put anything you want in the ""s
words = ["culture","🌸","analysis","archives","computational","digital","scholarship","aesthetics","platform","code","computing","feminist","critical","materiality","storytelling","multimodal","bias","data","visualization","ethics","network","technologies","Algorithm","interactive"]
function setup() {
	//This creates a canvas the size of the screen
  createCanvas(windowWidth, windowHeight);
	song.loop(); // Play the sound on loop
}

function draw() {
	//Replace this with any background color you choose
	//Or you could load an image or try a gradient!
  background(bg);
	//This creates the particles
  for (let i = 0; i < 1; i++) { // Change 3 to 1
    let p = new Particle();
    particles.push(p);
  }
	//This moves the particles
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].show();
    if (particles[i].finished()) {
      // remove this particle
      particles.splice(i, 1);
    }
  }
}

class Particle {
  constructor() {
		//This sets the x value to anywhere - try using a static value
    this.x = random (0, windowWidth);
		//This keeps the y fixed - try reversing it using windowHeight
    this.y = (0);
		//This sets the range of x movement - try limiting it to + or -
    this.vx = random(-1, 1);
		//This sets the range of y movement - try reversing it
    this.vy = random(2, 1);
		//This sets the range of color - this is what keeps us in yellows
		//Try using it for all three to create a broader range of color
		//Or try changing the scale to use the full 0-255
		this.color = random(100,230);
		//This sets the starting alpha so it starts bright and fades 
		//Try reversing it! you can start at 0, add 1, and stop at 255
    this.alpha = 0;
		//This picks a random word for each particle
		this.text = random(words);
		// Add a new property for font size
    this.fontSize = random(3, 18);
    // Add a new property for font
    this.font = random(['Georgia', 'Verdana', 'Courier']); // Fonts
		// Adjust y position based on font size
    this.y = this.y - this.fontSize;
  }

  finished() {
		//Change this to 255 if you reverse the fade
    return this.alpha < 0;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
		//Change this to +1 if you reverse the fade
    this.alpha += 1;
  } 

  show() {
    // Add a white stroke around the text
    stroke(255);
    strokeWeight(0.2); // Adjust the thickness of the stroke as needed

    // Define color ranges for light and deep pink
    let colorRanges = [
        {r: [255, 200], g: [105, 181], b: [180, 230]}, // Light pink
        {r: [200, 255], g: [20, 60], b: [60, 100]}    // Deep pink
    ];

    // Randomly select a color range
    let selectedRange = random(colorRanges);

    // Generate random shades of pink within the selected range
    let r = random(selectedRange.r[0], selectedRange.r[1]); // Red component
    let g = random(selectedRange.g[0], selectedRange.g[1]); // Green component
    let b = random(selectedRange.b[0], selectedRange.b[1]); // Blue component

    fill(r, g, b, this.alpha);
    textFont(this.font); // Set the font
    textSize(this.fontSize); // Set the font size
    text(this.text, this.x, this.y);
}

}