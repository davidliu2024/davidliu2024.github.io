const fs = require('fs');
fs.readFile('list_photos.txt', 'utf-8', (err, data) => {
    if(err){
        console.error(err);
        return;
    }
    console.log(data);
});
