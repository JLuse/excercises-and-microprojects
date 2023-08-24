let error = document.getElementById('error')
error.addEventListener('click', function() {
   throw new Error('CDN ERROR')
})