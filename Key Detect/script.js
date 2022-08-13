window.addEventListener("keydown", (e) => {

  document.getElementById(
    "result"
  ).innerHTML = `ღილაკი: <span>${e.key}</span><span>
                 ღილაკის კოდი: ${e.keyCode}</span>`;

});
