<template>
    <div class="w-100" @pointerenter="active">
        <div class="container text-center pt-5">
            <TitleSpecial :item="item" />
        </div>
        <div class="container d-flex justify-content-around pb-5">
            <div v-for="item in store.results">
                <AnimatedNumber :name="item.name" :value="item.value" />
            </div>
        </div>
    </div>
    <div class="py-5 bg-black">
        <PartnersComp class="my-5"/>
    </div>
</template>
<script>
import { store } from '../data/store';
import AnimatedNumber from './reusable/AnimatedNumber.vue';
import PartnersComp from './reusable/PartnersComp.vue';
import TitleSpecial from './reusable/TitleSpecial.vue';

export default {
    name: "ResultsComp",
    data() {
        return {
            store,
            item: store.sectionList.results.details,
        };
    },
    components: { AnimatedNumber, TitleSpecial, PartnersComp }
}
</script>
<style lang="scss" scoped></style>