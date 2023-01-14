<!--
display.php
To display all information of database
-->

<html>

<head>
	<title>Paparan Buku Pelawat Saya</title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
</head>

<body style="background-color: #FFFFFF; color: #000000;">

	<ol>

		<?php

		include("dbase.php");

		$query = "SELECT * FROM book";
		$result = mysqli_query($mysql, $query);

		if (mysqli_num_rows($result) > 0) {

			// output data of each row
			while ($row = mysqli_fetch_assoc($result)) {

				$id = $row["id"];
				$nama = $row["nama"];
				$email = $row["email"];
				$tarikh = $row["tarikh"];
				$masa = $row["masa"];
				$komen = $row["komen"];

		?>

				<li>
					Nama : <?php echo $nama; ?><br>
					Email : <?php echo $email; ?><br>
					Tarikh / Masa : <?php echo "$tarikh / $masa"; ?><br>
					Catatan : <?php echo nl2br($komen); ?><br>
					Tindakan : <a href="edit.php?id=<?php echo $id; ?>">Ubah</a> / <a href="delete.php?id=<?php echo $id; ?>">Padam</a><br>
				</li>

		<?php
			}
		} else {
			echo "0 results";
		}
		?>

	</ol>

	<div align="center">
		[ <a href="index.php">Balik ke Halaman Utama</a> | <a href="create.html">Tambah Buku Pelawat</a> ]
	</div>

</body>

</html>