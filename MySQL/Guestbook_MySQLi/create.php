<!--
create.php
Interface of insert data
-->

<html>

<head>
    <title>Buku Pelawat Saya</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
</head>

<body style="background-color: #FFFFFF; color: #000000;">

    <form method="post" action="insert.php">

        Nama:
        <input type="text" name="nama" size="40">
        <br>

        Email:
        <input type="text" name="email" size="25">
        <br>

        Catatan: <br>
        <textarea name="komen" cols="30" rows="8"></textarea>
        <br><br>

        <input type="submit" value="Hantar">
        <input type="reset" value="Semula">

        <br>

    </form>
    <hr>

    <div align="center">
        [ <a href="display.php">Balik ke Paparan</a> | <a href="index.php">Balik ke Halaman Utaman</a> ]
    </div>

</body>

</html>