<template>
    <div class="py-5 position-relative">
        <div class="container">
            <div>
                <div>
                    our business area
                </div>
                <div>
                    excellence in <span>service</span>
                </div>
                <div class="row">
                    <div class="col-10">
                        We are leaders in providing consultancy services with a set of cutting-edge technologies and a team
                        of
                        experienced and renowned professionals. These are some options that you can hire.
                    </div>
                    <div class="col-2 d-flex justify-content-end align-items-center">
                        <div class="btn btn-primary">
                            see all
                        </div>
                    </div>
                </div>
            </div>
            <div class=" row row-cols-3">
                <div v-for="(item,index) in store.infoCards" class="col d-flex p-2">
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

export default {
    name: "ServicesComp",
    data() {
        return {
            store
        };
    },
    components: { InfoCard }
}
</script>
<style lang="scss" scoped>
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