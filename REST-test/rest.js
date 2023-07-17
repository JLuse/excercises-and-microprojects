var httpRequest = new XMLHttpRequest();
httpRequest.onload = function() {
  if (httpRequest.readyState === XMLHttpRequest.DONE) {
    if (httpRequest.status === 200) {
      console.log(httpRequest.responseText);
    } else {
      console.log(httpRequest.statusText);
    }
  }
}
httpRequest.onerror = function() {
  console.log(httpRequest.statusText);
}
// httpRequest.open('POST', 'https://fewd-todolist-api.onrender.com/tasks?api_key=233');

// httpRequest.setRequestHeader("Content-Type", "application/json");
// httpRequest.send(JSON.stringify({
//   task: {
//     content: "Run another marathon"
//   }
// }));

httpRequest.open('PUT', 'https://fewd-todolist-api.onrender.com/tasks/3596/mark_complete?api_key=233');
httpRequest.send();