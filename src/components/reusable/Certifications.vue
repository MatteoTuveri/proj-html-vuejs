<template>
    <div class="text-white py-2">
        <div class="d-flex align-items-center mb-3">
            <div class="pe-3">
               <i :class="icon"></i> 
            </div>
            <h3 class="mb-0">{{ title }}</h3>
        </div>
        <div class="sub pe-5">
            {{ text }}
        </div>
    </div>
</template>

<script>
export default {
    name:'Certifications',
    data () {
        return {}
    },
    props:{
        title: String,
        icon: String,
        text: String
    }
}
</script>

<style lang="scss" scoped>
@use '../../assets/style/partials/variables' as*;
i{
    font-size: 2em;
    color: $special-bg-font ;
}
.sub{
    color: $options-color;
}
</style>