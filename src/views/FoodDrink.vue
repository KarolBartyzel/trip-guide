<template>
    <div class="fooddrink">
        <div class="loading" v-if="!fooddrink && loading">
            <circle4></circle4>
        </div>
        <div v-else-if="!fooddrink && !loading">
            Error while loading data... TODO
        </div>
        <div class="fooddrink-content" v-else>

            <div class="header">
                <div class="header-title">Food & Drink
                    <a href="../advancedsearch/1">
                        <font-awesome-icon style="float: right; margin-top: 3px;" icon="search"/>
                    </a>
                </div>
            </div>

            <div v-for="(foodcat) in fooddrink.categories" :key="foodcat.id">
                <div class="slider-wrapper">
                    <div class="slider-title">
                        <span style="color: #000;float: left;font-size: 1.2em;">{{foodcat.category}}</span>
                        <span style="color: #2699FB;float: right;">More</span>
                    </div>
                    <slider class="restaurants" animation="normal" :indicators="false" :interval="5000000" :speed="1000">
                        <a :href="'../places/1'">
                            <slider-item class="city-place-slider-item" v-for="(place) in foodcat.restaurants" :key="place.id">
                                <place :place="place"/>
                            </slider-item>
                        </a>
                    </slider>
                </div>
            </div>

        </div>
        <font-awesome-icon class="back-button" icon="chevron-left" ontouchstart="" @click="$router.go(-1)"/>
    </div>
</template>

<script>
  import {Circle4} from 'vue-loading-spinner';
  import {Slider, SliderItem} from 'vue-easy-slider'

  import Place from './../components/Place';

  export default {
    name: 'fooddrink',
    data() {
      return {
        fooddrinkId: null,
        fooddrink: null,
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
        this.fooddrinkId = this.$route.params.id;
        this.loading = true;
        fetch(`http://localhost:3009/fooddrinks/${this.fooddrinkId}`)
          .then(async (res) => {
            this.fooddrink = await res.json();
            this.loading = false;
          });
      }
    },
    components: {
      Circle4,
      Slider,
      SliderItem,
      Place,
    }
  }
</script>

<style lang="less">

    .slider-title {
        background-color: #fff;
        padding: 10px 25px;
        display: list-item;
    }

    .slider-wrapper {
        padding: 15px;
        background-color: #C4D8E9;
    }

    .fooddrink {
        height: 100vh;
        color: white;
    }

    .city-img {
        max-width: 100%;
        margin: auto;
    }

    .city-info-wrapper {
        height: 30vh;
        max-height: 30vh;
        width: 100vw;
        background-size: cover;
    }

    .city-info {
        height: 100%;
        display: flex;
        align-items: flex-end;
    }

    .city-name {
        font-size: 1.5em;
        margin: 0.5em 10px;
    }

    .country-name {
        font-size: 0.75em;
        margin: 1em 0;
    }

    .header {
        background-color: #244F6F;
        padding: 15px 20px;
        display: flex;
        flex-direction: column;
        text-align: left;
    }

    .header-title {
        font-size: 1.4em;
        font-weight: bold;
        margin-left: 25px;
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
        font-size: 0.7em;
    }

    .restaurants {
        background-color: #fff;
        height: 300px !important;
    }

    .slider-item.city-place-slider-item {
        padding: 0 20px;
    }

    .slider-btn {
        width: 22px !important;
        padding: 0 !important;
        cursor: pointer !important;
    }

    .slider-btn:hover .slider-icon {
        border-width: 4px !important;
    }

    .slider-btn:active {
        background-color: rgb(36, 79, 111) !important;
    }

    .slider-icon-right {
        margin-left: -10px !important;
    }

    .slider-icon-left {
        margin-right: -10px !important;
    }

    .back-button {
        position: absolute;
        top: 15px;
        left: 10px;
        padding: 3px;
        color: white;
        font-size: 1.5em;
        cursor: pointer;
    }

    .back-button:hover {
        opacity: 0.7;
    }

    .row {
        display: flex;
        background-color: #C4D8E9;
    }

    .column {
        flex: 50%;
    }

    a {
        color: white;
        text-decoration: none; /* no underline */
    }
</style>