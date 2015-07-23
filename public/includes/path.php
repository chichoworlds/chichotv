<?php



$path=$_GET['path'];


$directorio=dir($path);





echo "Directorio ".$path.":<br><br>";





while ($archivo = $directorio->read())


{


    echo $archivo."<br>";


}


$directorio->close();


?>

