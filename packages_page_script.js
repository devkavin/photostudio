$(document).ready(function () {
  $("#packageSelect").change(function () {
    var selectedPackage = $("#packageSelect").val();
    var basePrice = 0;
    var additionalPrice = 0;

    if (selectedPackage === "package1") {
      basePrice = 2000;
      $("#number-of-photos").val("5");
    } else if (selectedPackage === "package2") {
      basePrice = 2500;
      $("#number-of-photos").val("5");
    } else if (selectedPackage === "package3") {
      basePrice = 3000;
      $("#number-of-photos").val("5");
    }

    $("#packagePrice").text("LKR." + basePrice);
    $("#additionalPrice").text("LKR." + additionalPrice);
    $("#totalPrice").text("LKR." + (basePrice + additionalPrice));

    if (selectedPackage !== "") {
      $("#location").prop("disabled", false);
      $("#number-of-photos").prop("disabled", false);
      $("#reservationBtn").removeAttr("disabled");
    } else {
      $("#location").prop("disabled", true);
      $("#number-of-photos").prop("disabled", true);
      $("#reservationBtn").attr("disabled", "disabled");
    }
  });

  $("#number-of-persons, #number-of-photos").change(function () {
    var selectedPackage = $("#packageSelect").val();
    var basePrice = 0;
    var additionalPrice = 0;
    var numberOfPersons = parseInt($("#number-of-persons").val());
    var numberOfPhotos = parseInt($("#number-of-photos").val());

    if (selectedPackage === "package1") {
      basePrice = 2000;
    } else if (selectedPackage === "package2") {
      basePrice = 2500;
    } else if (selectedPackage === "package3") {
      basePrice = 3000;
    }

    if (numberOfPhotos === 5) {
      additionalPrice = 0;
    } else if (numberOfPhotos === 10) {
      additionalPrice = 500;
    } else if (numberOfPhotos === 15) {
      additionalPrice = 1000;
    } else if (numberOfPhotos === 20) {
      additionalPrice = 1500;
    }

    var totalPrice = basePrice + additionalPrice;

    $("#additionalPrice").text("LKR." + additionalPrice);
    $("#totalPrice").text("LKR." + totalPrice);
  });
});

$(document).ready(function () {
  var carouselItems = Array.from(document.querySelectorAll("#carousel .item"));
  var position = 1;

  // Radio buttons functionality
  var radioButtons = Array.from(
    document.querySelectorAll(".radio-buttons input")
  );

  function updateCarousel() {
    carouselItems.forEach((item) =>
      item.style.setProperty("--position", position)
    );
  }

  function moveToNextImage() {
    position = (position % 5) + 1;
    updateCarousel();
    radioButtons[position - 1].checked = true;
  }

  function startCarousel() {
    interval = setInterval(moveToNextImage, 3000);
  }

  function stopCarousel() {
    clearInterval(interval);
  }

  radioButtons.forEach(function (radioButton, index) {
    radioButton.addEventListener("click", function () {
      position = index + 1;
      updateCarousel();
    });
  });

  startCarousel();
});
