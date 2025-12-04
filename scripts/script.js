/*
CSCY 2000 Team Project Part 1
Team Name: Not on a Monday (N.O.A.M.)
Members: Mason Williams, Jacob LaFerriere, Zedekai Nelson, Brian Casey
Class: CSCY 2000 Web Development
*/

// Example: simple script to toggle a message
document.addEventListener("DOMContentLoaded", () => {
  // Mason's footer (unchanged)
  if (document.getElementById("footer-placeholder")) {
    document.getElementById("footer-placeholder").innerHTML = `
      <footer class="bg-dark text-white text-center py-3">
        <p>
          &copy; 2025 NOAM Cybersecurity | CSCY 2000 | 
          <a href="portfolio-mason.html" class="text-white">Mason Williams</a>
        </p>
      </footer>
    `;
  }

      // Zedekai's footer (New)
  if (document.getElementById("footer-placeholder2")) {
    document.getElementById("footer-placeholder2").innerHTML = `
      <footer class="bg-dark text-white text-center py-3">
        <p>
          &copy; 2025 NOAM Cybersecurity | CSCY 2000 | 
          <a href="portfolio-Zedekai.html" class="text-white">Zedekai Nelson</a>
        </p>
      </footer>
    `;
  }

  // Brian's footer (new section)
  if (document.getElementById("footer-placeholder1")) {
    document.getElementById("footer-placeholder1").innerHTML = `
      <footer class="bg-dark text-white text-center py-3">
        <p>
          &copy; 2025 NOAM Cybersecurity | CSCY 2000 | 
          <a href="portfolio-brian.html" class="text-white">Brian Casey</a>
        </p>
      </footer>
    `;
  }
});

