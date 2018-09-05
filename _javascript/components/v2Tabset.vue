<template id="">
  <div class="tabs">
    <ul class="nav nav-tabs">
      <li class="nav-item" v-for="tab in tabs" :key="tab.index">
        <a class="nav-link" @click="selectTab(tab.index)" :class="{ active: tab.active }" role="tab">{{tab.heading}}</a>
      </li>
    </ul>
    <div class="tab-content">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import Vue,{ VNode } from "vue";

interface ITab extends VNode {
  active: boolean;
  heading?: string;
  index: number;
};

export default Vue.extend({
  data: () => ({
    tabs: [],
    activeTabIndex: 0
  }),
  methods: {
    addTabs(tab: ITab): void {
      const index = this.tabs.length;
      if (index === 0) tab.active = true;
      tab.index = index; 
      this.tabs.push(tab);
      console.log(this.tabs);
    },
    selectTab(index: number): void {
      console.log(this.tabs);
      // The reason for not putting this into 'this'is to avoid recursive errors
      let oldTab: ITab = this.tabs[this.activeTabIndex];
      let newTab: ITab = this.tabs[index];
      oldTab.active = false;
      this.activeTabIndex = index;
      newTab.active = true;
    }
  }
});
</script>

<style lang="scss" scoped>
  .tab-content > .tab-pane {
    display: block;
  }
</style>
