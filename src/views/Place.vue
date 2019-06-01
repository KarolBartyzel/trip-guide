<template>
    <div class="place">
        <div class="loading" v-if="!place && loading">
            <circle4></circle4>
        </div>
        <div v-else-if="!place && !loading">
            Error while loading data... TODO
        </div>
        <div class="place-content" v-else>
            <div class="city-info-wrapper" v-bind:style="{ backgroundImage: 'url(' + place.img + ')' }">
            </div>
            <div class="place-title">
                <span style="color: #000;float: left;font-size: 1.5em;font-weight: bold;">{{ place.name }}</span>
                <span style="color: #8BC34A;float: right;margin-top: 5px;font-weight: bold;">OPEN</span>
            </div>

            <div class="place-info">
                <div class="place-rating-wrapper">
                    <div class="place-rating" v-for="(n, index) in new Array(Math.ceil(place.rating))" :key="index">
                        <font-awesome-icon class="rating-star" icon="star" v-if="place.rating - index >= 1"/>
                        <font-awesome-icon class="rating-star" icon="star-half-alt" v-else/>
                    </div>
                </div>
                <div class="place-description">{{ place.description }}</div>
            </div>
            <img style="max-width: 95%" src="../assets/navigate_bar.png">
            <img style="max-width: 100%" src="../assets/map.png">
            <div class="place-tips">
                <div class="city-tip">
                    <font-awesome-icon class="city-tip-icon" icon="map-marker-alt"/>
                    <span class="city-tip-text">{{ place.tips.location }}</span>
                </div>
                <div class="city-tip">
                    <font-awesome-icon class="city-tip-icon" icon="clock"/>
                    <span class="city-tip-text">Open today: {{ place.tips.open_time }} - {{ place.tips.close_time }}</span>
                </div>
                <div class="city-tip">
                    <font-awesome-icon class="city-tip-icon" icon="phone"/>
                    <span class="city-tip-text">{{ place.tips.phone }}</span>
                </div>
            </div>
            <img style="max-width: 100%" src="../assets/review.png">

        </div>
        <font-awesome-icon class="back-button" icon="chevron-left" ontouchstart="" @click="$router.go(-1)"/>


    </div>
</template>

<script>
  import {Circle4} from 'vue-loading-spinner';

  export default {
    name: 'place',
    data() {
      return {
        placeId: null,
        place: null,
        loading: false,
      }
    },
    created() {
      this.fetchData()
    },
    computed: {
      pairedCategories: function () {
        const pairedCategories = [];
        for (let i = 0; i < this.categories.length / 2; i++) {
          pairedCategories.push(this.categories.slice(2 * i, 2 * (i + 1)));
        }
        return pairedCategories;
      }
    },
    watch: {
      '$route': 'fetchData'
    },
    methods: {
      fetchData() {
        this.placeId = this.$route.params.id;
        this.loading = true;
        fetch(`http://localhost:3009/places/${this.placeId}`)
          .then(async (res) => {
            this.place = await res.json();
            this.loading = false;
          });
      }
    },
    components: {
      Circle4,
    }
  }
</script>

<style>

    .place-tips {
        padding: 10px 20px;
        display: flex;
        flex-direction: column;
        text-align: left;
    }

    .city-tip {
        display: flex;
        align-items: center;
        margin: 10px 0;
    }

    .city-tip-icon {
        margin-right: 10px;
    }

    .city-tip-text {
        font-size: 0.9em;
    }

    a {
        text-decoration: none; /* no underline */
    }

    .loading {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .city-info-wrapper {
        height: 25vh;
        max-height: 30vh;
        width: 100vw;
        background-size: cover;
    }

    .place-title {
        height: 30px;
        background-color: #fff;
        padding: 10px 25px;
        display: list-item;
    }

    .back-button {
        position: absolute;
        top: 25px;
        left: 10px;
        padding: 3px;
        color: white;
        font-size: 1.5em;
        cursor: pointer;
    }

    .back-button:hover {
        opacity: 0.7;
    }

    .place-info {
        background-color: white;
        color: black;
        text-align: left;
        padding: 0px 25px 10px 25px;
        display: flex;
        flex-direction: column;
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

    .place-description {
        font-size: 0.9em;
    }

</style>