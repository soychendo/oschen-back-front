<?php

function connectDB() : mysqli  {

    $db = mysqli_connect('localhost', 'root', '', 'windows');

    if(!$db) {
        echo 'Not Connect';
    } 
    return $db;

}