<template>
    <div class="d-flex position-relative">
        <div class="w-50 d-flex justify-content-end align-items-center">
            <div>
                TheCompanyComp
            </div>
        </div>
        <div class="w-50">
            <img src="/Images/imgs/about-4.jpg" alt="">
        </div>
        <div class="position-absolute img"></div>
    </div>
</template>
<script>
export default {
    name: 'AboutComp',
    data() {
        return {

        }
    }
}
</script>
<style lang="scss" scoped>
img{
    width: 100%;
}
.img{
  background-image: url('/Images/imgs/bullets.png');
  background-size: cover;
  width: 200px;
  height: 80px;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.5;
  z-index: 100;
}
</style>