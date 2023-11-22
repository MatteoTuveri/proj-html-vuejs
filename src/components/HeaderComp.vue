<template>
    <div class="container py-2">
        <div class="d-flex justify-content-between text-white">
            <div>
                <i :class="`${store.companyInfo.openHours.icon} me-2`"></i>
                <span>{{ store.companyInfo.openHours.text }}</span>
            </div>
            <ul class="d-flex mb-0">
                <li>
                    <i :class="`${store.companyInfo.phoneContact.icon} me-2`"></i>
                    <span>{{ store.companyInfo.phoneContact.text }}</span>
                </li>
                <li>
                    <i :class="`${store.companyInfo.mailContact.icon} me-2`"></i>
                    {{ store.companyInfo.mailContact.text }}
                </li>
                <li v-for="item in store.companyInfo.social">
                    <i :class="item"></i>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import { store } from '../data/store';
export default {
    name: 'HeaderComp',
    data() {
        return {
            store
        }
    },
}
</script>
<style lang="scss" scoped>
ul {
    list-style: none;

    li {
        margin: 0px 15px;
    }
}
</style>