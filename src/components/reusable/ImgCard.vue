<template>
    <div class="card border-0 position-relative overflow-hidden" style="width: 100%;">
        <img :src="img" class="card-img-top" :alt="title">
        <div class="card-body h-100 position-absolute d-flex flex-column justify-content-between">
            <div>
                <div class="d-flex justify-content-center text-white hide-text-tp">
                    <div class="p-3">Coding</div>
                    <div class="p-3">3 years</div>
                </div>
            </div>
            <div>
                <h3 class="card-title text-white">{{ title }}</h3>
                <p class="card-text text-white">{{ paragraph }}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ImgCard',
    data() {
        return {

        }
    },
    props: {
        title: String,
        img: String,
        paragraph: String
    }
}
</script>
<style lang="scss" scoped>
.card {
    border-radius: 10px;
}
.card-body {
    width: 100%;
    background-color: rgb(0, 0, 0, 0.2);
    transition: 0.5s;
}

.card-title {
    height: 70px;
    transition: 2s;
    overflow: hidden;
}

.card-title {
    position: relative;
    top:calc(100% - 70px);
    transition: 0.5s;
}
.card-text {
    position: relative;
    top:100%;
    transition: 0.5s;
}

.hide-text-tp{
    position: relative;
    bottom: 100%;
    transition: 0.5s;
}
img{
    transform: scale(1);
    transition: 0.5s;
}

.card:hover{
    .card-title{
        top:0;
        transition: 0.5s;
    }
    .card-text{
        top:0;
        transition: 0.5s;

    }
    .hide-text-tp{
        bottom: 0;
        transition: 0.5s;
    }
    .card-body{
        background-color: rgb(0, 0, 0, 0.5);
        transition: 0.5s;
    }
    img{
        transform: scale(1.2);
        transform: 0.5s;
    }
}


</style>