// GET Your todo list by default when the DOM is ready, no need for inout for your 
// from there all methods and actions
// create JS functions for each method/task (GET, POST, UPDATE, DELETE)
// my user id - https://fewd-todolist-api.onrender.com/tasks?api_key=233

let getGoals = function() {
  var $goalList = $('#goalList')
  // console.log($goalList)

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
          goal.className = 'row goal-item'

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