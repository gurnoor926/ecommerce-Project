 fetch("navbar.html")
    .then(res => res.text())
    .then(data => document.getElementById("header_menu").innerHTML = data);

  fetch("footer.html")
    .then(res => res.text())
    .then(data => document.getElementById("footer_section").innerHTML = data);