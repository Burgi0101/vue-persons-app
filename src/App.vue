<template>
    <div>
        <person-dashboard></person-dashboard>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import PersonDashboard from "./components/person-dashboard/PersonDashboard.vue";

@Component({
  components: {
    PersonDashboard
  }
})
export default class AppComponent extends Vue {}
</script>

<style scoped>

</style>