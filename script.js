    
let display = document.getElementById("display");

    function insert(val) {
      display.value += val;
    }
    function clearDisplay() {
      display.value = "";
    }
    function calculate() {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = "Error";
      }
    }