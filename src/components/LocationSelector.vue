<template>
    <section>
        <select v-model="selectedLocation">
            <option value="" selected>Current Location</option>
            <option v-for="location in locations" :key="location.value" :value="location">{{location.name}}</option>
        </select>
    </section>
</template>

<script>
import Locations from '../services/Locations'

export default {
    name: 'LocationSelector',

    props: {
        location: {
            type: Object,
            required: true
        }
    },

    data() {
        return {
            // locations: [
            //     { name: "London", value: "london" },
            //     { name: "Dubai", value: "dubai" },
            //     { name: "Kuala Lumpur", value: "kuala-lumpur", coords: {latitude: 40.8634298, longitude: -74.5072566} }
            // ],
            locations: new Locations,
            selectedLocation: ""
        }
    },

    watch: {
        selectedLocation: function () {
            console.log("selectedLocation changed", this.selectedLocation);
            this.$emit("update:location", this.selectedLocation);
        }
    }
        
}
</script>

<style scoped>
section {
    width: 100%;
    padding-top: 25px;

    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
}

select {
    width: 290px;
    background: transparent;
    border: none;
    color: rgba(255, 255, 255, 0.9);
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
}
</style>
