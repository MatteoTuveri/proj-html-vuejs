<template>
    <div class="position-relative">
        <div class="w-100">
            <div class="container text-center pt-5">
                <TitleSpecial :item="item" />
            </div>
            <div>
                <AnimatedNumber :item="results" />
            </div>
        </div>
        <div class="py-5 bg-black">
            <PartnersComp class="my-5" />
        </div>
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
            results: store.results
        };
    },
    components: { AnimatedNumber, TitleSpecial, PartnersComp }
}
</script>
<style lang="scss" scoped></style>