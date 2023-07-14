function getMovies(event) {
  event.preventDefault();
  
  var inputText = document.getElementById('movie-name').value
  var movieList = document.getElementById('movie-list')

  var httpRequest = new XMLHttpRequest();
            
  httpRequest.onload = function() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        console.log(httpRequest.responseText);
        var movies = JSON.parse(httpRequest.responseText);
        console.log(movies.Search);
        // clear list for each search
        movieList.innerHTML = ''

        movies.Search.forEach(function(movie) {
          var li = document.createElement('li')
          var img = document.createElement('img')
          var container = document.createElement('div')
          var title = document.createElement('h2')
          var titleSpan = document.createElement('span')
          var imbdLink = document.createElement('a')
          var year = document.createElement('p')
          var type = document.createElement('p')

          container.className = 'movie-container'

          img.src = movie.Poster
          img.alt = movie.Title

          imbdLink.href = `https://www.imdb.com/title/${movie.imdbID}`
          title.className = 'title'
          title.textContent = `Title: `

          titleSpan.className = 'test'
          titleSpan.textContent = `${movie.Title}`

          year.className = 'release-year'
          year.textContent = `Year: ${movie.Year}`

          type.className = 'entertainment-type'
          type.textContent = `Type: ${movie.Type}`

          imbdLink.appendChild(titleSpan)
          title.append(imbdLink)
          container.appendChild(img)
          container.appendChild(title)
          container.appendChild(year)
          container.appendChild(type)

          li.appendChild(container)
          movieList.appendChild(li)
        })
       
      } else {
        console.log(httpRequest.statusText);
      }
    }
  }

  httpRequest.onerror = function() {
    console.log(httpRequest.statusText);
  }

  httpRequest.open('GET', 'https://www.omdbapi.com/?s=' + inputText + '&plot=short&apikey=b7da8d63');
  httpRequest.send(null);
}