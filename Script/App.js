// Load navbar and footer
fetch("navbar.html")
    .then(res => res.text())
    .then(data => document.getElementById("header_menu").innerHTML = data);

  fetch("footer.html")
    .then(res => res.text())
    .then(data => document.getElementById("footer_section").innerHTML = data);
  // Range input value display
  const rangeInput = document.getElementById('range4');
  const rangeOutput = document.getElementById('rangeValue');

  // Set initial value
  rangeOutput.textContent = rangeInput.value;

  rangeInput.addEventListener('input', function() {
    rangeOutput.textContent = this.value;
  });
