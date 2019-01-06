/** * *
 * TASKS WORKFLOW
 * * * */

const taskBrowsing = function() {
  const tasks = document.getElementsByClassName('task')
  const hideText = '/hide'

  for (var i = 0; i < tasks.length; i++) {
    // HIDE TASK
    if (tasks[i].innerText.toLowerCase().indexOf(hideText) > -1) {
      tasks[i].className += ' hide'
    }
    // TASK TAGS
    var tags = tasks[i].getElementsByClassName('tags-container')
    var tagsArea = tasks[i].getElementsByClassName('icons-right')

    if (tags[0]) {
      if (tags[0].childElementCount > 1) {
        for (var j = 0; j < tags[0].childElementCount; j++) {
          if (j > 0 && j < 5) {
            var newTags = document.createElement('div')
            newTags.className = 'category-label myhabitica-label'
            newTags.innerHTML += tags[0].children[j].innerHTML
            tagsArea[0].insertBefore(newTags, tagsArea[0].firstChild)
          }
        }
      }
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