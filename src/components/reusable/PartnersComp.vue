<template>
    <div class="container d-flex justify-content-around align-items-center">
        <div v-for="item in store.partnersList">
            <img :src="store.imgUrl + item" alt="">
        </div>
    </div>
</template>

<script>
import { store } from '../../data/store';
export default {
    name:'PartnersComp',
    data () {
        return {
            store
        }
    }
}
</script>

<style lang="scss" scoped>
    img{
        filter: invert(0.6);
    }
</style>