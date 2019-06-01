<template>
    <div class="category">
        <div class="category-img" v-bind:style="{ backgroundImage: 'url(' + img + ')' }"></div>
        <!-- <img class="category-img" :src="img" /> -->
        <div class="category-title">{{ title }}</div>
    </div>
</template>

<script>
export default {
    name: 'Category',
    props: {
        title: String,
        img: String,
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.category {
    color: black;
    margin: 5px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
}
.category-img {
    border-radius: 50%;
    margin: 5%;
    width: 30vw;
    height: 30vw;
    background-size: cover;
    background-position: center;
}
.category-title {
    text-align: left;
    width: 90%;
    margin: 10px;
}
</style>
