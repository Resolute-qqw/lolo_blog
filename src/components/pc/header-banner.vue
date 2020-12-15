<template>
  <div class="header-banner">
    <div class="animated-banner">
      <div class="layer">
        <img src="@/assets/images/header_banner_01.png" alt="" class="">
      </div>
      <div class="layer">
        <img src="@/assets/images/header_banner_02.png" alt="" class="">
      </div>
      <div class="layer">
        <img src="@/assets/images/header_banner_03.png" alt="" class="">
      </div>
      <div class="layer">
        <img src="@/assets/images/header_banner_04.png" alt="" class="">
      </div>
      <div class="layer">
        <img src="@/assets/images/header_banner_05.png" alt="" class="">
      </div>
      <div class="layer">
        <img src="@/assets/images/header_banner_06.png" alt="" class="">
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
  .header-banner {
    background-color: #f9f9f9;
    min-height: 155px;
    height: 9.375vw;
    min-width: 999px;
    .animated-banner {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      overflow: hidden;
    }
    .layer {
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        vertical-align: middle;
      }
    }
  }
</style>