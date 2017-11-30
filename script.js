/* * * *
 * MY HABITICA VARS
 * * * */
const taskColumn1 = document.querySelector('#c1'),
  taskColumn2 = document.querySelector('#c2'),
  taskColumn3 = document.querySelector('#c3'),
  taskColumn4 = document.querySelector('#c4');

/* * * *
 * DEFAULT STYLES
 * * * */
const dc1 = '.habit{display:block!important;}';
const dc2 = '.daily{display:block!important;}';
const dc3 = '.todo{display:block!important;}';
const dc4 = '.reward{display:block!important;}';

/* * * *
 * CUSTOM STYLES
 * * * */
const cc1 = '.habit{display:none!important;}';
const cc2 = '.daily{display:none!important;}';
const cc3 = '.todo{display:none!important;}';
const cc4 = '.reward{display:none!important;}';

let style = {
  id: 12,
  'c1': '',
  'c2': '',
  'c3': '',
  'c4': ''
};

/* * * *
 * SAVE CUSTOM STYLE
 * * * */
const saveStyle = function () {

  chrome.storage.sync.set({
    'style': JSON.stringify(style)
  }, function () {});

  console.log(style);

  chrome.tabs.executeScript(null, {
    file: "inject.js"
  });

}

/* * * *
 * LOAD CUSTOM STYLE
 * * * */
const loadStyle = function () {

  chrome.storage.sync.get('style', function (item) {
    var save = JSON.parse(item['style']);
    if (save.c1 === cc1) {
      taskColumn1.checked = false;
    }
    if (save.c2 === cc2) {
      taskColumn2.checked = false;
    }
    if (save.c3 === cc3) {
      taskColumn3.checked = false;
    }
    if (save.c4 === cc4) {
      taskColumn4.checked = false;
    }
  });

}

window.onload = function () {
  loadStyle();
  console.log(style);
}

/* * * *
 * DEFAULT STYLES
 * * * */
style.default = `
  .tasks-columns{justify-content:center;}
`;

/* * * *
 * TASK COLUMNS
 * * * */
taskColumn1.addEventListener('click', function () {
  if (!this.checked) {
    style.c1 = cc1;
  } else {
    style.c1 = dc1;
  }
  saveStyle();
});

taskColumn2.addEventListener('click', function () {
  if (!this.checked) {
    style.c2 = cc2;
  } else {
    style.c2 = dc2;
  }
  saveStyle();
});

taskColumn3.addEventListener('click', function () {
  if (!this.checked) {
    style.c3 = cc3;
  } else {
    style.c3 = dc3;
  }
  saveStyle();
});

taskColumn4.addEventListener('click', function () {
  if (!this.checked) {
    style.c4 = cc4;
  } else {
    style.c4 = dc4;
  }
  saveStyle();
});