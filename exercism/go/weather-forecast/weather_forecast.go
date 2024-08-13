// Package weather provides way of getting temapature.
package weather


var CurrentCondition string
var CurrentLocation string

func Forecast(city, condition string) string {
	CurrentLocation, CurrentCondition = city, condition
	return CurrentLocation + " - current weather condition: " + CurrentCondition
}
