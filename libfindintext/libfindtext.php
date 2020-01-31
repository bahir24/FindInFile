<?php

class FindInFile {
    public $path;
    public $filename;
    public $arrStrings;
    public $reqiuredString;
    public $positionOfRequiresString;

    public function __construct($path, $filename, $reqiuredString){
        $this->path = $path;
        $this->reqiuredString = $reqiuredString;
        $this->filename = $filename;
        $this->arrStrings = file($this->path . $this->filename);
    }

    public function findInFile(){
        foreach($this->arrStrings as $strNumber => $fileString) {
            if(strpos($this->reqiuredString, $fileString)){
                echo "exists in file in string number:".$strNumber."position in string:".strpos($this->reqiuredString, $fileString);
            };
        }        
    }
}

?>