// Get the animation element
var elem = document.getElementById("myAnimation");

// Set the initial position
var pos_x = 150;
var pos_y = 150;



// Define the animation function
function myMove() {
  // Increment the position by 1 pixel
  pos_x = pos_x + 5*Math.sign(Math.random()-0.5);
  pos_y = pos_y + 5*Math.sign(Math.random()-0.5);
  // Update the style properties
  elem.style.top = pos_x + "px";
  elem.style.left = pos_y + "px";
  // Check if the position reaches the end of the container
  if (pos_x == 350) {
    // Reset the position to the start
    pos_x = 0;
  }
  // Request the next frame of the animation
  requestAnimationFrame(myMove);
}

// Start the animation
myMove();
