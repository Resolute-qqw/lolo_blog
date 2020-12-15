<template>
  <div class="header-container">
    <header-nav />
    <header-banner />
  </div>
</template>

<script>
import headerNav from '@/components/pc/header-nav'
import headerBanner from '@/components/pc/header-banner'
export default {
  components: {
    headerNav,
    headerBanner
  },
  data() {
    return {
    }
  },
  mounted() {
  },
  destroyed() {
  },
  methods: {
  }
};
</script>

<style lang="scss">
  .header-container {
    position: relative;
    z-index: 1000;
    margin: 0;
    padding: 0;
  }
</style>