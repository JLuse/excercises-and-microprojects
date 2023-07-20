// GET Your todo list by default when the DOM is ready, no need for inout for your 
// from there all methods and actions
// create JS functions for each method/task (GET, POST, UPDATE, DELETE)
// my user id - https://fewd-todolist-api.onrender.com/tasks?api_key=233
var goalList = document.getElementById('goalList')

let getGoals = function() {
  goalList.innerHTML = ''
  $.ajax({
    type: 'GET',
    url: 'https://fewd-todolist-api.onrender.com/tasks?api_key=233',
    dataType: 'json',
    success: function (response, textStatus) {
      var goals = response.tasks
      // console.log(goals);
      if (goals.length > 0) {
        console.log('true')
        goals.forEach(function(goal) {
          // console.log(goal.id)
          var goalItem = document.createElement('li')
          var completedContainer = document.createElement('div')
          var completedCheckBox = document.createElement('input')
          var goalDescriptionContainer = document.createElement('div')
          var goalDescription = document.createElement('h2')
          var removeGoalContainer = document.createElement('div')
          var removeGoalButton = document.createElement('button')

          goalItem.className = 'row goal-item'
          completedContainer.className = 'col-xs-1'
          completedCheckBox.id = 'completed'
          completedCheckBox.type = 'checkbox'
          completedCheckBox.name = 'completed'
          goalDescriptionContainer.className = 'col-xs-6'
          goalDescription.id = 'goalDescription'
          removeGoalContainer.className = 'col-xs-5'
          removeGoalButton.id = 'removeGoal'
          removeGoalButton.setAttribute("data-id", goal.id);

          completedCheckBox.checked = goal.completed
          goalDescription.textContent = goal.content
          removeGoalButton.textContent = 'Remove'
          
          goalList.appendChild(goalItem)
          goalItem.appendChild(completedContainer)
          goalItem.appendChild(goalDescriptionContainer)
          goalItem.appendChild(removeGoalContainer)

          completedContainer.appendChild(completedCheckBox)
          goalDescriptionContainer.appendChild(goalDescription)
          removeGoalContainer.appendChild(removeGoalButton)
        })
      } else {
        console.log('false')
      }
      // response is a parsed JavaScript object instead of raw JSON
    },
    error: function (request, textStatus, errorMessage) {
      console.log(errorMessage);
    }
  })
}

// Add goal
let addGoal = function() {
  $.ajax({
    type: 'POST',
    url: 'https://fewd-todolist-api.onrender.com/tasks?api_key=233',
    contentType: 'application/json',
    dataType: 'json',
    data: JSON.stringify({
      task: {
        content: document.getElementById('addGoal').value
      }
    }),
    success: function (response, textStatus) {
      console.log(response);
      getGoals()

    },
    error: function (request, textStatus, errorMessage) {
      console.log(errorMessage);
    }
  });
}

// remove goal
let removeGoal = function() {
  $.ajax({
    type: 'DELETE',
     url: 'https://fewd-todolist-api.onrender.com/tasks/5?api_key=233',
     success: function (response, textStatus) {
       console.log(response);
     },
     error: function (request, textStatus, errorMessage) {
       console.log(errorMessage);
     }
   });
}


$('#form').submit(function(event){
  event.preventDefault();
  addGoal()
});

$(document).ready(function () {
  getGoals()
})