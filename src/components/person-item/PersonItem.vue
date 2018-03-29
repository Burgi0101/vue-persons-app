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
import { Prop, Vue } from "vue-property-decorator";
import { Action, Getter } from "vuex-class";
import Component from "vue-class-component";

import { Person } from "../../models/person.interface";

@Component({})
export default class PersonItem extends Vue {
  @Prop() person: Person;
  @Action("editPerson") editPerson: any;
  @Action("deletePerson") deletePerson: any;

  name: string = this.person.name;
  editing: boolean = false;

  toggleEdit(event: Person) {
    if (this.editing) {
      event.name = this.name;
      this.editPerson(event);
    }
    this.editing = !this.editing;
  }

  onDelete(person: Person) {
    this.deletePerson(person);
  }
}
</script>

<style scoped>

</style>