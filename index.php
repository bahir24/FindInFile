<?php

require_once 'libfindintext/FindInFile.php';

echo "<h1>Это начало</h1>";

$newSearch = new FindInFile;
$newSearch->path = '';
$newSearch->filename = 'main.css';
$newSearch->reqiuredString = 'wrap';
print_r($newSearch->findInFile());

?>