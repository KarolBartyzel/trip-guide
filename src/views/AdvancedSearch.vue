<template>
    <div class="advanced-search">
        <div class="header">
            <div class="header-title">Advanced Search</div>
        </div>

        <div class="form-group advanced-search-padding">
            <input class="form-control keyword-input" placeholder="keyword">
        </div>

        <div class="advanced-search-padding">
            <select class="category-select form-control form-control-lg">
                <option>Hotels</option>
                <option>Food&Drinks</option>
                <option>Monuments</option>
                <option>Museums</option>
            </select>
        </div>

        <div class="section">
            <p>Prices</p>

            <div class="custom-control custom-checkbox">
                <input type="checkbox" checked class="custom-control-input" id="defaultCheck0" />
                <label class="custom-control-label" for="defaultCheck0">free</label>
            </div>

            <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="defaultCheck1"/>
                <label class="custom-control-label" for="defaultCheck1">$</label>
            </div>

            <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="defaultCheck2"/>
                <label class="custom-control-label" for="defaultCheck2">$$</label>
            </div>

            <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="defaultCheck3"/>
                <label class="custom-control-label" for="defaultCheck3">$$$</label>
            </div>

        </div>

        <div class="section">

            <p>Rating</p>

            <div class="custom-control custom-radio">
                <input type="radio" checked class="custom-control-input" id="defaultUnchecked" name="defaultExampleRadios">
                <label class="custom-control-label" for="defaultUnchecked">
                    <svg class="icon">
                        <use xlink:href="#stars-1-0-star"/>
                    </svg>

                </label>
            </div>

            <div class="custom-control custom-radio">
                <input type="radio" class="custom-control-input" id="defaultChecked2" name="defaultExampleRadios">
                <label class="custom-control-label" for="defaultChecked2">
                    <svg class="icon">
                        <use xlink:href="#stars-2-0-star"/>
                    </svg>
                </label>
            </div>

            <div class="custom-control custom-radio">
                <input type="radio" class="custom-control-input" id="defaultChecked3" name="defaultExampleRadios">
                <label class="custom-control-label" for="defaultChecked3">
                    <svg class="icon">
                        <use xlink:href="#stars-3-0-star"/>
                    </svg>
                </label>
            </div>

            <div class="custom-control custom-radio">
                <input type="radio" class="custom-control-input" id="defaultChecked4" name="defaultExampleRadios">
                <label class="custom-control-label" for="defaultChecked4">
                    <svg class="icon">
                        <use xlink:href="#stars-4-0-star"/>
                    </svg>
                </label>
            </div>

            <div class="custom-control custom-radio">
                <input type="radio" class="custom-control-input" id="defaultChecked5" name="defaultExampleRadios">
                <label class="custom-control-label" for="defaultChecked5">
                    <svg class="icon">
                        <use xlink:href="#stars-5-0-star"/>
                    </svg>
                </label>
            </div>
        </div>


        <svg id="stars" style="display: none;" version="1.1">
            <symbol id="stars-full-star" viewBox="0 0 102 18">
                <path d="M9.5 14.25l-5.584 2.936 1.066-6.218L.465 6.564l6.243-.907L9.5 0l2.792 5.657 6.243.907-4.517 4.404 1.066 6.218"/>
            </symbol>

            <symbol id="stars-half-star" viewBox="0 0 102 18">
                <path d="M9.5 14.25l-5.584 2.936 1.066-6.218L.465 6.564l6.243-.907L9.5 0l2.792" fill="#e9ba26"/>
            </symbol>

            <symbol id="stars-all-star" viewBox="0 0 102 18">
                <use xlink:href="#stars-full-star"/>
                <use xlink:href="#stars-full-star" transform="translate(21)"/>
                <use xlink:href="#stars-full-star" transform="translate(42)"/>
                <use xlink:href="#stars-full-star" transform="translate(63)"/>
                <use xlink:href="#stars-full-star" transform="translate(84)"/>
            </symbol>

            <symbol id="stars-0-0-star" viewBox="0 0 102 18">
                <use xlink:href="#stars-all-star" fill="#9b9b9b"/>
            </symbol>

            <symbol id="stars-1-0-star" viewBox="0 0 102 18">
                <use xlink:href="#stars-0-0-star"/>
                <use xlink:href="#stars-full-star" fill="#e9ba26"/>
            </symbol>

            <symbol id="stars-2-0-star" viewBox="0 0 102 18">
                <use xlink:href="#stars-1-0-star"/>
                <use xlink:href="#stars-full-star" fill="#e9ba26" transform="translate(21)"/>
            </symbol>

            <symbol id="stars-3-0-star" viewBox="0 0 102 18">
                <use xlink:href="#stars-2-0-star"/>
                <use xlink:href="#stars-full-star" fill="#e9ba26" transform="translate(42)"/>
            </symbol>

            <symbol id="stars-4-0-star" viewBox="0 0 102 18">
                <use xlink:href="#stars-3-0-star"/>
                <use xlink:href="#stars-full-star" fill="#e9ba26" transform="translate(63)"/>
            </symbol>

            <symbol id="stars-5-0-star" viewBox="0 0 102 18">
                <use xlink:href="#stars-all-star" fill="#e9ba26"/>
            </symbol>
        </svg>

        <div class="advanced-search-padding ">
            <button @click="$router.push('/fooddrinks/' + placeId)"
                    type="button" class="btn btn-secondary search-button">Search</button>
        </div>

        <font-awesome-icon class="back-button" icon="chevron-left" ontouchstart="" @click="$router.go(-1)"/>
    </div>
</template>

<script>

    export default {
        name: 'advancedSearch',
        data() {
            return {
                placeId: null,
            }
        },
        created() {
            this.placeId = this.$route.params.id;
        }
    }
</script>

<style>
    .advanced-search {
        color: white;
        background-color: #d0dbe4;
        height: 100%;
        padding-bottom: 20px;
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

    .slider-btn:hover .slider-icon {
        border-width: 4px !important;
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

    .section {
        margin: 20px;
        padding: 10px;
        border: #244F6F 1px solid;
        text-align: left;
    }

    .section p {
        color: #244F6F;
        font-size: 1.4em;
    }

    .section label {
        color: #707070;
    }

    .icon {
        width: 90px;
        height: 20px;
    }

    .custom-control {
        margin-bottom: 4px;
    }

    .advanced-search-padding {
        padding: 0 20px 0 20px;
    }

    .keyword-input {
        height: 48px;
    }

    .form-group.advanced-search-padding {
        padding-top: 20px;
    }

    .search-button {
        width: 100%;
    }

    .category-select {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        background: url("http://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/br_down.png") white no-repeat 96% !important;

    }

    .category-select::-ms-expand { display: none; }

</style>
