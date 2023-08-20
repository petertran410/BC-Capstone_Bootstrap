var body = document.querySelector("body"), // Creates a variable called body, so we can reference it more easily below.
  goLight = function() { // Creates a function called goLight that adds the 'dark' class to the body
    body.className = "";
  },
  goDark = function() { // Creates a function called goDark that removes the 'dark' class from the body
    body.className = "";
    body.classList.add("dark");
  }

document.querySelector("#theme1").addEventListener("click", goLight, false); // Tells the first button to run the goLight function when clicked

document.querySelector("#theme2").addEventListener("click", goDark, false); // Tells the second button to run the goDark function when clicked