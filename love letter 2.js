
$(document).ready(function () {

  const envelope = $("#envelope");
  const btnOpen = $("#open");
  const btnReset = $("#reset");


  // Open envelope
  function openEnvelope() {

    envelope
      .addClass("open")
      .removeClass("close");

  }


  // Close envelope
  function closeEnvelope() {

    envelope
      .addClass("close")
      .removeClass("open");

  }


  // Click envelope
  envelope.on("click", function () {

    if (envelope.hasClass("close")) {
      openEnvelope();
    } else {
      closeEnvelope();
    }

  });


  // Open button
  btnOpen.on("click", function (event) {

    event.stopPropagation();

    openEnvelope();

  });


  // Close button
  btnReset.on("click", function (event) {

    event.stopPropagation();

    closeEnvelope();

  });

});
