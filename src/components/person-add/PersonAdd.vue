<template>
    <div class="add-person-panel row">
        <input
          class="input"
          type="text"
          tabindex="1"
          placeholder="Person Name"
          v-model="name"
        >

        <button
          class="btn"
          tabindex="2"
          :class="{ 'btn-disabled' : !isValid}"
          :disabled="!isValid"
          @click="onAdd({ id: null, name: name})">
          Add Person
        </button>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import { Person } from "../../models/person.interface";

@Component({})
export default class PersonAdd extends Vue {

  name: string = "";

  onAdd(person: Person) {
    this.$emit("add-person", person);
    this.name = "";
  }

  get isValid(): boolean {
    return this.name.trim() !== "";
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/styles.scss";

.add-person-panel {
  display: flex;
  justify-content: space-between;
}
</style>