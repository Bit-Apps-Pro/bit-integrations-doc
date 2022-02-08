const fs = require('fs')
const path = require('path')

// rename all file in this dir to lowercase and replace space with dash
fs.readdir(__dirname, (err, files) => {
  console.log('', files)
  // if (err) {
  //   console.log(err)
  //   return
  // }

  // files.forEach(file => {
  //   const oldPath = path.join(__dirname, file)
  //   const newPath = path.join(__dirname, file.toLowerCase().replace(/\s/g, '-'))
  //   fs.rename(oldPath, newPath, err => {
  //     if (err) {
  //       console.log(err)
  //       return
  //     }
  //     console.log(`${oldPath} renamed to ${newPath}`)
  //   })
  // })
})
