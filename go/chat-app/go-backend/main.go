package main

type Todo struct {
	Text string
	Done bool
}

var todos []Todo
var loggedInUser string