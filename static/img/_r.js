// const fs = require('fs')
// const path = require('path')

// // rename all file in this dir to lowercase and replace space with dash
// fs.readdir(__dirname, (err, files) => {
//   console.log('', files)
//   // if (err) {
//   //   console.log(err)
//   //   return
//   // }

//   // files.forEach(file => {
//   //   const oldPath = path.join(__dirname, file)
//   //   const newPath = path.join(__dirname, file.toLowerCase().replace(/\s/g, '-'))
//   //   fs.rename(oldPath, newPath, err => {
//   //     if (err) {
//   //       console.log(err)
//   //       return
//   //     }
//   //     console.log(`${oldPath} renamed to ${newPath}`)
//   //   })
//   // })
// })
'use strict';

const path = require('path');
const fs = require('fs');

const listDir = (dir, fileList = []) => {

  let files = fs.readdirSync(dir);

  files.forEach(file => {
    if (fs.statSync(path.join(dir, file)).isDirectory()) {
      fileList = listDir(path.join(dir, file), fileList);
    } else {

      let src = path.join(dir, file);
      let newSrc = path.join(dir, `_${file.toLowerCase().replace(/\s/g, '-')}`);
      fileList.push({
        oldSrc: src,
        newSrc: newSrc
      });
    }
  });

  return fileList;
};

let foundFiles = listDir('./');
// console.log('res', foundFiles)
foundFiles.forEach(f => {
  const result = fs.renameSync(f.oldSrc, f.newSrc);
});