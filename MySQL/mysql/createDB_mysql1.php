<?php

// 1. Connect to MySQL server
mysql_connect("localhost", "root", "") or die(mysql_error());

// 2. Create a database named "mydatabase"
mysql_query("CREATE DATABASE mydatabase") or die(mysql_error());

// 3. Close the connection to MySQL server
mysql_close();
