const fs = require('fs');

// reading files
fs.readFile('./docs/blog1.txt', (err, data) => {
 if (err) {
  console.log(err);
 } 
 console.log(data.toString());
});


//console.log('last line'); //testing to see if this async code runs first before the fs.readFile() function

// writing files
fs.writeFile('./docs/blog.txt', 'hello, world', () => {
 console.log('file was written');
});

fs.writeFile('./docs/blog_xyz.txt', 'hello, again', () => {
    console.log('file was written');
   });

// directories
if (!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('folder created');
        });
} else {
    fs.rmdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('folder deleted')
    });
}

// deleting files
if (fs.existsSync('./docs/blog_xyz.txt')){
    fs.unlink('./docs/blog_xyz.txt', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('file deleted');
    });
}