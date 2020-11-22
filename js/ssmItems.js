<!--

/*
Configure menu styles below
NOTE: To edit the link colors, go to the STYLE tags and edit the ssm2Items colors
*/

YOffset=350; // no quotes!!
XOffset=0;
staticYOffset=100; // no quotes!!
slideSpeed=10 // no quotes!!
waitTime=100; // no quotes!! this sets the time the menu stays out for after the mouse goes off it.
menuBGColor="";
menuIsStatic="yes"; //this sets whether menu should stay static on the screen
menuWidth=300; // Must be a multiple of 10! no quotes!!
menuCols=10;
hdrFontFamily="arial black";
hdrFontSize="5";
hdrFontColor="";
hdrBGColor="";
hdrAlign="center";
hdrVAlign="center";
hdrHeight="50";
linkFontFamily="arial black";
linkFontSize="3";
linkBGColor="#ffa900";
linkOverBGColor="white";
linkTarget="_top";
linkAlign="center";
barBGColor="";
barFontFamily="arial";
barFontSize="5";
barFontColor="white";
barVAlign="center";
barWidth=150; // no quotes!!
barText="<IMG src='images/sabias_que.png'> "; // <IMG> tag supported. Put exact html for an image to show.

///////////////////////////

// ssmItems[...]=[name, link, target, colspan, endrow?] - leave 'link' and 'target' blank to make a header
ssmItems[0]=["Internet es positivo y negativo", "sabias_que_bueno_malo.php"]
ssmItems[1]=["Â¿QuÃ© significa...?", "sabias_que_glosario.php"]
ssmItems[2]=["Los derechos de los niÃ±os y las niÃ±as en Internet", "sabias_que_derechos.php"]
buildMenu();

//-->