<template>
    <div class="w-100 position-relative">
        <div class="nav position-absolute w-100 p-4">
            <div class="container">
                <div class=" w-100 d-flex justify-content-between align-items-center">
                    <div class="img">
                        <img src="/Images/imgs/logo.PNG" alt="logo">
                    </div>
                    <ul class="d-flex align-items-center mb-0">
                        <li v-for="(item, index) in store.sectionList" class="mx-1">
                            <a :href="'#' + item.id">{{ item.name }}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="container d-flex flex-column position-absolute w-100 title" :class="titleSlide">
            <div class="d-flex flex-column">
                <TitleSpecial :item="item" />
            </div>
        </div>
        <div class="position-absolute buttons">
            <div v-for="n in 3" :class="(activeSlide === n) ? 'active' : ''" class="slide-button" @click="activeSlide = n"></div>
        </div>
        <div class="hero w-100" :class=" `position-${activeSlide}` ">
        </div>
    </div>
</template>
<script>
import { store } from '../data/store';
import TitleSpecial from './reusable/TitleSpecial.vue';
export default {
    name: "HomeComp",
    data() {
        return {
            store,
            item: {},
            activeSlide: 2,
            checkHome:true
        };
    },
    computed: {
        titleSlide() {
            if (this.activeSlide === 1) {
                this.checkHome=false;
                this.item=store.sectionList.home.details.one
                return 'align-items-start'
            }
            else if (this.activeSlide === 2) {
                this.checkHome=true;
                this.item=store.sectionList.home.details.two
                return 'align-items-center text-center'
            }
            else {
                this.checkHome=false;
                this.item=store.sectionList.home.details.three
                return 'align-items-end text-start'
            }
        }
    },
    components: { TitleSpecial }
}
</script>
<style lang="scss" scoped>
@use '../assets/style/partials/variables' as *;

ul {
    list-style: none;

    li {
        text-transform: uppercase;
        padding: 10px 15px;
        cursor: pointer;

        a {
            text-decoration: none;
            color: inherit;
        }
    }
    li:last-child {
        background-color: $special-bg-font;
        border-radius: 5px;
        color: white;
    }

    li:last-child:hover{
    background-color: rgb(0, 166, 166);
    transition: 1s;
}
}

.img {
    width: 150px;

    img {
        width: 100%;
    }
}

.nav {
    top: 0px;
}

.buttons {
    top: 50%;
    left: 98%;
    transform: translate(-50%, -50%);
}

.slide-button {
    background-color: grey;
    height: 3vh;
    width: 15px;
    border-radius: 25px;
    margin: 10px 20px;
}

.active {
    background-color: $special-bg-font
}

.title {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.hero {
    height: calc(100vh - 40px);
    min-height: fit-content;
    background-image: url('/Images/imgs/bg-parallax.png');
    background-size: cover;
}

.position-1 {
    background-position: -20% 0%;
    transition: 0.5s;
}

.position-2 {
    background-position: 50% 0%;
    transition: 0.5s;
}

.position-3 {
    background-position: 120% 0%;
    transition: 0.5s;
}
</style>