const path = require('path');
const fs = require('fs');
const folderPath = path.join(__dirname, 'secret-folder');


    fs.readdir(folderPath, function (err, files) {
        if (err) {
            throw new Error(err);
        }
        files.forEach(function (name) {
            const filePath = path.join(folderPath, name);
            fs.stat(filePath, function(err, stats) {
    			if (stats.isFile()) {
    				const onlyName = path.basename(name||'').split('.');
    				const extension = path.extname(name||'').split('.');
           			console.log(`${onlyName[0]} - ${extension[extension.length - 1]} - ${stats["size"]}байт`);
    			} 
    		});
   		 });
   	});