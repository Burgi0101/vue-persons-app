<template>
    <div class="app">
        <person-dashboard></person-dashboard>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import PersonDashboard from "./containers/person-dashboard/PersonDashboard.vue";

@Component({
  components: {
    PersonDashboard
  }
})
export default class AppComponent extends Vue {}
</script>

<style lang="scss" scoped>
.app {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>