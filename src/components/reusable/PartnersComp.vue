<template>
    <div class="container d-flex justify-content-around align-items-center flex-wrap">
        <div v-for="item in store.partnersList" class="p-4">
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
        width: 100%;
        filter: invert(0.6);
    }
</style>