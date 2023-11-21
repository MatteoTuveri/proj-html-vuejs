<template>
    <div class="d-flex justify-content-between align-items-center">
        <div class="img">
            <img :src="logo" alt="logo">
        </div>
        <ul class="d-flex align-items-center mb-0">
            <li v-for="(item, index) in itemsArray">{{ item }}</li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'NavList',
    data() {
        return {

        }
    },
    props: {
        itemsArray: Array,
        logo: String
    }
}
</script>
<style lang="scss" scoped>
@use '../../assets/style/partials/variables' as *;

ul {
    list-style: none;

    li {
        text-transform: uppercase;
        padding: 10px 15px;
        cursor: pointer;
    }

    li:last-child {
        background-color: $special-bg-font;
        border-radius: 5px;
        color: white;
    }
}

.img{
    width: 150px;
    img{
        width: 100%;
    }
}
</style>