<template>
  <div class="header-container">
    <div :class="['hidden-xs-only', 'pc-header', {'nav-bar-fixed': navBarFixed}]" ref="pcHeaderRef">
      <div class="pc-header-nav">
        <div class="pc-nav-item">首页</div>
        <div class="pc-nav-item">首页</div>
        <div class="pc-nav-item">首页</div>
        <div class="pc-nav-item">首页</div>
        <div class="pc-nav-item">首页</div>
      </div>
    </div>
    <div class="hidden-sm-and-up h5-header">
      <div class="h5-open-list">
        <div class="icon-bar"></div>
        <div class="icon-bar"></div>
        <div class="icon-bar"></div>
      </div>
    </div>
    <div class="header-exhibition"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navBarFixed: false
    }
  },
  mounted() {
    // 事件监听滚动条
    window.addEventListener("scroll", this.scrolling);
  },
  destroyed() {
    // 移除事件监听
    window.removeEventListener("scroll", this.scrolling);
  },
  methods: {
    scrolling() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      let height= this.$refs.pcHeaderRef.offsetHeight;  //100
      //  当滚动超过 50 时，实现吸顶效果
      if (scrollTop > height) {
        this.navBarFixed = true
      } else {
        this.navBarFixed = false
      }
    }
  }
};
</script>

<style lang="scss">
.header-container {
  // pc-header start
  .pc-header {
    height: 52px;
    background: rgba(40, 42, 44, 0.6);
    color: #fff;
    position: fixed;
    width: 100%;
  }
  .pc-header-nav {
    width: 1000px;
    height: 100%;
    margin: 0 auto;
    display: flex;
  }
  .pc-nav-item {
    padding: 0 20px;
    display: flex;
    align-items: center;
    color: rgb(226, 225, 225);
  }
  .nav-bar-fixed {

  }
  // h5-header start
  .h5-header {
    position: fixed;
  }
  .h5-open-list {
    width: 44px;
    height: 38px;
    border: 1px solid #999;
    border-radius: 4px;
    box-sizing: border-box;
    padding: 11px 10px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .icon-bar {
      display: block;
      background: #888;
      width: 22px;
      height: 2px;
      border-radius: 1px;
    }
  }
  .header-exhibition {
    background: skyblue;
    @media screen and (min-width: 768px) {
      height: 320px;
    }
    @media screen and (max-width: 768px) {
      height: 220px;
    }
  }
}
</style>