<template id="">
  <div class="tab-pane" v-show="active">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: 'v2Tab',
  props: {
    heading: String
  },
  mounted() {
    this.$parent.addTabs(this);
  },
  data() {
    return {
      // This data property will be manipulated by the parent component
      active: false
    }
  }
});
</script>

<style lang="scss" scoped>
  .nav-link {
    cursor: pointer;
  }
</style>
