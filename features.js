/** * *
 * TASKS WORKFLOW
 * * * */

const taskBrowsing = function() {
  const tasks = document.getElementsByClassName('task')
  const hideText = '/hide'
  const catText = '--'

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

setTimeout(function() {
  const homeButton = document.querySelector('[data-v-48d93060]')

  // Launch Browsing after a short timeout
  taskBrowsing()

  // Add click listener to the home button
  homeButton.addEventListener('click', function() {
    // Launch Browsing again after a short timeout
    setTimeout(function() {
      taskBrowsing()
    }, 2000)
  })
}, 2000)
