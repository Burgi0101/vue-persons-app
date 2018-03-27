<template>
    <div>
        {{ person.id }} - {{ person.name }}
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import { Person } from "../../models/person.interface";

@Component({})
export default class PersonItem extends Vue {
  @Prop() person: Person;
}
</script>

<style scoped>

</style>