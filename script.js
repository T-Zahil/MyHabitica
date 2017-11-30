/* * * *
 * MY HABITICA VARS
 * * * */
const taskColumn1 = document.querySelector('#c1');
const taskColumn2 = document.querySelector('#c2');
const taskColumn3 = document.querySelector('#c3');
const taskColumn4 = document.querySelector('#c4');

let style = {};

/* * * *
 * DEFAULT STYLES
 * * * */
style.default = `
  .tasks-columns{justify-content:center;}
`;

chrome.tabs.insertCSS(null, {
  code: style.default
});

/* * * *
 * TASK COLUMNS
 * * * */
taskColumn1.addEventListener('click', function () {
  style.c1 = '.habit{display:none!important;}';
  if (!this.checked) {
    chrome.tabs.insertCSS(null, {
      code: style.c1
    });
  } else {
    style.c1 = '.habit{display:block!important;}';
    chrome.tabs.insertCSS(null, {
      code: style.c1
    });
  }
});

taskColumn2.addEventListener('click', function () {
  style.c2 = '.daily{display:none!important;}';
  if (!this.checked) {
    chrome.tabs.insertCSS(null, {
      code: style.c2
    });
  } else {
    style.c2 = '.daily{display:block!important;}';
    chrome.tabs.insertCSS(null, {
      code: style.c2
    });
  }
});

taskColumn3.addEventListener('click', function () {
  style.c3 = '.todo{display:none!important;}';
  if (!this.checked) {
    chrome.tabs.insertCSS(null, {
      code: style.c3
    });
  } else {
    style.c3 = '.todo{display:block!important;}';
    chrome.tabs.insertCSS(null, {
      code: style.c3
    });
  }
});

taskColumn4.addEventListener('click', function () {
  style.c4 = '.reward{display:none!important;}';
  if (!this.checked) {
    chrome.tabs.insertCSS(null, {
      code: style.c4
    });
  } else {
    style.c4 = '.reward{display:block!important;}';
    chrome.tabs.insertCSS(null, {
      code: style.c4
    });
  }
});