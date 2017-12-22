/** * *
 * TASKS WORKFLOW
 * * * */
console.log('features')

setTimeout(function() {
  taskBrowsing()
}, 2000)

const taskBrowsing = function () {
  var tasks = document.getElementsByClassName('task')
  var hideText = '/hide'
  var catText = '--'

  for (var i = 0; i < tasks.length; i++) {
    // HIDE TASK
    if (tasks[i].innerText.toLowerCase().indexOf(hideText) > -1) {
      tasks[i].className += ' hide'
    }
    // TASK CAT
    if (tasks[i].innerText.indexOf(catText) > -1) {
      tasks[i].className += ' taskCat'
    }
  }
}
