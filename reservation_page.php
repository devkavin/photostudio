<?php
include 'session_check.php';
?>

<!DOCTYPE html>
<html>

<head>
    <script src="https://code.jquery.com/jquery-3.7.0.min.js"></script>

    <title>Reservation Page</title>
    <link rel="stylesheet" href="assets/css/reservation_page.css">

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
</head>

<body>
    <!-- Navbar -->
    <?php include 'navbar.php'; ?>

    <div class="container">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">Make a Reservation</h5>
                <form id="reservation-form" action="make_reservation.php" method="POST">
                    <div class="form-group">
                        <label for="reservation-date">Reservation Date:</label>
                        <input type="text" class="form-control datepicker" id="reservation-date" name="reservation-date"
                            placeholder="Select Date" required>
                    </div>

                    <div class="form-group">
                        <label for="studio">Studio:</label>
                        <select class="form-control" id="studio" name="studio" required>
                            <?php echo $studios; ?>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="time_slots">Time Slot:</label>
                        <select class="form-control" id="time_slots" name="time_slots" required>
                            <?php echo $time_slots; ?>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="package">Package:</label>
                        <select class="form-control" id="package" name="package" required>
                            <?php echo $packages; ?>

                        </select>
                    </div>
                    <div class="form-group">
                        <label for="price">Advance Payment Price:</label>
                        <input type="number" class="form-control" id="price" name="price"
                            placeholder="Enter Advance Payment Price" required>
                    </div>
                    <button type="submit" class="btn btn-primary">Make Reservation</button>
                </form>
            </div>
        </div>
    </div>


    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
    </script>
    <script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>
    <script src="reservation_page_script.js"></script>
</body>

</html>