var style = document.createElement('style');

function loadStyle() {
  chrome.storage.sync.get('style', function (item) {
    var save = JSON.parse(item['style']);
    style.innerText = save.default+save.t1 + save.t2 + save.t3 + save.t4 + save.t5 + save.m1;
  });
}

loadStyle();

document.head.appendChild(style)