
const path = require('path');
const fs = require('fs');
const fsPromises = fs.promises;
const filesPath = path.join(__dirname, 'files-copy');
const folderPath = path.join(__dirname, 'files');

fs.mkdir(filesPath, {recursive: true}, (err) => {
	if (err) throw err;	
});

 	fs.readdir(filesPath, function (err, files) {
        if (err) throw err;
        files.forEach(function (name) {
			const fileNew = path.join(filesPath, name);
			fs.unlink (fileNew, err => {
        		if (err) throw err;
        	});
        });
	}); 
	
    fs.readdir(folderPath, function (err, files) {
        if (err) throw err;
        
        files.forEach(function (name) {
            const filePath = path.join(folderPath, name);
            const fileNew = path.join(filesPath, name);
            //fsPromises.unlink (fileNew);
            fsPromises.copyFile( filePath , fileNew )
				.then( function () {
				//console.log( "File Copied" );
				})
				. catch ( function (error) {
				console.log(error);
			});
   		 });
   	});