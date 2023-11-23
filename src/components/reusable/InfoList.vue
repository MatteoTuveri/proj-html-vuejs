<template>
    <div>
        <div v-if="img" class="img mb-3">
            <img class="w-100" :src="img" alt="title">
        </div>
        <div v-if="title">
            <h2>{{ title }}</h2>
        </div>
        <div class="paragraph mb-3">
            {{ paragraph }}
        </div>
    </div>
    <div>
        <div v-for="element in item">
            <div class="d-flex align-items-center f-size-2">
                <div :class="(special) ? 'special-icon' : 'base'" class="icon my-3 me-3 d-flex align-items-center justify-content-center">
                    <i :class="element.icon"></i>
                </div>
                <div :class="(special) ? 'special-text' : 'base'">
                    {{ element.text }}
                </div>
            </div>
        </div>
    </div>
    <div class="d-flex">
        <div class="button text-uppercase my-3" :class="(special) ? 'special-btn' : 'base-btn'">
            {{ button }}
        </div>
    </div>
</template>
<script>
export default {
    name: 'TitledArrowList',
    data() {
        return {

        }
    },
    props: {
        title: String,
        paragraph: String,
        img: String,
        item: Array,
        button: String,
        special: Boolean
    }
}
</script>
<style lang="scss" scoped>
@use '../../assets/style/partials/variables' as*;
.paragraph{
    color: $options-color;
}
.f-size-2{
    font-size: 1.3em;
}
.special-icon{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: $special-bg-font;
    background-color: rgb(5, 130, 131,0.3);
}
.special-text{
    color: $special-bg-font;
}
.button{
    padding: 10px 25px;
    border-radius: 25px;
    cursor: pointer;
}
.base{
    color: $options-color;
}
.base-btn{
    border: solid 2px $special-bg-font ;
    color: white;
    transition: 1s;
}
.base-btn:hover{
    border: solid 2px white ;
    color: white;
    transition: 1s;
}
.special-btn{
    background-color: rgb(185, 242, 242);
    color: $special-bg-font ;
    transition: 1s;
}
.special-btn:hover{
    background-color: rgb(0, 166, 166);
    color: white ;
    transition: 1s;
}

.img{
    width: 150px;
}
</style>