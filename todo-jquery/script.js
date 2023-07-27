// GET Your todo list by default when the DOM is ready, no need for inout for your 
// from there all methods and actions
// create JS functions for each method/task (GET, POST, UPDATE, DELETE)
// my user id - https://fewd-todolist-api.onrender.com/tasks?api_key=233
var goalList = document.getElementById('goalList')
var addGoalInput = document.getElementById('addGoal')
var toggleCompletedTitle = document.getElementById('toggleCompleted')

var generateGoals = function(task) {
  var goalItem = document.createElement('li')
  var completedContainer = document.createElement('div')
  var completedCheckBox = document.createElement('input')
  var goalDescriptionContainer = document.createElement('div')
  var goalDescription = document.createElement('h2')
  var removeGoalContainer = document.createElement('div')
  var removeGoalButton = document.createElement('button')

  goalItem.className = 'row goal-item'
  $(goalItem).attr('data-id', task.id)
  completedContainer.className = 'col-xs-1'
  completedCheckBox.id = 'completed'
  completedCheckBox.type = 'checkbox'
  completedCheckBox.name = 'completed'
  $(completedCheckBox).attr('onChange', 'checkGoal(event)')
  goalDescriptionContainer.className = 'col-xs-6 text-left'
  // goalDescription.id = 'goalDescription'
  removeGoalContainer.className = 'col-xs-5'
  removeGoalButton.className = 'remove-goal'
  $(removeGoalButton).attr('onClick', 'removeGoal(event)');

  completedCheckBox.checked = task.completed
  goalDescription.textContent = task.content
  removeGoalButton.textContent = 'Remove'
  
  goalList.appendChild(goalItem)
  goalItem.appendChild(completedContainer)
  goalItem.appendChild(goalDescriptionContainer)
  goalItem.appendChild(removeGoalContainer)

  completedContainer.appendChild(completedCheckBox)
  goalDescriptionContainer.appendChild(goalDescription)
  removeGoalContainer.appendChild(removeGoalButton)
}

var getGoals = function() {
  goalList.innerHTML = ''
  addGoalInput.value = ''
  toggleCompletedTitle.innerHTML = 'All Goals'

  console.log(addGoalInput)
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
          generateGoals(goal)
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
var addGoal = function() {
  $.ajax({
    type: 'POST',
    url: 'https://fewd-todolist-api.onrender.com/tasks?api_key=233',
    contentType: 'application/json',
    dataType: 'json',
    data: JSON.stringify({
      task: {
        content: addGoalInput.value
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
var removeGoal = function(event) {
  // console.log(event.target.closest('li').dataset.id)
  $.ajax({
    type: 'DELETE',
     url: `https://fewd-todolist-api.onrender.com/tasks/${event.target.closest('li').dataset.id}?api_key=233`,
     success: function (response, textStatus) {
       console.log(response);
       getGoals()
     },
     error: function (request, textStatus, errorMessage) {
       console.log(errorMessage);
     }
   });
}

// check box goal
var checkGoal = function(event) {
  $.ajax({
    type: 'PUT',
    url: event.target.checked ? 
    `https://fewd-todolist-api.onrender.com/tasks/${event.target.closest('li').dataset.id}/mark_complete?api_key=233` : 
    `https://fewd-todolist-api.onrender.com/tasks/${event.target.closest('li').dataset.id}/mark_active?api_key=233`,
    contentType: 'application/json',
    dataType: 'json',
    success: function (response, textStatus) {
      console.log(response);
    },
    error: function (request, textStatus, errorMessage) {
      console.log(errorMessage);
    }
  });
}

let toggleState = 0;
var toggleCompleted = function() {
  const toggle = document.getElementById('toggleCompleted');
  if (toggleState === 0) {
    getCompletedGoals();
    toggleState = 1;
    toggle.innerText = 'Completed';
  } else if (toggleState === 1) {
    getActiveGoals();
    toggleState = 2;
    toggle.innerText = 'Active';
  } else {
    getGoals();
    toggleState = 0;
    toggle.innerText = 'All Goals';
  }
}

var getCompletedGoals = function() {
  goalList.innerHTML = ''
  $.ajax({
    type: 'GET',
    url: 'https://fewd-todolist-api.onrender.com/tasks?api_key=233',
    dataType: 'json',
    success: function (response, textStatus) {
      var allActiveTasks = response.tasks.filter(task => task.completed)
      allActiveTasks.forEach(function(activeGoals) {
        generateGoals(activeGoals)
      })
      // console.log(activeTasks)
      // generateGoals(activeTasks)

    },
    error: function (request, textStatus, errorMessage) {
      console.log(errorMessage);
    }
  });
}

var getActiveGoals = function() {
  goalList.innerHTML = ''
  $.ajax({
    type: 'GET',
    url: 'https://fewd-todolist-api.onrender.com/tasks?api_key=233',
    dataType: 'json',
    success: function (response, textStatus) {
      var allActiveTasks = response.tasks.filter(task => !task.completed)
      allActiveTasks.forEach(function(activeGoals) {
        generateGoals(activeGoals)
      })
      // console.log(activeTasks)
      // generateGoals(activeTasks)

    },
    error: function (request, textStatus, errorMessage) {
      console.log(errorMessage);
    }
  });
}

// not working like i think
var sortId = function() {
  goalList.innerHTML = ''
  // var sorted = false;
  $.ajax({
    type: 'GET',
    url: 'https://fewd-todolist-api.onrender.com/tasks?api_key=233',
    dataType: 'json',
    success: function (response, textStatus) {
      // sorted = !sorted
      // console.log(sorted)
      // if (sorted) {
      //   var allSortedTasks = response.tasks.sort((a, b) => a.id - b.id);
      //   // console.log(allSortedTasks)
      //   allSortedTasks.forEach(function(sortedTask) {
      //     generateGoals(sortedTask)
      //   })
      // } else {
      //   getGoals();
      //   console.log(sorted)
      // }

    },
    error: function (request, textStatus, errorMessage) {
      console.log(errorMessage);
    }
  });
}

// function function3() {
//   console.log("Function 3 called!");
// }

$('#form').submit(function(event){
  event.preventDefault();
  addGoal()
});

$(document).ready(function () {
  getGoals()
})