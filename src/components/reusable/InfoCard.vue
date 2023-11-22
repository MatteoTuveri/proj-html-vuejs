<template>
    <div class="card" style="width: 100%;">
        <div class="card-body">
            <div class="d-flex justify-content-between pb-4 icons">
                <div class="icon">
                    <img :src="icon" :alt="title">
                </div>
                <div class="arrow d-flex align-items-center justify-content-center">
                    <i class="fa-solid fa-arrow-right fa-lg"></i>
                </div>
            </div>
            <h5 class="card-title">{{ title }}</h5>
            <p class="card-text">{{ text }}</p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'InfoCard',
    data() {
        return {

        }
    },
    props:{
        title: String,
        icon: String,
        text: String
    }
}
</script>
<style lang="scss" scoped>
@use '../../assets/style/partials/variables'as*;

.icons{
    filter: brightness(0) saturate(100%) invert(28%) sepia(82%) saturate(2806%) hue-rotate(163deg) brightness(88%) contrast(97%);
}
.arrow{
    width: 30px;
    height: 30px;
    opacity: 0.6;
}

.icon{
    width: 40px;
}
img{
    width: 100%;
}

</style>