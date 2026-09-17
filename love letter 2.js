document.addEventListener("DOMContentLoaded", function () {
  const envelope = document.getElementById("envelope");
  const btnOpen = document.getElementById("open");
  const btnReset = document.getElementById("reset");

  function openEnvelope() {
    envelope.classList.add("open");
    envelope.classList.remove("close");
  }

  function closeEnvelope() {
    envelope.classList.add("close");
    envelope.classList.remove("open");
  }

  envelope.addEventListener("click", openEnvelope);
  btnOpen.addEventListener("click", openEnvelope);
  btnReset.addEventListener("click", closeEnvelope);
});