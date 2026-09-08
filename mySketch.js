// Cherry Blossom — digital-humanities concept words drift down like falling petals
// Modified from Daniel Shiffman - codingtrain (Starter Option One: Particles)

let bg;
let song;
let particles = [];

const words = ["culture", "🌸", "analysis", "archives", "computational", "digital", "scholarship", "aesthetics", "platform", "code", "computing", "feminist", "critical", "materiality", "storytelling", "multimodal", "bias", "data", "visualization", "ethics", "network", "technologies", "algorithm", "interactive"];

function preload() {
  bg = loadImage('Web_Photo_Editor.jpg');
  song = loadSound('roa-music-walk-around(chosic.com).mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  song.loop();
}

function draw() {
  background(bg);

  // spawn a new petal-word every few frames, rather than every single frame,
  // so the scene stays airy instead of clouding over
  if (frameCount % 4 === 0) {
    particles.push(new Particle());
  }

  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].show();
    if (particles[i].finished()) {
      particles.splice(i, 1);
    }
  }
}

class Particle {
  constructor() {
    this.baseX = random(0, windowWidth);
    this.x = this.baseX;
    this.y = -20;
    this.vy = random(0.6, 1.6);

    // gentle side-to-side sway instead of a random horizontal drift,
    // so particles fall more like real petals than confetti
    this.swayAmount = random(20, 60);
    this.swaySpeed = random(0.01, 0.03);
    this.swayOffset = random(TWO_PI);
    this.rotation = random(-0.15, 0.15);

    this.age = 0;
    this.lifespan = random(220, 340);
    this.fontSize = random(10, 22);
    this.font = random(['Georgia', 'Verdana', 'Courier']);
    this.text = random(words);

    // soft sakura palette: blush, sakura pink, near-white petal
    const palettes = [
      { r: [255, 235], g: [200, 235], b: [220, 245] },
      { r: [255, 225], g: [150, 200], b: [190, 220] },
      { r: [255, 245], g: [235, 250], b: [240, 255] },
    ];
    const p = random(palettes);
    this.r = random(p.r[0], p.r[1]);
    this.g = random(p.g[0], p.g[1]);
    this.b = random(p.b[0], p.b[1]);
  }

  finished() {
    return this.age > this.lifespan;
  }

  update() {
    this.age += 1;
    this.y += this.vy;
    this.x = this.baseX + sin(this.age * this.swaySpeed + this.swayOffset) * this.swayAmount;
  }

  // fade in, hold, then fade out — instead of only ever fading in,
  // so petals actually disappear rather than piling up on screen forever
  alpha() {
    const t = this.age / this.lifespan;
    if (t < 0.15) return map(t, 0, 0.15, 0, 235);
    if (t > 0.75) return map(t, 0.75, 1, 235, 0);
    return 235;
  }

  show() {
    push();
    translate(this.x, this.y);
    rotate(this.rotation * sin(this.age * 0.02));
    noStroke();
    fill(this.r, this.g, this.b, this.alpha());
    textFont(this.font);
    textSize(this.fontSize);
    textAlign(CENTER, CENTER);
    text(this.text, 0, 0);
    pop();
  }
}
