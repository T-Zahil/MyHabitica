/** * *
 * HIDE TASKS
 * * * */
console.log('features')

setTimeout(function() {
  var tasks = document.getElementsByClassName('task')
  var hideText = '/hide'

  console.log(tasks)
  console.log(tasks.length)

  for (var i = 0; i < tasks.length; i++) {
    if (tasks[i].innerText.toLowerCase().indexOf(hideText) > -1) {
      tasks[i].className += ' hide'
    }
  }
}, 2000)
