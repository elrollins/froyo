// made prompt //
const input = prompt("Enter a list of froyo flavors, separated by commas:");
// turned input into an array //
const flavors = input.split(",");

const flavorCounter = {};
// allowing flavors to have a count based on the input //
for (let i = 0; i < flavors.length; i++) {
  const flavor = flavors[i];
  if (flavor in flavorCounter) {
    flavorCounter[flavor]++;
  } else {
    flavorCounter[flavor] = 1;
  }
}

console.log(flavorCounter);
