var mymodule=require("./module.js")
var traveler1= new mymodule.FlightTickets()
console.log(mymodule);
traveler1.Seatsno=1
traveler1.arrivals="12/11/2023"
traveler1.flightsNum="A22"
traveler1.departures="xyz"
traveler1.dates="22/8/2023"


var traveler2= new mymodule.FlightTickets()
console.log(mymodule);
traveler2.Seatsno=2
traveler2.arrivals="12/11/2023"
traveler2.flightsNum="A22"
traveler2.departures="xyz"
traveler2.dates="22/8/2023"

console.log(traveler2.display())
traveler2.update({seatNo:444})
console.log(traveler2.display())
