export default function(){
  var sketch = require('sketch/dom')
  var async = require('sketch/async')
  var DataSupplier = require('sketch/data-supplier')
  var UI = require('sketch/ui')

  var Library = require('sketch/dom').Library

  var libraries = require('sketch/dom').getLibraries()

  var rssUrl = 'https://raw.githubusercontent.com/JayLyu/baikong/master/tmall.xml'

  Library.getRemoteLibraryWithRSS(
  rssUrl,
  (err, library) => {
    if (err) {
      UI.message("Fail to download.")
    }
    if (library.name) {
      UI.message(library.name + " Add Succeed!")
      console.log("Conguratelation!")
    }
  }
)
}
