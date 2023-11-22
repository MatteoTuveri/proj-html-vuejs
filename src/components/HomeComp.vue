<template>
    <div class="w-100 position-relative">
        <div class="nav position-absolute w-100 p-4">
            <div class="container">
                <div class=" w-100 d-flex justify-content-between align-items-center">
                    <div class="img">
                        <img src="/Images/imgs/logo.PNG" alt="logo">
                    </div>
                    <ul class="d-flex align-items-center mb-0">
                        <li v-for="(item, index) in store.sectionList">{{ item.name }}</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="hero w-100 position-2">
        </div>
    </div>
</template>
<script>
import { store } from '../data/store';
export default {
    name: 'HomeComp',
    data() {
        return {
            store
        }
    },
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
    }

    li:last-child {
        background-color: $special-bg-font;
        border-radius: 5px;
        color: white;
    }
}

.img{
    width: 150px;
    img{
        width: 100%;
    }
}
.nav {
    top: 0px;
}

.hero {
    height: 95vh;
    background-image: url('/Images/imgs/bg-parallax.png');
    background-size: cover;
}

.position-1 {
    background-position: 0% 0%;
    transition: 5s;
}

.position-2 {
    background-position: 50% 0%;
    transition: 5s;
}

.position-3 {
    background-position: 100% 0%;
    transition: 5s;
}</style>