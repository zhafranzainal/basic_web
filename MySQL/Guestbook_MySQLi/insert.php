<!--
insert.php
To insert data of create.php into database
-->

<?php

include("dbase.php");

// Write SQL statement that inserts the record into table named "book"
extract($_POST);
$tarikh = date("d-m-Y", time());
$masa = date("H:i:s", time());

$query = "INSERT INTO book (nama, email, tarikh, masa, komen) VALUES('$nama','$email','$tarikh','$masa','$komen')";
$result = mysqli_query($mysql, $query);

if ($result) {
    echo "<script type='text/javascript'>
    window.location='display.php'
    </script>";
} else {
    echo "Error: " . $query . "<br>" . mysqli_error($mysql);
}

?>