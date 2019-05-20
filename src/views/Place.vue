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
                <div class="city-info">
                    <span class="city-name">{{ place.city_name }}</span>
                    <span class="country-name">{{ place.country_name }}</span>
                </div>
            </div>
            <div class="city-tips">
                <div class="city-tips-title">Tips</div>
                <div class="city-tip">
                    <font-awesome-icon class="city-tip-icon" icon="wifi" />
                    <span class="city-tip-text">{{ place.tips.wifi }}</span>
                </div>
                <div class="city-tip">
                    <font-awesome-icon class="city-tip-icon" icon="bed" />
                    <span class="city-tip-text">{{ place.tips.hotels }}</span>
                </div>
                <div class="city-tip">
                    <font-awesome-icon class="city-tip-icon" icon="plane" />
                    <span class="city-tip-text">{{ place.tips.flights }}</span>
                </div>
            </div>
        </div>

    </div>
</template>

<style lang="less">
.place {
    height: 100vh;
    color: white;
}
.loading {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
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
.city-tips {
    background-color: #244F6F;
    padding: 10px 20px;
    display: flex;
    flex-direction: column;
    text-align: left;
}
.city-tips-title {
    font-weight: bold;
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
</style>

<script>
import { Circle4 } from 'vue-loading-spinner';

export default {
    name: 'place',
    data () {
        return {
            placeId: null,
            place: null,
            loading: false,
        }
    },
    created () {
        this.fetchData()
    },
    watch: {
        '$route': 'fetchData'
    },
    methods: {
        fetchData () {
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
        Circle4
    }
}
</script>