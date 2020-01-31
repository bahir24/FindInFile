<?php

require_once 'libfindintext/libfindtext.php';
echo "<h1>Это начало</h1>";

$newSearch = new FindInFile('', 'main.css', 'flex');
$newSearch->findInFile();

?>