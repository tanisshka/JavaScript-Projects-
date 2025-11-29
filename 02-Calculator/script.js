const inputBar = document.querySelector(".input");
let string = "";
const buttons = Array.from(document.querySelectorAll(".btn"));

buttons.forEach(button => {
  button.addEventListener("click", e => {
    let value = e.target.innerHTML;

    if (value === "=") {
      // Convert UI operators to JS operators
      string = string
        .replace(/×/g, "*")
        .replace(/÷/g, "/")
        .replace(/−/g, "-");
      
      try {
        string = eval(string);
        inputBar.value = string;
      } catch {
        inputBar.value = "Error";
        string = "";
      }
    }

    else if (value === "AC") {
      string = "";
      inputBar.value = "";
    }

    else {
      string += value;
      inputBar.value = string;
    }
  });
});
