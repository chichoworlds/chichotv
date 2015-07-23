<?php

	$total_mp4 = count(glob("video/{*.mp4}",GLOB_BRACE));
	echo "total_mp4 :  = ".$total_mp4;

?>