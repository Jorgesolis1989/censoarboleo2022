<?php

if (isset($_GET['direccion']))
{
    $direccion = $_GET['direccion'];
    echo "Se ha ingresado una direccion: ".$direccion;

    $googlemaps="https://maps.googleapis.com/maps/api/geocode/json?address=".urlencode($direccion)."&key=AIzaSyByPiVuvFUVLo0OejGKk0S2vfqPuGap2h8";
    $googlemapsjson= file_get_contents($googlemaps);
    $googlearray=json_decode($googlemapsjson, true);
    $lat= $googlearray["results"][0]["geometry"]["location"]["lat"];
    $lng= $googlearray["results"][0]["geometry"]["location"]["lng"];
    echo "la latitud es:".$lat." La longitud:".$lng;

   
}



?>  

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
   
    <form action="" method="GET">
        <label for="direccion">Ingrese Direccion</label>
        <input type="text" name="direccion">

        <button type="submit">Consultar</button>



    </form>
</body>
</html>