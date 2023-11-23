<template>
    <div class="py-5 position-relative">
        <div class="container">
            <TitleSpecial :item="item"/>
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3">
                <div v-for="(item, index) in store.infoCards" class="col d-flex p-2">
                    <InfoCard :title="item.title" :icon="store.svgUrl + item.icon" :text="item.paragraph" />
                </div>
            </div>
        </div>
        <div class="position-absolute img">
        </div>
    </div>
</template>
<script>
import InfoCard from './reusable/InfoCard.vue';
import { store } from '../data/store';
import TitleSpecial from './reusable/TitleSpecial.vue';

export default {
    name: "ServicesComp",
    data() {
        return {
            store,
            item: store.sectionList.services.details
        };
    },
    components: { InfoCard, TitleSpecial }
}
</script>
<style lang="scss" scoped>
@use '../assets/style/partials/variables' as*;

#desc {
    color: $special-bg-font;
}

#paragraph {
    color: rgb(0, 0, 0, 0.6);
}

#special {
    color: $special-bg-font;
    position: relative;
}

#special::after {
    position: absolute;
    content: '';
    bottom: 0px;
    width: 90%;
    height: 20%;
    background-color: $special-bg-font ;
}

.img {
    background-image: url('/Images/imgs/bullets.png');
    background-size: cover;
    width: 200px;
    height: 80px;
    top: 100%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0.5;
    z-index: 100;
}

.button {
    background-color: $special-bg-font;
    border-radius: 5px;
    color: white;
    padding: 5px 20px;
}
</style>