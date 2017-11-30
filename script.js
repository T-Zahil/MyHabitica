console.log('Load content script');
/* * * *
 * MY HABITICA VARS
 * * * */
const taskColumn1 = document.querySelector('#c1');
const taskColumn2 = document.querySelector('#c2');
const taskColumn3 = document.querySelector('#c3');
const taskColumn4 = document.querySelector('#c4');

let style = {
  id: 12,
  'c1': '',
  'c2': '',
  'c3': '',
  'c4': ''
};

// chrome.storage.sync.clear(function () {});

/* * * *
 * SAVE CUSTOM STYLE
 * * * */
const saveStyle = function () {
  chrome.storage.sync.set({
    'style': JSON.stringify(style)
  }, function () {
    console.log('Settings saved' + style);
  });
  chrome.tabs.executeScript(null, {
    file: "inject.js"
  });
}

/* * * *
 * LOAD CUSTOM STYLE
 * * * */
const loadStyle = function () {
  chrome.storage.sync.get('style', function (item) {
    style = item['style'];
  });
  console.log('LOAD !');
  console.log(style);
  saveStyle();
}

/* * * *
 * DEFAULT STYLES
 * * * */
style.default = `
  .tasks-columns{justify-content:center;}
`;

saveStyle();

/* * * *
 * TASK COLUMNS
 * * * */
taskColumn1.addEventListener('click', function () {
  if (!this.checked) {
    style.c1 = '.habit{display:none!important;}';
  } else {
    style.c1 = '.habit{display:block!important;}';
  }
  saveStyle();
});

taskColumn2.addEventListener('click', function () {
  if (!this.checked) {
    style.c2 = '.daily{display:none!important;}';
  } else {
    style.c2 = '.daily{display:block!important;}';
  }
  saveStyle();
});

taskColumn3.addEventListener('click', function () {
  if (!this.checked) {
    style.c3 = '.todo{display:none!important;}';
  } else {
    style.c3 = '.todo{display:block!important;}';
  }
  saveStyle();
});

taskColumn4.addEventListener('click', function () {
  if (!this.checked) {
    style.c4 = '.reward{display:none!important;}';
  } else {
    style.c4 = '.reward{display:block!important;}';
  }
  saveStyle();
});