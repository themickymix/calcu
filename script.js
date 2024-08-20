function appendValue(value) {
  document.getElementById("myInput").value += value;
}

function clearInput() {
  document.getElementById("myInput").value = "";
}

function deleteLast() {
  let input = document.getElementById("myInput").value;
  document.getElementById("myInput").value = input.slice(0, -1);
}

function calculateResult() {
  let input = document.getElementById("myInput").value;
  try {
    let result = eval(input); // Evaluate the expression (e.g., 5+3*2)
    document.getElementById("myInput").value = result;
  } catch (e) {
    document.getElementById("myInput").value = "Error";
  }
}


