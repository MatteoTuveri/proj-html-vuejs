<template>
    <div class="card position-relative" style="width: 100%;">
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
    position: relative;
    width: 30px;
    height: 30px;
}

.arrow::after{
    content: '';
    position: absolute;
    background-color: $special-bg-font;
    height: 100%;
    width: 100%;
    z-index: 1000;
    border-radius: 50%;
    opacity: 0;
    transform: scale(1);
}

.icon{
    width: 40px;
}
img{
    width: 100%;
}
.card-text{
    color: $options-color;
}

.card{
    bottom: 0px;
    transition: 0.5s;
}
.card:hover{
    bottom: 10px;
    transition: 0.5s;
    .arrow::after{
        transform: scale(1.2);
        transition: 1s;
        animation-name: example;
        animation-duration: 1s;
}

}
@keyframes example {
  0%   {opacity: 0.7;}
  100% {opacity: 0;}
}
</style>