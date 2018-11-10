<template>
    <GridLayout columns="*" rows="*" width="100%" height="100">
        <Image src="~/assets/icons/cloud.png" alt="cloudiness" height="48" width="48" row="0" col="1" />
        <Label :text="cloudiness" class="cloudiness__value" row="0" col="2" />

        <Image src="../assets/icons/wind.png" alt="wind speed" height="48" width="48" row="0" col="3" />
        <Label :text="windSpeed" class="wind__value" row="0" col="0" />

        <Image src="../assets/icons/humidity.png" alt="humidity" height="48" width="48" row="0" col="4" />
        <Label :text="humidity" class="humidity__value" row="0" col="5" />
    </GridLayout>
</template>

<script>
export default {
    name: 'Measurements',

    props: {
        cloudiness: {
            type: Number,
            required: true
        },
        windSpeed: {
            type: Number,
            required: true
        },
        humidity: {
            type: Number,
            required: true
        }
    }
}
</script>

<style scoped>
</style>
