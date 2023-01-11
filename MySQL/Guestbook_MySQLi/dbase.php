<!--
dbase.php
To connect between php scripting and database
-->

<?php

define("DATABASE_HOST", "localhost");
define("DATABASE_USER", "root");
define("DATABASE_PASSWORD", "");

// 1. Connect to MySQL server
$mysql = mysqli_connect(DATABASE_HOST, DATABASE_USER, DATABASE_PASSWORD);

// If connection failed, then display mysql error
if (mysqli_connect_errno()) {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

// 2. Select the database named "guestbook"
mysqli_select_db($mysql, "guestbook") or die(mysqli_error($mysql));

// Set the default time zone to use in Malaysia
date_default_timezone_set('Asia/Kuala_Lumpur');

?>