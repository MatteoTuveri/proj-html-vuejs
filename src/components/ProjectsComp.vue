<template>
    <div class="container text-center py-5">
        <div class="pt-5">
           <TitleSpecial :item="item" /> 
        </div>
        <div>
            <ul class="d-flex align-items-center justify-content-center mb-4">
                <li v-for="(item, index) in store.navList">
                    <a href="#">{{ item }}</a>
                </li>
            </ul>
        </div>
        <div class="row row-cols-3">
            <div v-for="item in store.imgCards" class="col p-2">
                <ImgCard :title="item.title" :img="store.imgUrl + item.img" :paragraph="item.paragraph" />
            </div>
        </div>
    </div>
</template>
<script>
import TitleSpecial from './reusable/TitleSpecial.vue';
import { store } from '../data/store';
import ImgCard from './reusable/ImgCard.vue';

export default {
    name: "ProjectsComp",
    data() {
        return {
            store,
            item: store.sectionList.projects.details
        };
    },
    components: { TitleSpecial, ImgCard }
}
</script>
<style lang="scss" scoped>
@use '../assets/style/partials/variables' as*;

ul {
    list-style: none;

    li {
        text-transform: uppercase;
        padding: 10px 15px;
        cursor: pointer;

        a {
            text-decoration: none;
            color: $options-color;
        }
    }
    li:hover{
        background-color: rgb(5, 130, 131,0.5);
        border-radius: 5px;

    }
}
</style>