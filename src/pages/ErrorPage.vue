<template>
    <ErrorNav/>
    <ErrorInfo/>
</template>
<style>
</style>

<script>
import ErrorNav from "../components/error/ErrorNav.vue";
import ErrorInfo from "../components/error/ErrorInfo.vue";
export default {
  name: "OverviewPage",
  props: {
    msg: String,
  },
  components: {
    ErrorNav,
    ErrorInfo,
  },
};
</script>
