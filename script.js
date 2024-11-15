// Array of fun facts
const funFacts = [
  "At 18, I’ve mastered the art of turning flour and sugar into happiness.",
  "My suitcase is always packed for the next adventure.",
  "Canvas and colors are my perfect escape.",
  "Baking, painting, and exploring the world are my ultimate trifecta.",
  "From kitchen creations to brushstrokes, my imagination knows no bounds.",
  "Bananas are berries, but strawberries aren't.",
  "Octopuses have three hearts.",
  "Honey never spoils; archaeologists have found edible honey in ancient tombs.",
  "A day on Venus is longer than a year on Venus.",
  "Wombat poop is cube-shaped.",
  "There are more stars in the universe than grains of sand on Earth.",
  "A group of flamingos is called a 'flamboyance.'",
  "Sharks existed before trees."
];

// Select elements
const factDisplay = document.getElementById("fact");
const generateBtn = document.getElementById("generate-btn");

// Event listener for button
generateBtn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * funFacts.length);
  factDisplay.textContent = funFacts[randomIndex];
});
