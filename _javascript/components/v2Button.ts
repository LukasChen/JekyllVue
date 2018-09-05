import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class V2Button extends Vue {
  public count: number = 0;

  public addCount(): void {
    this.count++;
  }
}

/*
export default Vue.extend({
  data: (): IData => ({
    count: 0
  }),
  methods: {
    addCount() {
      this.count++;
    }
  }
});
*/
