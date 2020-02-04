<?php

class FindInFile {
    public $path;
    public $filename;
    public $reqiuredString;
    public function __construct(){
    }

    public function findInFile(){
        $this->path .= $this->filename;
        if(file_exists($this->path)){
            $processFile = fopen($this->path, "r");
            if($processFile){
                $fileIndex = 0;
                $returnedVars = [];
                while(($processLine = fgets($processFile)) !== false) {                    
                    if(strpos($processLine, $this->reqiuredString) !== false){
                        $returnedVars['line'] = $fileIndex;
                        $returnedVars['symbol'] = strpos($processLine, $this->reqiuredString);                        
                        return $returnedVars;
                    };
                    $fileIndex++;
                }
            } else {
                die('file is empty');
            }
        } else {
            die('File does not exists. Check path and filename');
        };     
    }
}

?>