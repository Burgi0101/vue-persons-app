<template>
    <div class="row">

        <div v-if="!editing">
          {{ person.id}} - {{ person.name}}
        </div>

        <div v-if="editing">
            <input
              class="input"
              type="text"
              v-model="name"
            >
        </div>

        <button
            class="btn"
            @click="toggleEdit(person)">
            {{ editing ? 'Done' : 'Edit' }}
        </button>

        <button
            class=" btn btn-danger"
            @click="$emit('delete-person', person)">
            Delete
        </button>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import { Person } from "../../models/person.interface";

@Component({})
export default class PersonItem extends Vue {
  @Prop() person: Person;

  name: string = this.person.name;
  editing: boolean = false;

  toggleEdit(person: Person) {
    if (this.editing) {
      if (this.hasChanged) {
        person.name = this.name;
        this.$emit("edit-person", person);
      }
    }
    this.editing = !this.editing;
  }

  get hasChanged(): boolean {
    return this.name !== this.person.name;
  }
}
</script>

<style lang="scss"scoped>
@import "../../assets/styles.scss";
</style>