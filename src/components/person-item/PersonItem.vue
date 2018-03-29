<template>
    <div>
        <div v-if="!editing">
            {{ person.id}} - {{ person.name}}
        </div>

        <div v-if="editing">
            <input 
                type="text"
                v-model="name"
            >
        </div>

        <button
            @click="toggleEdit(person)">
            {{ editing ? 'Done' : 'Edit' }}
        </button>

        <button
            @click="onDelete(person)">
            Delete
        </button>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Action } from "vuex-class";

import { Person } from "../../models/person.interface";

@Component({})
export default class PersonItem extends Vue {
  @Prop() person: Person;
  @Action("editPerson") editPerson: any;
  @Action("deletePerson") deletePerson: any;

  name: string = this.person.name;
  editing: boolean = false;

  toggleEdit(person: Person) {
    if (this.editing) {

      if (this.hasChanged) {
        person.name = this.name;
        this.editPerson(person);
      }
    }
    this.editing = !this.editing;
  }

  onDelete(person: Person) {
    this.deletePerson(person);
  }

  get hasChanged(): boolean {
    return this.name !== this.person.name;
  }
}
</script>

<style scoped>

</style>