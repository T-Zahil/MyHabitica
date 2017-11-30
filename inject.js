var style = document.createElement('style');

function loadStyle() {
  chrome.storage.sync.get('style', function (item) {
    var save = JSON.parse(item['style']);
    style.innerText = save.default+save.c1 + save.c2 + save.c3 + save.c4;
    console.log(save);
    console.log(style);
  });
}

loadStyle();

document.head.appendChild(style)