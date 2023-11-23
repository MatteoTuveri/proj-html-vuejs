<template>
    <div class="position-absolute trigger" @pointerenter="activeRoll">
    </div>
    <div class="container d-flex justify-content-around pb-5" >
        <div v-for="element in item">
            <div class="d-flex flex-column align-items-center p-4">
                <div class="number display-1">
                    {{ element.i }}
                </div>
                <div class="text-center text-white">
                    {{ element.name }}
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { store } from '../../data/store';
export default {
    name: 'AnimatedNumber',
    data() {
        return {
            store,
        }
    },
    props: {
        item: Array
    },
    methods: {
        activeRoll() {
            for (let n = 0; n < this.item.length; n++) {
                const element = this.item[n];
                this.incNumber(element)
            }
        },
        incNumber(element) {
            if (element.i < element.value) {
                setTimeout(() => {
                    element.i += 1;
                    this.incNumber(element)
                    console.log(element)
                }, 10);
            }
        }
    }
}
</script>
<style lang="scss" scoped>
@use '../../assets/style/partials/variables' as *;

.number {
    color: $special-bg-font;
}

.trigger{
    bottom: 0px;
    left: 0px;
    height: 100%;
    width: 100%;
}
</style>