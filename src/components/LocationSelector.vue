<template>
    <section>
        <select>
            <option value="" selected>Current Location</option>
            <option v-for="location in locations" :key="location.value" :value="location.value">{{location.name}}</option>
        </select>
    </section>
</template>

<script>
export default {
    name: 'LocationSelector',

    props: {
        location: {
            type: String,
            required: true
        }
    },

    data() {
        return {
            locations: [
                { name: "London", value: "london" },
                { name: "Dubai", value: "dubai" },
                { name: "Kuala Lumpur", value: "kuala-lumpur" }
            ]
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
