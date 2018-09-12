Function Get-Image($a){
    begin{        
         Add-Type -assembly System.Drawing
    } 
     process{
          $fi=[System.IO.FileInfo]$a  
          if( $fi.Exists){
               $img = [System.Drawing.Image]::FromFile($a,0)
               $img.Clone()
               $img.Dispose()       
          }else{
               Write-Host "File not found:" $a -fore yellow       
          }   
     }    
}


Function images{
	echo "["
	Get-ChildItem "./images/*.jpg"  | ForEach-Object { 
		$returnVals = Get-Image $_.FullName
		echo '{src: "./assets/images/'$_.Name'",width: '$returnVals[0].width', height: '$returnVals[0].height'}'
	}
	echo "]"
}

images | Set-Content("result.js")