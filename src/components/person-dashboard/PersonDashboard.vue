<template>
    <div class="dashboard-container">
      <div v-if="!loading">
        <h1>Person Dashboard</h1>
          <div id="persons">
            <div 
              v-for="person of persons" 
              :key="person.id"
            >
            {{ person.id}} - {{ person.name}}
            <button
              @click="onEdit(person)">
              Edit
            </button>

            <button
              @click="onDelete(person)">
              Delete
            </button>

            </div>
          </div>
          <input 
            type="text"
            placeholder="Person Name"
            v-model="name">
          <button 
            :disabled="!isValid"
            @click="onAdd({ id: persons.length, name: name})"
          >
            Add Person
          </button>
        </div>
      <loading-spinner v-if="loading"></loading-spinner>
    </div>
</template>

<script lang="ts">
import { Prop, Vue } from "vue-property-decorator";
import { State, Action, Getter } from "vuex-class";
import Component from "vue-class-component";

import PersonItem from "../person-item/PersonItem.vue";
import LoadingSpinner from "../loading-spinner/LoadingSpinner.vue";

import { personService } from "../../services/person.service";
import { Person } from "../../models/person.interface";

@Component({
  components: {
    PersonItem,
    LoadingSpinner
  }
})
export default class PersonDashboard extends Vue {
  @Action("getPersons") getPersons: any;
  @Action("addPerson") addPerson: any;
  @Action("deletePerson") deletePerson: any;
  @Action("editPerson") editPerson: any;

  @Getter("getPersons") persons: Person[];
  @Getter("getLoading") loading: boolean;

  name: string = "";

  created() {
    this.getPersons();
  }

  onAdd(person: Person) {
    this.addPerson(person);

    this.name = "";
  }

  onDelete(person: Person) {
    this.deletePerson(person);
  }

  onEdit(person: Person) {
    person.name = "Edited_" + person.name;

    this.editPerson(person);
  }

  get isValid(): boolean {
    return this.name !== "";
  }
}
</script>

<style scoped>
.dashboard-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>