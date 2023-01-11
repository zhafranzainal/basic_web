<!--
update.php
To update data of edit.php into database
-->

<?php

include("dbase.php");

// Write SQL statement that updates the record from table named "book"
extract($_POST);
$tarikh = date("d-m-Y", time());
$masa = date("H:i:s", time());

$query = "UPDATE book SET nama = '$nama', email = '$email', tarikh = '$tarikh', masa = '$masa', komen = '$komen' WHERE id = '$id'";
$result = mysqli_query($mysql, $query) or die("Could not execute query in edit.php");

if ($result) {
    echo "<script type='text/javascript'>
    window.location='display.php'
    </script>";
} else {
    echo "Error: " . $query . "<br>" . mysqli_error($mysql);
}

?>