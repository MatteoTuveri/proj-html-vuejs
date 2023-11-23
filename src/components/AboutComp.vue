<template>
    <div class="container d-flex justify-content-end align-items-center position-relative">
        <div class="col-12 col-md-6 d-flex flex-column justify-content-end align-items-center py-5">
            <div>
                <TitleSpecial :item="item"/>
            </div>
            <div class="row row-cols-2 mb-5 px-3">
                <Certifications v-for="item in store.companyCert" :title="item.title" :icon="item.icon" :text="item.paragraph" class="col p-2" />
            </div>
        </div>
        <div class="col-6 d-none d-md-block">
            <img src="/Images/imgs/about-4.jpg" alt="">
        </div>
        <div class="position-absolute img"></div>
    </div>
</template>
<script>
import TitleSpecial from './reusable/TitleSpecial.vue';
import { store } from '../data/store';
import Certifications from './reusable/Certifications.vue';
export default {
    name: "AboutComp",
    data() {
        return {
            store,
            item: store.sectionList.about.details
        };
    },
    props: {
        id: Number
    },
    components: { TitleSpecial, Certifications }
}
</script>
<style lang="scss" scoped>
img{
    width: 100%;
}
.img{
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
</style>