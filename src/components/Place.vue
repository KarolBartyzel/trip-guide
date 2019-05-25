<template>
    <div class="place">
        <div class="place-img" v-bind:style="{ backgroundImage: 'url(' + place.img + ')' }"></div>
        <div class="place-info">
            <div class="place-name">{{ place.name }}</div>
            <div class="place-rating-wrapper">
                <div class="place-rating" v-for="(n, index) in new Array(Math.ceil(place.rating))" :key="index">
                    <font-awesome-icon class="rating-star" icon="star" v-if="place.rating - index >= 1" />
                    <font-awesome-icon class="rating-star" icon="star-half-alt" v-else/>
                </div>
            </div>
            <div class="place-hours">Open today: {{ place.open_time }} - {{ place.close_time }}</div>
            <div class="place-description">{{ place.description }}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Place',
    props: {
        place: Object
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.place {
    margin: 5px 3px;
}
.place-img {
    height: 20vh;
    background-size: cover;
    background-position: 50% 50%;
    background-repeat: no-repeat;
}
.place-info {
    background-color: white;
    color: black;
    text-align: left;
    padding: 5px 10px;
    display: flex;
    flex-direction: column;
}
.place-name {
    font-size: 1.25em;
    margin: 5px 0;
}
.place-rating-wrapper {
    display: flex;
    flex-direction: row;
    margin: 2px 0;
    font-size: 0.9em;
}
.rating-star {
    color: #DDBB41;
}
.place-hours {
    margin-bottom: 10px;
    font-size: 0.75em;
}
.place-description {
    font-size: 0.9em;
}
</style>
