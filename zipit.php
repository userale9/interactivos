<?php
class FlxZipArchive extends ZipArchive {
    public function addDir($location, $name) {
        $this->addEmptyDir($name);

        $this->addDirDo($location, $name);
     }
    private function addDirDo($location, $name) {
        $name .= '/';
        $location .= '/';
        $dir = opendir ($location);
        while ($file = readdir($dir))
        {
            if ($file == '.' || $file == '..' || $file == "klok_positioner.html" || $file == "klok_positioner.js" || $file == "checklist.pdf") continue;
            $do = (filetype( $location . $file) == 'dir') ? 'addDir' : 'addFile';
            $this->$do($location . $file, $name . $file);
        }
    } 
}
$the_folder = $_GET["fn"];
$zip_file_name = $_GET["fn"].'.zip';
$za = new FlxZipArchive;
$res = $za->open($zip_file_name, ZipArchive::CREATE);
if($res === TRUE) {
    $za->addDir($the_folder, basename($the_folder));
    $za->close();
    header('Content-Type: application/zip');
    header('Content-disposition: attachment; filename='.$zip_file_name.'.zip');
    header('Content-Length: ' . filesize($zip_file_name));
	readfile($zip_file_name);
	unlink($zip_file_name);
}	
?>