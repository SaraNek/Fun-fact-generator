// Array of fun facts
const funFacts = [
  "At 18, I’ve mastered the art of turning flour and sugar into happiness.",
  "My suitcase is always packed for the next adventure.",
  "Canvas and colors are my perfect escape.",
  "Baking, painting, and exploring the world are my ultimate trifecta.",
  "From kitchen creations to brushstrokes, my imagination knows no bounds.",
  "Each travel destination adds a new story to my life’s scrapbook.",
  "The smell of freshly baked cookies feels like home to me.",
  "My paintbrush is my magic wand, bringing imagination to life.",
  "Baking is my therapy, and the oven is my happy place.",
  "The colors of a sunset often find their way onto my canvas.",
  "Exploring the world teaches me lessons no classroom ever could.",
  "From decorating cakes to decorating walls, I love bringing beauty into life.",
];

// Select elements
const factDisplay = document.getElementById("fact");
const generateBtn = document.getElementById("generate-btn");

// Event listener for button
generateBtn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * funFacts.length);
  factDisplay.textContent = funFacts[randomIndex];
});
