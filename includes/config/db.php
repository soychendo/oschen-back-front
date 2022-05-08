<?php

function connectDB() : mysqli  {

    $db = mysqli_connect('localhost', 'root', 'Almel@01ntm1990', 'windows');

    if(!$db) {
        echo 'Not Connect';
    } 
    return $db;

}