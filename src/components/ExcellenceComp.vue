<template>
    <div class="container">
        <div>
            <div>
                our business area
            </div>
            <div>
                excellence in <span>service</span>
            </div>
            <div class="row">
                <div class="col-10">
                    We are leaders in providing consultancy services with a set of cutting-edge technologies and a team of
                    experienced and renowned professionals. These are some options that you can hire.
                </div>
                <div class="col-2 d-flex justify-content-end align-items-center">
                    <div class="btn btn-primary">
                        see all
                    </div>
                </div>
            </div>
        </div>
        <div class=" row row-cols-3">
            <div v-for="n in 6" class="col p-2">
                <InfoCard  />
            </div>
        </div>
    </div>
</template>
<script>
import InfoCard from './reusable/InfoCard.vue';

export default {
    name: "ExcellenceComp",
    data() {
        return {

        };
    },
    components: { InfoCard }
}
</script>
<style lang="scss" scoped></style>