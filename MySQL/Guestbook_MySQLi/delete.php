<!--
delete.php
To delete one particular data
-->

<?php

include("dbase.php");

$idURL = $_GET['id'];

$query = "DELETE FROM book WHERE id = '$idURL'";
$result = mysqli_query($mysql, $query) or die("Could not execute query in edit.php");

if ($result) {
    echo "<script type='text/javascript'>
    window.location='display.php'
    </script>";
}

?>