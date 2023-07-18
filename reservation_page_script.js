$(document).ready(function () {
  // Initialize the Bulma datepicker
  flatpickr("#reservation-date", {
    dateFormat: "Y-m-d",
    defaultDate: new Date(),
  });

  var selectedStudioId = "";

  function fetchStudios() {
    var selectedDate = $("#reservation-date").val();

    // Send AJAX request to retrieve available studios
    $.ajax({
      url: "fetch_studios.php",
      method: "POST",
      data: {
        date: selectedDate,
      },
      success: function (response) {
        // Update the options in the studio dropdown menu
        $("#studio").html(response);
        selectedStudioId = "";

        // Fetch the time slots for the selected studio
        fetchTimeSlots();
      },
    });
  }

  function fetchTimeSlots() {
    var selectedDate = $("#reservation-date").val();
    var selectedStudioIdNew = $("#studio").val();

    // Send AJAX request to retrieve available time slots
    if (selectedStudioIdNew !== selectedStudioId) {
      selectedStudioId = selectedStudioIdNew;
      $.ajax({
        url: "fetch_time_slots.php",
        method: "POST",
        data: {
          date: selectedDate,
          studio: selectedStudioId,
        },
        success: function (response) {
          // Update the options in the time slot dropdown menu
          $("#time_slots").html(response);
          fetchPackages();
        },
      });
    }
  }

  function fetchPackages() {
    var selectedDate = $("#reservation-date").val();
    var selectedStudio = $("#studio").val();
    var selectedTimeSlot = $("#time_slots").val();

    // Send AJAX request to retrieve available packages
    $.ajax({
      url: "fetch_packages.php",
      method: "POST",
      data: {
        date: selectedDate,
        studio: selectedStudio,
        time_slots: selectedTimeSlot,
      },
      success: function (response) {
        // Update the options in the package dropdown menu
        $("#package").html(response);
      },
    });
  }

  $("#reservation-date").change(function () {
    fetchStudios();
  });

  $("#studio").change(function () {
    fetchTimeSlots();
  });

  $("#time_slots").change(function () {
    fetchPackages();
  });

  $("#package").change(function () {
    var selectedPackage = $(this).val();

    // Send AJAX request to retrieve advance payment price
    $.ajax({
      url: "fetch_advance_payment_price.php",
      method: "POST",
      data: {
        package: selectedPackage,
      },
      success: function (response) {
        // Update the advance payment price
        $("#price").val(response);
      },
    });
  });

  $("#reservation-form").submit(function (e) {
    e.preventDefault();

    var selectedDate = $("#reservation-date").val();
    var selectedStudio = $("#studio").val();
    var selectedTimeSlot = $("#time_slots").val();
    var selectedPackage = $("#package").val();
    var advancePaymentPrice = $("#price").val();
    var availability = "not available";

    // Send AJAX request to make a reservation
    $.ajax({
      url: "make_reservation.php",
      method: "POST",
      data: {
        date: selectedDate,
        studio: selectedStudio,
        time_slot: selectedTimeSlot,
        package: selectedPackage,
        price: advancePaymentPrice,
        availability: availability,
      },
      success: function (response) {
        alert(response);
      },
    });
  });

  fetchStudios();
});
