<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<?php

	$maindir = "bachillerato/recursos/";

  function getDirectoryList () {
    $files = array();
    $dir = new DirectoryIterator( $GLOBALS["maindir"]);
    foreach ($dir as $fileinfo) {
    	if($fileinfo != "." && $fileinfo != ".." &&  $fileinfo != "0-master" && $fileinfo != "0-master-klok"){
	    	$files[$fileinfo->getFilename()] = $fileinfo->getFilename();
	    }
	}
	ksort($files);
    return $files;
  }

  function getName($dir){
  	$content = file_get_contents($GLOBALS["maindir"] . $dir."/config.js");
  	$l1 = explode("\n", $content);
  	$l1 = $l1[0];
  	$l1 = explode("=", $l1);
  	$l1 = $l1[1];
  	echo str_replace(';', '', str_replace('"', '' , $l1));
  }

?>
<html>
	<head>
		<title>Interactivos Santillana Bachillerato</title>
		<meta charset="utf-8" />
		<style>
			body {
				font-family: arial, helvetica, sans-serif;
				font-size: 12px;
				line-height: 14px;
				color: #333333;
				margin: 20px;
			}

			.files{
				border-collapse: collapse;
			}

			.files th{
				padding: 8px;
			}

			.files tr:hover{
				background: #EFEFEF;
			}

			.files td{
				border-bottom: solid 1px #999999;
				border-top: solid 1px #999999;
				border-collapse: collapse;
				padding: 8px;
			}

			.tit{
				font-size: 18px;
				text-align: left;
				margin-bottom: 10px;
				display: block;
			}
			.copy{
				border: none !important;
				padding-top: 30px !important;
				font-size: 10px;
				background: #FFFFFF;
			}
			a{
				color: #ff6904;
				text-decoration: none;
			}
			a:hover{
				color: #333333;
				text-decoration: none;
			}
		</style>
	</head>
	<body>
		<div class="tit">
		<img src="logo.png" width="100" height="100" style="margin-bottom: 32px;"/><br>
		Interactivos Santillana <span style="font-size:10px">&#9654;</span> Bachillerato 2014</div>
		<table cellpadding="0" cellspacing="0" border="0" align="left" class="files">
			<tr>
				<th valign="center" align="left">
					No.
				</th>
				<th valign="center" align="left">
					CÓDIGO
				</th>
				<th valign="center" align="left">
					TÍTULO
				</th>
				<th valign="center" align="left">
					FECHA
				</th>
				<th valign="center" align="left" colspan="2">
					ACCIONES
				</th>
			</tr>
			<?php $cnt = 0; foreach(getDirectoryList () as $dir){ $cnt += 1;?>

			<tr>
				<td valign="center" align="right">
					<?php echo $cnt; ?>.
				</td>
				<td valign="center" align="left">
					<?php echo $dir; ?>
				</td>
				<td valign="center" align="left">
					<?php getName($dir);?>
				</td>
				<td valign="center" align="left">
					<?php echo date ("Y-m-d", filemtime($maindir.$dir));?>
				</td>
				<td valign="center" align="crenter" class="action">
					<a href="<?php echo $maindir.$dir; ?>/index.html" target="_blank" >VER</a>
				</td>
				<td valign="center" align="crenter" class="action">
					<a href="zipit.php?fn=<?php echo $maindir.$dir; ?>" >
					DESCARGAR ZIP
				</td>
			</tr>
			<?php } ?>
			<tr>
				<td valign="center" align="left" colspan="6" class="copy">
					© 2014 - 2015 klok s.a. de c.v. | derechos reservados
				</td>
			</tr>
		</table>
	</body>
</html>

