<template>
  <div id="app">
    <Header />
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/h5/header'
export default {
  components: {
    Header
  }
}
</script>
\
<style>
@import "./assets/style/reset.scss";

</style>
