function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.info = function() {
    return `${title}, ${author}, ${pages}, ${read}`
  }
}

const theWitcher = new Book('The Witcher', 'Polish Dude', '250 pages', 'Yes read it')

console.log(theWitcher.info())