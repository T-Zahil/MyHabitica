/** * *
 * MY HABITICA INPUT
 * * * */
const tasksColumn1 = document.querySelector('#t1'),
  tasksColumn2 = document.querySelector('#t2'),
  tasksColumn3 = document.querySelector('#t3'),
  tasksColumn4 = document.querySelector('#t4'),
  tasksFilter = document.querySelector('#t5'),
  tasksLess = document.querySelector('#t6'),
  mist1 = document.querySelector('#m1'),
  mist2 = document.querySelector('#m2')

/** * *
 * DEFAULT STYLES
 * * * */
const dt1 = '.habit{display:block!important;}',
  dt2 = '.daily{display:block!important;}',
  dt3 = '.todo{display:block!important;}',
  dt4 = '.reward{display:block!important;}',
  dt5 = '.filter{display:block!important;}',
  dt6 = '.task-habit-disabled{display:flex!important;}',
  dm1 = '#app-header{display:flex!important;}',
  dm2 =
    '.member-stats div:nth-child(4){display:block!important;}.drawer-container{display:block!important;}'

/** * *
 * CUSTOM STYLES
 * * * */
const ct1 = '.habit{display:none!important;}',
  ct2 = '.daily{display:none!important;}',
  ct3 = '.todo{display:none!important;}',
  ct4 = '.reward{display:none!important;}',
  ct5 = '.filter{display:none!important;}',
  ct6 = '.task-habit-disabled{display:none!important;}',
  cm1 = '#app-header{display:none!important;}',
  cm2 =
    '.member-stats div:nth-child(4){display:none!important;}.drawer-container{display:none!important;}'

/** * *
 * DEFAULT STYLE
 * * * */
const defaultStyle = `
  .tasks-columns{justify-content:center;}
`

let style = {
  id: 12,
  t1: '',
  t2: '',
  t3: '',
  t4: '',
  m1: '',
  default: defaultStyle
}

/** * *
 * SAVE CUSTOM STYLE
 * * * */
const saveStyle = function() {
  chrome.storage.sync.set(
    {
      style: JSON.stringify(style)
    },
    function() {}
  )

  console.log(style)

  chrome.tabs.executeScript(null, {
    file: 'inject.js'
  })
}

/** * *
 * LOAD CUSTOM STYLE
 * * * */
const loadStyle = function() {
  chrome.storage.sync.get('style', function(item) {
    var save = JSON.parse(item['style'])
    if (save.t1 === ct1) {
      tasksColumn1.checked = false
    }
    if (save.t2 === ct2) {
      tasksColumn2.checked = false
    }
    if (save.t3 === ct3) {
      tasksColumn3.checked = false
    }
    if (save.t4 === ct4) {
      tasksColumn4.checked = false
    }
    if (save.t5 === ct5) {
      tasksFilter.checked = false
    }
    if (save.t6 === ct6) {
      tasksLess.checked = false
    }
    if (save.m1 === cm1) {
      mist1.checked = false
    }
    if (save.m2 === cm2) {
      mist2.checked = false
    }
  })
}

window.onload = function() {
  loadStyle()
}

/** * *
 * TASKS EVENT HANDLERS
 * * * */
tasksColumn1.addEventListener('click', function() {
  if (!this.checked) {
    style.t1 = ct1
  } else {
    style.t1 = dt1
  }
  saveStyle()
})

tasksColumn2.addEventListener('click', function() {
  if (!this.checked) {
    style.t2 = ct2
  } else {
    style.t2 = dt2
  }
  saveStyle()
})

tasksColumn3.addEventListener('click', function() {
  if (!this.checked) {
    style.t3 = ct3
  } else {
    style.t3 = dt3
  }
  saveStyle()
})

tasksColumn4.addEventListener('click', function() {
  if (!this.checked) {
    style.t4 = ct4
  } else {
    style.t4 = dt4
  }
  saveStyle()
})

tasksFilter.addEventListener('click', function() {
  if (!this.checked) {
    style.t5 = ct5
  } else {
    style.t5 = dt5
  }
  saveStyle()
})

tasksLess.addEventListener('click', function() {
  if (!this.checked) {
    style.t6 = ct6
  } else {
    style.t6 = dt6
  }
  saveStyle()
})

/** * *
 * MISC EVENT HANDLERS
 * * * */
mist1.addEventListener('click', function() {
  if (!this.checked) {
    style.m1 = cm1
  } else {
    style.m1 = dm1
  }
  saveStyle()
})

mist2.addEventListener('click', function() {
  if (!this.checked) {
    style.m2 = cm2
  } else {
    style.m2 = dm2
  }
  saveStyle()
})
