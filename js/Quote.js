document.addEventListener("DOMContentLoaded", function () {

  function loadQuote() {
    fetch("https://api.adviceslip.com/advice")
      .then(response => response.json())
      .then(data => {
        document.getElementById("quoteText").textContent =
          `"${data.slip.advice}"`;
      })
      .catch(() => {
        document.getElementById("quoteText").textContent =
          "Oops! Couldn't load advice 😅";
      });
  }

  loadQuote();

  document.getElementById("newQuoteBtn").addEventListener("click", loadQuote);

});