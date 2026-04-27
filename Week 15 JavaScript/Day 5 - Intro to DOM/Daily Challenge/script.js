// =======================
// DATA (array of objects)
// =======================
// Each planet has:
// - name
// - color
// - number of moons
const planets = [
  { name: "Mercury", color: "gray", moons: 0 },
  { name: "Venus", color: "orange", moons: 0 },
  { name: "Earth", color: "blue", moons: 1 },
  { name: "Mars", color: "red", moons: 2 },
  { name: "Jupiter", color: "brown", moons: 4 },
  { name: "Saturn", color: "gold", moons: 3 },
  { name: "Uranus", color: "lightblue", moons: 2 },
  { name: "Neptune", color: "darkblue", moons: 1 }
];

// =======================
// SELECT HTML CONTAINER
// =======================
const section = document.querySelector(".listPlanets");

// =======================
// CREATE PLANETS
// =======================
planets.forEach(planet => {
// => defines the function 
  // Create a div for each planet
  const planetDiv = document.createElement("div");

  // Add class "planet" (CSS already defines size/shape)
  planetDiv.classList.add("planet");

  // Give each planet a unique background color
  planetDiv.style.backgroundColor = planet.color;

  // Add the planet name inside the div
  planetDiv.textContent = planet.name;

  // =======================
  // CREATE MOONS
  // =======================
  // Loop based on how many moons the planet has
  for (let i = 0; i < planet.moons; i++) {

    // Create moon div
    const moon = document.createElement("div");

    // Add class "moon"
    moon.classList.add("moon");

    // Position the moon randomly inside the planet
    // (Not realistic, but avoids stacking all moons in one spot)
    moon.style.top = Math.random() * 70 + "px";
    moon.style.left = Math.random() * 70 + "px";

    // Attach moon to its planet
    planetDiv.appendChild(moon);
  }

  // =======================
  // ADD PLANET TO PAGE
  // =======================
  section.appendChild(planetDiv);
});