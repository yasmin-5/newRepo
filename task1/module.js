class FlightTickets {

    constructor(seatNo,flightNo,departure,arrival,traveldate){
        this.seatNo=seatNo;
        this.flightNo=flightNo;
        this.departure=departure;
        this.arrival=arrival,
        this.traveldate=traveldate;
    }
    set Seatsno(seatNum){
    this.seatNo=seatNum;
    }
    get SeatsNo(){
        return this.seatNo;
    }
    set flightsNum(flightNum){
        this.flightNo=flightNum
    }
    get flightsNum(){
        return this.flightNo;
    }
    
    
    set departures(des){
        this.departure=des
    }
    get departures(){
        return this.departure;
    }
    
    set arrivals(arrive){
        this.arrival=arrive
    }
    get arrivals(){
        return this.arrival;
    }
    set dates(date){
        this.traveldate=date
    }
    get dates(){
        return this.traveldate;
    }
    display(){
        return`
        your seat number is: ${this.seatNo}
        your flight number is :${this.flightNo}
        your despatures is:${this.departure}
        your arrival date is :${this.arrival}
        your travel date is ${this.traveldate}  
        `
    }
    update(updatedValues) {
        if (updatedValues.seatNo !== undefined) {
          this.seatNo = updatedValues.seatNo;
        }}
    
    }
module.exports={FlightTickets}