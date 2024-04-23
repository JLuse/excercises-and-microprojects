let contestants = document.querySelectorAll('.contestant')

Array.from(contestants, (x) => x.addEventListener('click', finalRose))

function finalRose(click) {
  if(click.target.classList.contains('rose')) {
    document.querySelector('#claire').classList.add('hidden')
    document.querySelector('#nikki').classList.toggle('hidden')
  } else {
    alert('WRONG')
  }
  
}