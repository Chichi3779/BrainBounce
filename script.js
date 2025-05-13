const score = localStorage.getItem("finalScore");
  document.getElementById("score").innerText = `${score}/5`;
  localStorage.removeItem("finalScore"); // Clean up after display