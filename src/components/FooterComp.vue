<template>
    <div class="container">
        <div class="row py-5 align-items-center">
            <div class="col-3 p-3">
                <InfoList :img="InfoList.img" :paragraph="InfoList.paragraph" :item="InfoList.item" :button="'buy next gen'" />
            </div>
            <div class="col-9 px-3 d-flex">
                <div v-for="item in store.footerCards" class="p-3">
                    <TitledArrowList :title="item.title" :item="item.items" />
                </div>
            </div>
        </div>
    </div>
    <div class="footer-line py-3 bg-black">
        <div class="container d-flex justify-content-between">
            <div>
                © 2023 - All rights reserved. Nexgen is maintained by Codings Group.
            </div>
            <div class="d-flex" >
                <div v-for="item in store.companyInfo.social" class="icon ms-3">
                    <i :class="item"></i>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { store } from '../data/store';
import InfoList from './reusable/InfoList.vue';
import TitledArrowList from './reusable/TitledArrowList.vue';

export default {
    name: "FooterComp",
    data() {
        return {
            store,
            InfoList:{
                img:store.imgUrl +'logo.PNG',
                paragraph:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                item:[
                    {
                        icon:store.companyInfo.phoneContact.icon,
                        text:store.companyInfo.phoneContact.text
                    },
                    {
                        icon:store.companyInfo.mailContact.icon,
                        text:store.companyInfo.mailContact.text
                    },
                    {
                        icon:store.companyInfo.position1.icon,
                        text:store.companyInfo.position1.text
                    }
                ]
            }
        };
    },
    components: { InfoList, TitledArrowList }
}
</script>
<style lang="scss" scoped>

@use '../assets/style/partials/variables' as*;
.footer-line{
    color: $options-color;
}

.icon{
    font-size: 1.2em;
}
</style>