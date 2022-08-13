let locationButton = document.getElementById("get-location");
let locationDiv = document.getElementById("location-details");

locationButton.addEventListener("click", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showLocation, checkError);
  } else {
    locationDiv.innerText = "ბრაუზერს არ აქვს ლოკაციის მხარდაწერა";
  }
});

const checkError = (error) => {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      locationDiv.innerText = "გთხოვთ, დაუშვათ წვდომა მდებარეობაზე";
      break;
    case error.POSITION_UNAVAILABLE:
      locationDiv.innerText = "ინფორმაცია მდებარეობის შესახებ მიუწვდომელია";
      break;
    case error.TIMEOUT:
      locationDiv.innerText = "მომხმარებლის მდებარეობის მიღების მოთხოვნა ამოიწურა";
  }
};

const showLocation = async (position) => {
  let response = await fetch(
    `https://nominatim.openstreetmap.org/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json`
  );

  let data = await response.json();
  locationDiv.innerText = `${data.address.city}, ${data.address.country}`;
};
