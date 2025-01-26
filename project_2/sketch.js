const SNOWFLAKE_COUNT = 500;
const SIZE = 20; // Adjusted size for emojis
const GRAVITY = 1;

const SNOWFLAKES = [];

// Will run once when the sketch is opened
function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  textSize(SIZE); // Set the emoji size
  textAlign(CENTER, CENTER); // Align the emoji in the center

  // Initialize the snowflakes with random positions
  for (let i = 0; i < SNOWFLAKE_COUNT; i++) {
    SNOWFLAKES.push({
      x: random(width),
      y: random(height)
    });
  }
}

// Will run every frame (refreshes many times per second)
function draw() {
  // Gradient background
  for (let i = 0; i < height; i++) {
    let inter = map(i, 0, height, 0, 1); // Interpolates from 0 to 1
    let c = lerpColor(color('darkblue'), color('lightblue'), inter); // Creates a color gradient
    stroke(c);
    line(0, i, width, i); // Draws the gradient line
  }

  // Iterate through each snowflake to draw and update them
  for (let i = 0; i < SNOWFLAKES.length; i++) {
    const snowflake = SNOWFLAKES[i];

    // Draw the snowflake emoji
    text('❄️', snowflake.x, snowflake.y);

    // Update snowflake position
    if (snowflake.y > height + SIZE) snowflake.y = -SIZE;
    else snowflake.y += GRAVITY;
  }
}