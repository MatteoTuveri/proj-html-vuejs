<template>
    <div class="w-100 position-relative">
        <div class="nav position-absolute w-100 p-4">
            <div class="container">
                <NavList class="w-100" :items-array="['home', 'services', 'about', 'projects', 'results', 'get in touch']"
                    :logo="'/Images/imgs/logo.PNG'" />
            </div>
        </div>
        <div class="hero w-100 position-2">
        </div>
    </div>
</template>
<script>
import NavList from './reusable/NavList.vue';
export default {
    name: 'HeroComp',
    data() {
        return {

        }
    },
    components: { NavList }
}
</script>
<style lang="scss" scoped>
.nav{
    top:0px;
}
.hero{
    height: 95vh;
    background-image: url('/Images/imgs/bg-parallax.png');
    background-size: cover;
}
.position-1{
        background-position: 0% 0%;
        transition: 5s;
    }
    .position-2{
        background-position: 50% 0%;
        transition: 5s;
    }
    .position-3{
        background-position: 100% 0%;
        transition: 5s;
    }
</style>