// GET Your todo list by default when the DOM is ready, no need for inout for your 
// from there all methods and actions
// create JS functions for each method/task (GET, POST, UPDATE, DELETE)
// my user id - https://fewd-todolist-api.onrender.com/tasks?api_key=233

let getGoals = function() {
  var goalList = document.getElementById('goalList')

  $.ajax({
    type: 'GET',
    url: 'https://fewd-todolist-api.onrender.com/tasks?api_key=233',
    dataType: 'json',
    success: function (response, textStatus) {
      var goals = response.tasks
      console.log(goals);
      if (goals.length > 0) {
        console.log('true')
        goals.forEach(function(goal) {
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
          completedCheckBox.checked = false
          goalDescriptionContainer.className = 'col-xs-6'
          goalDescription.id = 'goalDescription'
          removeGoalContainer.className = 'col-xs-5'
          removeGoalButton.id = 'removeGoal'
          
          



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
$('#form').submit(function(event){
  event.preventDefault();
  console.log('ADD')
});

$(document).ready(function () {
  getGoals()
})