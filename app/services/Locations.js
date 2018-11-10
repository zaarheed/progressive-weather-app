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
            { name: "Dubai", coords: { latitude: 25.2048, longitude: 55.2708 }},
            { name: "Kuala Lumpur", coords: { latitude: 3.1390, longitude: 101.6869 }},
            { name: "London", coords: { latitude: 51.5074, longitude: -0.1278 }},
            { name: "Parsippany", coords: { latitude: 40.8653, longitude: -74.4174 }}
        ]
    }

    getAllLocations() {
        return this.locationsList;
    }
}

export default Locations;
