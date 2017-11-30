/* * * *
 * MY HABITICA VARS
 * * * */
const taskColumn1 = document.querySelector('#c1'),
  taskColumn2 = document.querySelector('#c2'),
  taskColumn3 = document.querySelector('#c3'),
  taskColumn4 = document.querySelector('#c4');

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
    if (save.c1.length > 1) {
      taskColumn1.checked = false;
    }
    if (save.c2.length > 1) {
      taskColumn2.checked = false;
    }
    if (save.c3.length > 1) {
      taskColumn3.checked = false;
    }
    if (save.c4.length > 1) {
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