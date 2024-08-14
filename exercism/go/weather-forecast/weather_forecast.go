// Package weather provides way of getting temapature.
package weather

// CurrentCondition is variable that holds a string to represent a condition.
var CurrentCondition string
// CurrentLocation variable that holds a string to represent a location.
var CurrentLocation string

// Forecast assigns the city and condition paramter to the CurrentLocation, CurrentCondition then returns a concatinatated version of those strings.
func Forecast(city, condition string) string {
	CurrentLocation, CurrentCondition = city, condition
	return CurrentLocation + " - current weather condition: " + CurrentCondition
}
