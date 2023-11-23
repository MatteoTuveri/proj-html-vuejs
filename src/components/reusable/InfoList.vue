<template>
    <div>
        <div v-if="img">
            <img :src="img" alt="title">
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
                <div :class="(special) ? 'special-icon' : ''" class="icon my-3 me-3 d-flex align-items-center justify-content-center">
                    <i :class="element.icon"></i>
                </div>
                <div :class="(special) ? 'special-text' : ''">
                    {{ element.text }}
                </div>
            </div>
        </div>
    </div>
    <div>
        <div class="button text-uppercase my-3" :class="(special) ? 'special-btn' : ''">
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
</style>