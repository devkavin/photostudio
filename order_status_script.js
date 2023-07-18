$(document).ready(function () {
  // Handle cancel button click
  $(".btn-cancel").click(function () {
    var reservationId = $(this).data("reservation-id");

    // Show a confirmation prompt
    var confirmCancel = confirm(
      "Are you sure you want to cancel this reservation?"
    );

    if (confirmCancel) {
      // Send AJAX request to cancel the reservation
      $.ajax({
        url: "cancel_reservation.php",
        method: "POST",
        data: {
          reservationId: reservationId,
        },
        success: function (response) {
          // Update the UI or display a success message
          alert(response);
          // Refresh the page
          location.reload();
        },
      });
    }
  });

  // Handle print button click
  $(".btn-print").click(function () {
    var reservationId = $(this).data("reservation-id");

    // Open a new window with the print preview page
    var printWindow = window.open(
      "print_preview.php?reservationId=" + reservationId,
      "_blank"
    );
    // Close window after print
    // Print the page
    printWindow.print();
    printWindow.onafterprint = function () {
      printWindow.close();
    };
  });
});
