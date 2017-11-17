var copydir = require('copy-dir')
var fs = require('fs-extra')
var rmdir = require('rimraf')
var zipFolder = require('zip-folder')

rmdir('./package', function (err) {
  if (err) return console.log(err)

  fs.mkdir('./package', function (err) {
    if (err) return console.log(err)

    fs.copySync('./package.json', './package/package.json')

    fs.mkdir('./package/public', function (err) {
      if (err) return console.log(err)

      fs.mkdir('./package/src', function (err) {
        if (err) return console.log(err)

        copydir.sync('./public', './package/public', function (stat, filepath, filename) {
          return true
        }, function (err) {
          console.log(err)
        })

        copydir.sync('./src', './package/src', function (stat, filepath, filename) {
          return true
        }, function (err) {
          console.log(err)
        })

        zipFolder('./package', './package.zip', function (err) {
          if (err) return console.log(err)

          rmdir('./package', function (err) {
            if (err) return console.log(err)
            console.log('Done')
          })
        })
      })
    })
  })
})
