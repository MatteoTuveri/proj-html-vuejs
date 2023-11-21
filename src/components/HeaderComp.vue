<template>
    <div class="d-flex justify-content-between text-white">
        <div>
            <i class="fa-solid fa-clock me-2"></i>
            <span>Open Hours: Mon-Sat-9:00-18:00</span>
        </div>
        <ul class="d-flex mb-0">
            <li>
                <i class="fa-solid fa-phone me-2"></i>
                <span>+1 (305) 1234-5678</span>
            </li>
            <li>
                <i class="fa-solid fa-envelope me-2"></i>
                hello@exemple.com
            </li>
            <li>
                <i class="fa-brands fa-facebook-f"></i>
            </li>
            <li>
                <i class="fa-brands fa-twitter"></i>
            </li>
            <li>
                <i class="fa-brands fa-linkedin-in"></i>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:'HeaderComp',
    data(){
        return{

        }
    }
}
</script>
<style lang="scss" scoped>
ul{
    list-style: none;
    li{
        margin: 0px 15px;
    }
}
</style>