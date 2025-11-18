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
            <li class="nav-item"><a class="nav-link" href="learn.html">Learn</a></li>
            <li class="nav-item"><a class="nav-link" href="about.html">About Us</a></li>
            <li class="nav-item"><a class="nav-link" href="portfolio-brian.html">Brian's Portfolio</a></li>
            <li class="nav-item"><a class="nav-link" href="sales.html">Sales</a></li>
            <li class="nav-item"><a class="nav-link" href="location.html">Location</a></li>
            <li class="nav-item"><a class="nav-link" href="informative.html">Informative</a></li>
        </ul>
    </div>
  </nav>
  `;
});