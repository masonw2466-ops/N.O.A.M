/*
CSCY 2000 Team Project Part 1
Team Name: Not on a Monday (N.O.A.M.)
Members: Mason Williams, Jacob LaFerriere, Zedekai Nelson, Brian Casey
Class: CSCY 2000 Web Development
*/

// Example: simple script to toggle a message
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("navigation-placeholder").innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="index.html">NOAM Cybersecurity</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
            <li class="nav-item"><a class="nav-link" href="learn.html">Learn</a></li>
            <li class="nav-item"><a class="nav-link" href="aboutUS.html">About Us</a></li>
            <li class="nav-item"><a class="nav-link" href="sales.html">Sales</a></li>
            <li class="nav-item"><a class="nav-link" href="contact.html">Contact Us</a></li>
            <li class="nav-item"><a class="nav-link" href="informative.html">Informative</a></li>
        </ul>
    </div>
  </nav>
  `;
});

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("footer-placeholder").innerHTML = `
    <footer class="bg-dark text-white text-center py-3">
        <p>
            &copy; 2025 NOAM Cybersecurity | CSCY 2000 | 
            <a href="portfolio-brian.html" class="text-white">Brian Casey</a>
            <a href="portgolio-mason.html" class="text-whtie">Mason Williams</a>
        </p>
    </footer>
  `;
});