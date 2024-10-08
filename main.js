let maxFlights = 2;

function addFlight() {
  const flightCounter = document.getElementById("flightCounter");
  const addFlightButton = document.getElementById("addFlightButton");

  const bookingContent2 = document.getElementById("bookingContent2");
  const bookingContent3 = document.getElementById("bookingContent3");

  if (maxFlights > 0) {
    maxFlights--;
    flightCounter.textContent = maxFlights;

    if (maxFlights === 1) {
      bookingContent2.style.display = "flex";
      flightCounter.style.display = "none";
    }

    if (maxFlights === 0) {
      bookingContent3.style.display = "flex";
      addFlightButton.style.display = "none";
    }
  }
}

function removeFlight(flightId) {
  const bookingContent = document.getElementById(flightId);
  const flightCounter = document.getElementById("flightCounter");
  const addFlightButton = document.getElementById("addFlightButton");

  if (bookingContent.style.display === "flex") {
    bookingContent.style.display = "none";
    maxFlights++;
    flightCounter.textContent = maxFlights;

    if (maxFlights < 2) {
      addFlightButton.style.display = "flex";
    }
  }
}

document
  .querySelector("#removeButtonContainer2 .booking--next")
  .addEventListener("click", function () {
    removeFlight("bookingContent2");
  });

document
  .querySelector("#removeButtonContainer3 .booking--next")
  .addEventListener("click", function () {
    removeFlight("bookingContent3");
  });
