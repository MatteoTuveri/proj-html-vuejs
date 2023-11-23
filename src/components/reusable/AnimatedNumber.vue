<template>
    <div class="d-flex flex-column align-items-center p-4" @pointerenter="incNumber(i,value)">
        <div class="number display-1">
            {{ currentNumber }}
        </div>
        <div class="text-center text-white">
            {{ name }}
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
            currentNumber: 0,
            i: 0,
        }
    },
    props: {
        name: String,
        value: Number
    },
    methods: {
        incNumber(i, max) {
            console.log(window.innerHeight)
            if (i <= max) {
                this.currentNumber = this.i;
                setTimeout(() => {
                    this.i += 1;
                    this.incNumber(this.i, max);
                }, 10);
            }
        }
    },
}
</script>
<style lang="scss" scoped>
@use '../../assets/style/partials/variables' as *;

.number {
    color: $special-bg-font;
}
</style>