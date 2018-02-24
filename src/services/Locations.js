/*
* Service that fetch and parse weather forecast from openweathermap.org.
*
* @author Jim Merioles <jimwisleymerioles@gmail.com>
*/
class Locations {
    /*
    * Create WeatherForecast instance.
    */
    constructor() {
        this.locationsList = this.initList();
        return this.locationsList;    
    }

    initList() {
        return [
            { name: "London", value: "london", coords: {latitude: 20.8634298, longitude: -74.5072566} },
            { name: "Dubai", value: "dubai", coords: {latitude: 37.8634298, longitude: -1.5072566} },
            { name: "Kuala Lumpur", value: "kuala-lumpur", coords: {latitude: 40.8634298, longitude: -74.5072566} }
        ]
    }

    getAllLocations() {
        return this.locationsList;
    }
}

export default Locations;
