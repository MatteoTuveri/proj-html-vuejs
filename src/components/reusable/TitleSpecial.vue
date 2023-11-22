<template>
    <div v-if="item.description" id="desc" class="text-uppercase">
        {{ item.description }}
    </div>
    <div class="display-2 mb-3" :class="(item.green) ? '' : 'white'">
        {{ item.title }} <span class="position-relative" :class="(item.green) ? 'green' : 'white'" id="special">{{ item.specialTitle }}</span>
    </div>
    <div class="d-flex mb-5 justify-content-center" :class="(item.row)?'':'flex-column'" >
        <div :class="(item.button)&&(item.row) ? 'col-9' : 'col-12'" id="paragraph" class="mb-4">
            {{ item.paragraph }}
        </div>
        <div v-if="item.button" class="d-flex align-items-center" :class="(item.centerButton)?'justify-content-center col-12':'col-3'">
            <div class=" text-uppercase text-center button ">
                {{ item.button }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    props: {
        item: Object,
    }
}
</script>

<style lang="scss" scoped>
@use '../../assets/style/partials/variables' as *;

.green {
    color: $special-bg-font ;
}
.white{
    color: white;
}

span::after {
    position: absolute;
    content: '';
    background-color: $special-bg-font ;
    border-radius: 5px;
    opacity: 0.3;
    width: 100%;
    height: 40%;
    bottom: 0px;
    left: 5px;
}

#desc {
    color: $special-bg-font ;
}
#paragraph{
    color: $options-color;
}

.button {
    background-color: $special-bg-font;
    border-radius: 5px;
    color: white;
    padding: 10px 20px;
    cursor: pointer;
}
</style>