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
import { Component, Prop, Vue } from "vue-property-decorator";

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
  loading: boolean = false;
  persons: Person[] = [];
  name: string = "";

  created() {
    this.getPersons();
  }

  getPersons() {
    this.loading = true;

    personService.getPersons().then(response => {
      this.persons = response.data;
      this.loading = false;
    });
  }

  onAdd(person: Person) {
    this.loading = true;

    personService.addPerson(person).then(response => {
      this.persons.push(response.data);
      this.name = "";
      this.loading = false;
    });
  }

  onEdit(person: Person) {}

  onDelete(person: Person) {
    this.loading = true;

    personService.deletePerson(person).then(() => {
      this.persons = this.persons.filter(p => p !== person);
      this.loading = false;
    });
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