<?php

// 1. Connect to MySQL server
$mysql = mysqli_connect("localhost", "root", "");
mysqli_connect("localhost", "root", "") or die(mysqli_connect_error());

// 2. Create a database named "mydatabase"
mysqli_query($mysql, "CREATE DATABASE mydatabase") or die(mysqli_error($mysql));

// 3. Close the connection to MySQL server
mysqli_close($mysql);
