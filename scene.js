// p5.js sketch for "Writing Scenes" game

// Global variables
let currentScene; // Current scene (0: Scene Selection, 1: Beach, 2: Woods, 3: Cozy Homes)
let bgm; // Background music
let beachSoundUrl = 'path/to/beach_sound.mp3'; // URL for beach scene sound
let woodsSoundUrl = 'path/to/woods_sound.mp3'; // URL for woods scene sound
let cozySoundUrl = 'path/to/cozy_sound.mp3'; // URL for cozy homes scene sound

function setup() {
  createCanvas(800, 600);
  currentScene = 0; // Start with scene selection
}

function draw() {
  background(240);

  if (currentScene === 0) {
    displaySceneSelection();
  } else if (currentScene === 1) {
    drawBeachScene();
  } else if (currentScene === 2) {
    drawWoodsScene();
  } else if (currentScene === 3) {
    drawCozyHomesScene();
  }
}

function mousePressed() {
  if (currentScene === 0) {
    // Check which scene is clicked
    if (mouseY > height / 2 - 20 && mouseY < height / 2 + 20) {
      if (mouseX > 100 && mouseX < 200) {
        currentScene = 1; // Beach scene
        bgm = createAudio(beachSoundUrl);
        bgm.loop();
      } else if (mouseX > 300 && mouseX < 400) {
        currentScene = 2; // Woods scene
        bgm = createAudio(woodsSoundUrl);
        bgm.loop();
      } else if (mouseX > 500 && mouseX < 600) {
        currentScene = 3; // Cozy Homes scene
        bgm = createAudio(cozySoundUrl);
        bgm.loop();
      }
    }
  }
}

function mouseMoved() {
  // Check if mouse is over scene options
  if (currentScene === 0) {
    if (mouseY > height / 2 - 20 && mouseY < height / 2 + 20) {
      if (mouseX > 100 && mouseX < 200) {
        fill(255, 165, 0); // Orange for Beach
        text("Beach", 150, height / 2);
      } else if (mouseX > 300 && mouseX < 400) {
        fill(0, 128, 0); // Green for Woods
        text("Woods", 350, height / 2);
      } else if (mouseX > 500 && mouseX < 600) {
        fill(255, 192, 203); // Pink for Cozy Homes
        text("Cozy Homes", 550, height / 2);
      }
    } else {
      fill(255); // Default color
      text("Beach", 150, height / 2);
      text("Woods", 350, height / 2);
      text("Cozy Homes", 550, height / 2);
    }
  } else {
    // Reset fill to default color for other scenes
    fill(255); 
  }
}

function displaySceneSelection() {
  fill(0);
  textSize(24);
  textAlign(CENTER, CENTER);
  text("Choose a scene:", width / 2, height / 2 - 50);
  fill(255);
   // Text for Beach scene with orange color
  fill(255, 165, 0); // Orange color
  text("Beach", 150, height / 2);

  // Text for Woods scene with green color
  fill(0, 128, 0); // Green color
  text("Woods", 350, height / 2);

  // Text for Cozy Homes scene with pink color
  fill(255, 192, 203); // Pink color
  text("Cozy Homes", 550, height / 2);
}

function drawBeachScene() {
  // Draw beach scene elements
  background(173, 216, 230); // Light blue for water
  drawSun(width * 0.8, height * 0.2, 100); // Draw sun
  drawPalmTree(width * 0.2, height * 0.7, 200); // Draw palm tree
  drawBeachChair(width * 0.6, height * 0.8); // Draw beach chair
  // Ensure waves are drawn after other elements
  drawWaves(); // Draw moving waves
}


function drawPalmTree(x, y, height) {
  fill(139, 69, 19); // Brown color for trunk
  rect(x - 10, y, 20, height); // Draw trunk
  fill(34, 139, 34); // Dark green color for leaves
  ellipse(x, y - height * 0.7, 200, 200); // Draw leaves
}

function drawBeachChair(x, y) {
  fill(255, 165, 0); // Orange color for beach chair
  rect(x, y - 20, 100, 20); // Draw seat
  rect(x + 20, y - 40, 20, 40); // Draw backrest
}

function drawWaves() {
  // Draw moving waves
  let time = millis() * 0.001; // Convert milliseconds to seconds
  let numWaves = 5; // Number of waves
  let waveSpacing = 20; // Spacing between waves
  let waveOffset = 10; // Offset between rows of waves

  for (let j = 0; j < numWaves; j++) {
    for (let x = 0; x < width; x += waveSpacing) {
      let y = height * 0.7 + sin(x * 0.01 + time + j * waveOffset) * 20; // Adjust amplitude and frequency for waves
      fill(0, 191, 255); // Blue color
      ellipse(x, y + j * 20, 20, 20); // Draw wave with offset for each row
    }
  }
}

function drawWoodsScene() {
  // Draw woods scene elements
  background(34, 139, 34); // Dark green for forest
  drawTrees(width / 2, height / 2, 5); // Draw trees

  // Draw interactive elements
  fill(0, 255, 0); // Green color for hidden object
  ellipse(random(width), random(height), 20, 20); // Hidden object at random position
}

function drawCozyHomesScene() {
  // Draw cozy homes scene elements
  background(255, 228, 196); // Light orange for cozy homes
  drawHouse(width * 0.5, height * 0.5, 200); // Draw house
  drawChimney(width * 0.7, height * 0.4, 30); // Draw chimney

  // Draw interactive elements
  fill(255, 255, 0); // Yellow color for friendly character
  ellipse(width / 2, height / 2, 50, 50); // Friendly character at center of the screen
}

function drawSun(x, y, radius) {
  // Draw sun rays
  fill(255, 255, 0); // Yellow color for rays
  for (let angle = 0; angle < 360; angle += 60) {
    let rayX = x + cos(radians(angle)) * radius * 0.8; // Calculate ray endpoint x-coordinate
    let rayY = y + sin(radians(angle)) * radius * 0.8; // Calculate ray endpoint y-coordinate
    triangle(x, y, rayX, rayY, x, y - radius * 0.8); // Draw triangle as sun ray
  }
  
  // Draw sun face
  fill(255, 255, 0); // Yellow color for sun face
  ellipse(x, y, radius * 2); // Draw sun base
  
  // Draw sun eyes
  fill(0); // Black color for eyes
  ellipse(x - radius * 0.5, y - radius * 0.3, radius * 0.2); // Left eye
  ellipse(x + radius * 0.5, y - radius * 0.3, radius * 0.2); // Right eye
  
  // Draw sun mouth (smile)
  noFill(); // No fill for mouth
  stroke(0); // Black color for mouth
  strokeWeight(2); // Increase stroke weight for mouth
  arc(x, y + radius * 0.3, radius * 0.6, radius * 0.4, radians(0), radians(180)); // Draw smile arc
}

function drawTrees(x, y, count) {
  for (let i = 0; i < count; i++) {
    let offsetX = random(-200, 200);
    let offsetY = random(-100, 100);
    drawTree(x + offsetX, y + offsetY, random(100, 200));
  }
}

function drawTree(x, y, height) {
  fill(139, 69, 19); // Brown color for trunk
  rect(x - 10, y, 20, -height); // Draw trunk
  fill(34, 139, 34); // Dark green color for leaves
  ellipse(x, y - height, 150, 150); // Draw leaves
}

function drawHouse(x, y, size) {
  fill(255); // White color for house
  rect(x - size / 2, y - size / 2, size, size); // Draw house
}

function drawChimney(x, y, height) {
  fill(139, 69, 19); // Brown color for chimney
  rect(x - 10, y, 20, -height); // Draw chimney
}
