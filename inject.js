var style = document.createElement('style')

console.log('Inject')

function loadStyle() {
  chrome.storage.sync.get('style', function(item) {
    console.log('kikou')
    if (item) {
      console.log('salut')
      var save = JSON.parse(item['style'])
      style.innerText =
        save.default+
        save.t1 +
        save.t2 +
        save.t3 +
        save.t4 +
        save.t5 +
        save.t6 +
        save.t7 +
        save.t8 +
        save.m1 +
        save.m2 +
        save.m3 +
        save.m4 +
        save.mh1
    }
  })
}

loadStyle()
document.head.appendChild(style)