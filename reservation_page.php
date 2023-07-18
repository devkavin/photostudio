<!DOCTYPE html>
<html>

<head>
    <script src="https://code.jquery.com/jquery-3.7.0.min.js"></script>

    <title>Reservation Page</title>
    <link rel="stylesheet" href="assets/css/reservation_page.css">
    <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/m8tro-bootstrap/3.3.7/m8tro.min.css"> -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
</head>

<body>
    <!-- Navbar -->
    <?php include 'navbar.php'; ?>

    <div class="container">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">Make a Reservation</h5>
                <form id="reservation-form" action="make_reservation.php" method="POST">
                    <div class="row">
                        <div class="input-field col s12 m6">
                            <label for="reservation-date">Reservation Date:</label>
                            <input type="text" class="datepicker" id="reservation-date" name="reservation-date" placeholder="Select Date" required>
                        </div>
                        <div class="input-field col s12 m6">
                            <label for="studio">Studio:</label>
                            <select class="select" id="studio" name="studio" required>
                                <?php echo $studios; ?>
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12 m6">
                            <label for="time_slots">Time Slot:</label>
                            <select class="select" id="time_slots" name="time_slots" required>
                                <?php echo $time_slots; ?>
                            </select>
                        </div>
                        <div class="input-field col s12 m6">
                            <label for="package">Package:</label>
                            <select class="select" id="package" name="package" required>
                                <?php echo $packages; ?>

                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <label for="price">Advance Payment Price:</label>
                            <input type="number" class="validate" id="price" name="price" placeholder="Enter Advance Payment Price" required>
                        </div>
                    </div>
                    <button type="submit" class="btn waves-effect waves-light">Make Reservation</button>
                </form>
            </div>
        </div>
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>
    <script src="reservation_page_script.js"></script>
</body>

</html>