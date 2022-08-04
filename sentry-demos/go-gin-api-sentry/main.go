package main

import (
	"github.com/gin-gonic/gin"
)

type book struct {
	ID       string `json:"id"`
	Title    string `json:"title"`
	Author   string `json:"author"`
	Quantity int    `json:"quantity"`
}

var books = []book{
	{ID: "1", Title: "LOTR", Author: "Tolkien", Quantity: 1}, {ID: "2", Title: "Star Wars", Author: "Lucas", Quantity: 15}, {ID: "3", Title: "Project Hail Mary", Author: "Martian dude", Quantity: 4},
}

func main() {
	router := gin.Default()
}
