<template>
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <ul>
                <li class="py-3 text-white">
                    <h2>{{ title }}</h2>
                </li>
                <li v-for="element in item" class="mb-3">
                    {{ element }}
                </li>
            </ul>
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
        item: Array
    }
}
</script>
<style lang="scss" scoped>
@use '../../assets/style/partials/variables' as*;

ul {
    list-style: none;

    li {
        color: $options-color;
        transition: 0.5s;
    }

    li:hover {
        color: white;
        transition: 0.5s;
        cursor: pointer;
    }
}

.card {
    background-color: rgba(255, 255, 255, 0.1);
}</style>