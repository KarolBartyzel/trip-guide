<template>
    <div class="discover">
        <div class="discover-content">
            <div class="header">
                <div class="buttons row">
                    <div class="col-6">
                        <a href="">Discover</a>
                    </div>
                    <div class="col-6">
                        <a href="">Discover</a>
                    </div>
                </div>
                <input type="search" class="form-control" id="place-search" aria-describedby="place" placeholder="Type a place">
            </div>
            <div class="loading" v-if="!destinations && loading">
                <circle4></circle4>
            </div>
            <div v-else-if="!destinations && !loading">
                Error while loading data... TODO
            </div>
            <div class="destinations">
                <div v-for="(destination, index) in destinations" :key="destination.id">
                    <div class="destination-tile">
                        <h2 class="city-name">{{destination.city_name}}</h2>
                        <img v-bind:src="destination.img" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {Circle4} from 'vue-loading-spinner';

    export default {
        name: 'discover',
        data() {
            return {
                destinations: null,
                loading: false
            }
        },
        created() {
            this.fetchData();
        },
        methods: {
            fetchData () {
                this.loading = true;
                fetch(`http://localhost:3009/destinations/discover`)
                    .then(async (res) => {
                        this.destinations = await res.json();
                        this.loading = false;
                    });
            }
        },
        components: {
            Circle4
        }
    }
</script>

<style lang="scss">
.discover {
    background-color: #C4D8E9;
}

.header {
    background-color: #244F6F;
    padding: 20px 15px 10px 15px;

    .buttons {
        a {
            color: white;
            font-size: 1.1em;
        }
        margin-bottom: 10px;
    }

    #place-search {
        border-radius: 0;
        height: 45px;
    }
}

.destinations {
    padding: 20px 15px 20px;
}

.destination-tile {
    width: 100%;
    margin-bottom: 15px;
    position: relative;
    -webkit-box-shadow: 0px 3px 9px 1px rgba(0,0,0,0.68);
    -moz-box-shadow: 0px 3px 9px 1px rgba(0,0,0,0.68);
    box-shadow: 0px 3px 9px 1px rgba(0,0,0,0.68);

    img {
        height: 142px;
        width: 100%;
        object-fit: cover;
    }

    .city-name {
        color: white;
        font-size: 1.5em;
        position: absolute;
        bottom: 5px;
        left: 15px;
    }

    &:before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#000000+0,000000+100,000000+100&0+48,0.48+100 */
        background: -moz-linear-gradient(top,  rgba(0,0,0,0) 0%, rgba(0,0,0,0) 48%, rgba(0,0,0,0.48) 100%); /* FF3.6-15 */
        background: -webkit-linear-gradient(top,  rgba(0,0,0,0) 0%,rgba(0,0,0,0) 48%,rgba(0,0,0,0.48) 100%); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(to bottom,  rgba(0,0,0,0) 0%,rgba(0,0,0,0) 48%,rgba(0,0,0,0.48) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00000000', endColorstr='#7a000000',GradientType=0 ); /* IE6-9 */
    }
}
</style>