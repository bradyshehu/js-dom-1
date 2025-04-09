const offLampEl = document.querySelector("#off-lamp");
console.log(offLampEl);
const onLampEl = document.querySelector("#on-lamp");
console.log(onLampEl);
const switchEl = document.querySelector("#switch");
console.log(switchEl);

switchEl.addEventListener("click", function () {
  if (offLampEl.classList.contains("d-block")) {
    offLampEl.classList.replace("d-block", "d-none");
    onLampEl.classList.replace("d-none", "d-block");
  } else {
    offLampEl.classList.replace("d-none", "d-block");
    onLampEl.classList.replace("d-block", "d-none");
  }
});
